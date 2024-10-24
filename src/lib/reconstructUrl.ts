// utils/reconstructUrl.ts
export function reconstructUrl(url: string[]) {
    const decodedComponents = url.map((component) =>
      decodeURIComponent(component)
    );
    return decodedComponents.join("/");
  }
  