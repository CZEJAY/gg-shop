import axios, { AxiosResponseHeaders } from "axios";
import { type ClassValue, clsx } from "clsx"
import { stringify } from "querystring";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN"
})

export function calculateDiscountedPrice(originalPrice: number, percentage: number, isDiscount?: boolean): number {
  if (isDiscount) {
      // Calculate the discounted price
      const discountAmount = originalPrice * (percentage / 100);
      const newPrice = originalPrice - discountAmount;
      return newPrice;
  } else {
      // Calculate the increased price
      const increaseAmount = originalPrice * (percentage / 100);
      const newPrice = originalPrice + increaseAmount;
      return newPrice;
  }
}

export function formatPrice(price: number): string {
  // Convert the price to a string with two decimal places
  const formattedPrice = price.toFixed(2);

  // Add thousands separators
  const parts = formattedPrice.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Join the parts and return
  return parts.join(".");
}

export const adapter = axios.create({
  adapter: (config) => {
    return new  Promise((resole, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(config.method?.toUpperCase() as string, config.url as string, true)
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300){
          resole({
            data: JSON.parse(xhr.responseText),
            status: xhr.status,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders() as AxiosResponseHeaders | Partial<{}>,
            config,
            request: xhr
          })
        } else {
          reject(new Error(xhr.statusText))
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'))
      }

      const requestData = config.data ? stringify(config.data) : null
      xhr.send(requestData)
    })
  }
})