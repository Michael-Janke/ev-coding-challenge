import { ZodType } from "zod";

export const jsonFetcher = (url: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url).then((res) => res.json());

export const jsonPost = (url: string, body?: Object) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const jsonDelete = (url: string, body?: Object) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: "DELETE",
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const zodFetcher =
  <Type extends ZodType>(type: Type) =>
  (url: string) =>
    fetch(process.env.NEXT_PUBLIC_API_URL + url)
      .then((res) => res.json())
      .then(type.parse);
