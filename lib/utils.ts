import { type ClassValue, clsx } from "clsx"
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