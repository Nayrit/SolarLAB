<?php
/**
 * cPanel fallback contact endpoint (optional).
 * Upload this next to your site if you host on Apache/cPanel without Node API routes.
 * Point the form at it with: NEXT_PUBLIC_CONTACT_ENDPOINT=/contact-mail.php
 *
 * Free — uses PHP mail() to solarhubtechnology@gmail.com
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

// Honeypot
if (!empty($data['website'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$org = trim((string)($data['org'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$model = trim((string)($data['model'] ?? ''));

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Valid name and email are required']);
  exit;
}

$to = 'solarhubtechnology@gmail.com';
$subject = 'Solarhub rooftop enquiry — ' . $name;
$body = "Name: $name\nEmail: $email\nOrganisation: " . ($org !== '' ? $org : '—') .
  "\nPreferred model: $model\n\n" . ($message !== '' ? $message : '(No additional message)');
$headers = [
  'From: Solarhub Website <noreply@' . ($_SERVER['HTTP_HOST'] ?? 'solarhub.local') . '>',
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=utf-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
  http_response_code(503);
  echo json_encode(['ok' => false, 'error' => 'Could not send email from this server']);
  exit;
}

echo json_encode(['ok' => true]);
