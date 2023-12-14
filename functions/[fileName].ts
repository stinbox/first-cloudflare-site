export const onRequest: PagesFunction<never, "fileName"> = async (context) => {
  return fetch(`https://cf-cache-test.stin.ink/${context.params.fileName}`, {
    headers: context.request.headers,
  });
};
