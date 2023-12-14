export const onRequest: PagesFunction<never, "fileName"> = async (context) => {
  const targetURL = new URL(context.request.url);

  targetURL.hostname = "cf-cache-test.stin.ink";

  return fetch(targetURL, {
    headers: context.request.headers,
  });
};
