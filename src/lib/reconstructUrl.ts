// utils/reconstructUrl.ts
export function reconstructUrl(url: string[]) {
  // First decode all URL components
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );

  // Join the components
  let fullUrl = decodedComponents.join("/");

  // Remove the base URL if it exists in the string
  fullUrl = fullUrl.replace(/^(?:https?:\/\/)?liinky\.vercel\.app\//, '');

  // If the URL starts with 'https:/' (missing a slash), fix it
  if (fullUrl.startsWith('https:/')) {
    fullUrl = fullUrl.replace('https:/', 'https://');
  }

  // If the URL starts with 'http:/' (missing a slash), fix it
  if (fullUrl.startsWith('http:/')) {
    fullUrl = fullUrl.replace('http:/', 'http://');
  }

  // If the URL doesn't start with http(s), add it
  if (!fullUrl.startsWith('http')) {
    fullUrl = 'https://' + fullUrl;
  }

  return fullUrl;
}