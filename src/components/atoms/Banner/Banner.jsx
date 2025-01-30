/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6MwYKQLYzP8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 p-6 md:p-12 rounded-lg shadow-lg">
      <div className="flex-1">
        <h1 className="text-8xl md:font-bold text-gray-900 dark:text-gray-50">Message Slack</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          This is a short description of the product. It highlights the key features and benefits of the product.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">$99.99</span>
          <span className="text-sm md:text-base line-through text-gray-500 dark:text-gray-400">$129.99</span>
        </div>
        <div className="mt-6">
          <Button className="w-full md:w-auto">Buy Now</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://media.gettyimages.com/id/1467438291/photo/connecting-with-social-media-network-via-smartphone.jpg?s=2048x2048&w=gi&k=20&c=XqLI4_TykBd13VRyLC7qxCrKYtrFjS0vwKySRhLXl5c="
          alt="Product Image"
          width={500}
          height={500}
          className="w-full h-64 md:h-auto object-cover rounded-lg"
          style={{ aspectRatio: "500/500", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}