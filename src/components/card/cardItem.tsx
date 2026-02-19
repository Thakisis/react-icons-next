import CopyLibraryImport from "@/components/card/copyLibraryImport";
import CopyShadcnCommand from "@/components/card/copyShadcnCommand";
import SvgExportOptions from "@/components/card/svgExportOptions";
import type { iIcons } from "@/global/icons";
import { cn, titleToPascal } from "@/lib/utils";

interface iCard extends iIcons {
  isFolder: boolean;
  iconSize: number;
}

const Card = ({ isFolder, icon: Icon, name, iconSize }: iCard) => {
  const itemName = titleToPascal(name);
  return (
    <div
      className={cn(
        "px-4 pt-4 pb-2",
        "relative overflow-hidden",
        "group flex flex-col items-center justify-center space-y-2.5 rounded-md",
        "border border-zinc-200 dark:border-zinc-800",
      )}
    >
      <div className="max-w-(--icon-size) h-(--icon-size)">
        <Icon width="100%" height="100%" />
      </div>
      <p className="text-sm tracking-tight text-black dark:text-white">
        {itemName}
      </p>
      <div
        className={cn(
          "absolute top-0 right-0",
          "rounded-bl-md border-b border-l border-zinc-200 dark:border-zinc-800",
        )}
      >
        {/* <CopySource iconSize={14} itemName={itemName} ItemIcon={icon} /> */}
      </div>
      <div className="flex items-center space-x-1"></div>
    </div>
  );
};
/*
<CopyShadcnCommand
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={Icon}
        />
        <CopyLibraryImport
          isFolder={isFolder}
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={Icon}
        />
        <SvgExportOptions />
  iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={icon}
          */

export default Card;
