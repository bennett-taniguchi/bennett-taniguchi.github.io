import { Button } from "../ui/button";
import {
  Card,
  CardContent,
 
  CardFooter,
  CardHeader,
 
} from "../ui/card";

export default function ProjectCard({ project }: any) {
  return (
    <Card className="w-[400px]    bg-white">
      <CardHeader></CardHeader>
      <CardContent className="mx-auto ">
        <img className="border"src={project.img} />
      </CardContent>
      <CardFooter className="flex-col gap-2 gap-y-4 font-mono">
        {project.name}
        <div className="flex flex-row gap-4">

          <a href={project.repo}>
          <Button className="hover:cursor-pointer" variant={"reverse"}>
            Repo
          </Button>
          </a>
          <a href={project.src}>
          <Button className="hover:cursor-pointer" variant={"reverse"}>
            Visit
          </Button>
</a>
          {/* <Button className="hover:cursor-pointer" variant={"reverse"}>
            Info
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
}
