import { getServiceIntoDb } from "@/services/all-service/getServiceIntoDb";
import { searchService } from "@/services/all-service/serverAction";
import { IService } from "@/types";
import { revalidateTag } from "next/cache";
import { FaSearch } from "react-icons/fa";

type SearchByDataProps = {};

const SearchByData: React.FC<SearchByDataProps> = async () => {
  const { data } = await getServiceIntoDb();

  const handelSearch = () => {};

  return (
    <div className="max-w-[1200px] mx-auto p-5 md:p-[50px]">
      {/* search by location, name, and category */}
      <div className=" px-8 py-12  shadow-custom bg-white rounded-lg mb-20">
        <form action={searchService} className="w-full flex  gap-5">
          {/* location */}
          <select
            name="location"
            className=" bg-transparent border border-[#e6ebeb] text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option disabled selected value="">
              Please select a location
            </option>
            {data &&
              data?.data?.map((item: IService) => (
                <option key={item.id} value={item.location}>
                  {item.location}
                </option>
              ))}
          </select>

          {/* name */}
          <select
            name="name"
            className="bg-transparent border border-[#e6ebeb] text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option disabled selected value="">
              Please select a name
            </option>
            {data &&
              data?.data?.map((item: IService) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>

          {/* category */}
          <select
            name="category"
            className="bg-transparent border border-[#e6ebeb] text-[#848484] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option disabled selected value="">
              Please select a category
            </option>
            {data &&
              data?.data?.map((item: IService) => (
                <option key={item.category.id} value={item.category.id}>
                  {item.category.name}
                </option>
              ))}
          </select>

          {/* search button */}
          <button
            type="submit"
            className=" cursor-pointer flex items-center gap-2 justify-center bg-[#ff7c5b] text-white px-10 rounded border-none font-semibold"
          >
            <span>
              <FaSearch size={10} />
            </span>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchByData;
