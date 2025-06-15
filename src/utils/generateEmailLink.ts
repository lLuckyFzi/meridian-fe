/**
 * Generate Email.
 *
 * @param recipient Email.
 * @param subject (Opsional).
 * @param body (Opsional.
 */
export function generateMailtoLink(
  recipient: string,
  subject?: string,
  body?: string
): string {
  let mailto = `mailto:${recipient}`;
  const params: string[] = [];

  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }

  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  if (params.length > 0) {
    mailto += `?${params.join('&')}`;
  }

  return mailto;
}