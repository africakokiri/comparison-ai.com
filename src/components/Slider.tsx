import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export const Slider = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
    >
      <CarouselContent className="*:h-dvh *:bg-blue-100">
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-8 z-10" />
      <CarouselNext className="absolute right-4 top-8 z-10" />
    </Carousel>
  );
};
