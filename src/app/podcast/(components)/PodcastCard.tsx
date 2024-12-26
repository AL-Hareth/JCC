"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function PodcastCard({title, link, thumbnail}: {title: string, link: string, thumbnail: string}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-800 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white arabic-medium"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={thumbnail}
            height={180}
            width={360}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-6 py-4 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={link} className="arabic-medium text-md" target="_blank">شاهد الحلقة</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

