import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { MdArrowOutward } from "react-icons/md";
import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default function ContentBody({
  page,
}: any) {
  const formattedDate = formatDate(page.data.date);
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {page.tags.map((tag: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>

        <div className="socials inline-flex justify-center sm:justify-end m-2">
            <PrismicNextLink
              field={page.data.github}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="github code"
            >
              <FaGithub />
            </PrismicNextLink>

            <PrismicNextLink
              field={page.data.live}
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label="live site"
            >
              <MdArrowOutward />
            </PrismicNextLink>
        </div>

        <p className="mt-2 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formattedDate}
        </p>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
