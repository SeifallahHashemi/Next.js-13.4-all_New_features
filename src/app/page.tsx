'use client'

import Pagination from "@/components/pagination/pagination";
import DefaultBlur from "@/components/NextImage/static/defaultBlur";
import Picture from "@/../public/images/pic-one.jpg";
import Blur from "@/components/NextImage/static/placeholder/blur";
import AbortControllerCom from "@/components/abortController/AbortControllerCom";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) {
  return (
      <>
          <Pagination searchParams={searchParams['page'] ?? '1'} per_page={searchParams['per_page'] ?? '5'}/>
          <DefaultBlur src={Picture} />
          <Blur src={Picture} />
          <AbortControllerCom />
      </>
  )
}
