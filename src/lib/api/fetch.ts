import { ZodType } from "zod";

export const jsonFetcher = (url: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url).then((res) => res.json());

export const jsonPost = (url: string, body?: Object) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then((res) => res.json());

export const jsonDelete = (url: string, body?: Object) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const zodFetcher =
  <Type extends ZodType>(type: Type) =>
  (url: string) =>
    fetch(process.env.NEXT_PUBLIC_API_URL + url)
      .then((res) => res.json())
      .then(type.parse);
