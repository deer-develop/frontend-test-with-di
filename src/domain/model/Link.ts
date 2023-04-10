import React, { PropsWithChildren } from "react";
import { UrlObject } from "url";

export type Link = React.ElementType<
  PropsWithChildren<{
    href: string | UrlObject;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }>
>;
