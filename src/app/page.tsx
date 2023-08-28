'use client'

import {Theme} from "@radix-ui/themes";
import RadixUi from "@/components/UI/radixUI/radix-ui";
import PopoverUi from "@/components/UI/radixUI/popover-ui";
import DefaultBlur from "@/components/NextImage/static/defaultBlur";
import Picture from "@/../public/images/pic-one.jpg"
import CustomImage from "@/components/UI/customImage/custom-image";
import Button from "@/components/tailwind/Button";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {
  return (
      <>
          {/*<Pagination searchParams={searchParams['page'] ?? '1'} per_page={searchParams['per_page'] ?? '5'}/>*/}
          {/*<DefaultBlur src={Picture} />*/}
          {/*<Blur src={Picture} />*/}
          {/*<AbortControllerCom />*/}
          <div className={"relative w-[400px] h-[400px]"}>
              <CustomImage src={"/images/pic-one.jpg"} alt={"picture"} priority />
          </div>
          <Button title={"Button"} className={"text-emerald-300 hover:bg-pink-800"} />
          <Theme>
              <RadixUi />
              <PopoverUi />
          </Theme>
      </>
  )
}
