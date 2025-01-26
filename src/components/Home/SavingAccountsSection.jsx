import { BiArrowFromLeft, BiPlusCircle } from "react-icons/bi";

import ProductCard from "../ProductCard";
import { ProductsItem } from "../../constants/ProductsItem";

export default function SavingAccountsSection() {
  return (
    <section className="px-12 sm:px-32 mt-24">
      <div className="flex items-end justify-between">
        <div className="sm:w-2/3 space-y-4">
          <p className="text-sm">Saving Accounts</p>
          <h2 className="text-6xl font-bold">
            Organize your money the right way
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <button className="flex items-center gap-1 text-sm text-primary">
            All Features
            <BiArrowFromLeft />
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {ProductsItem.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div>
          <div className="bg-[#737373]/20 rounded-3xl h-[200px] flex items-center justify-center">
            <BiPlusCircle className="text-4xl text-neutral-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
