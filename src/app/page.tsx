import Grid from "@/components/grid";
import IconList from "@/components/icon-list/icon-list";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { containerClasses } from "@/ui/container";
export default function Page() {
  return (
    <>
      <Navbar />
      <Grid className={cn(containerClasses, "pt-6 pb-14")}>
        <IconList />
      </Grid>
    </>
  );
}
