"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Flashcards = () => {
  const [data, setDate] = useState({
    topic: "",
    description: "",
    materials: "",
    cards: 30,
    format: "",
  });

  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 ">
      <div className=" h-full flex flex-col gap-5 pt-20 pb-8 xl:pt-32 xl:pb-32 px-12 sm:px-24 max-w-[36rem] mx-auto sm:min-w-[35rem]">
        <h1 className="text-[2.8rem] font-londrinaSolid font-light">
          Generate Flashcards!
        </h1>
        <div className="h-full flex flex-col gap-5 w-5/6">
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="topic">Write topic</Label>
            <Input
              type="email"
              id="topic"
              placeholder="Circulatory system..."
              className="bg-[#eeeeee]"
              onChange={(e) => setDate({ ...data, topic: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="description">Write description (optional)</Label>
            <Textarea
              placeholder="Value..."
              id="description"
              className="bg-[#eeeeee]"
              onChange={(e) =>
                setDate({ ...data, description: e.target.value })
              }
            />
          </div>

          <div className="grid gap-1.5">
            <Label className="w-fit" htmlFor="materials">
              Attatch materials (optional)
            </Label>
            <Input className="bg-[#eeeeee]" id="materials" type="file" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cards">Number of cards: {data["cards"]}</Label>
            <Slider
              defaultValue={[33]}
              max={200}
              step={1}
              id="cards"
              onValueChange={(value) => setDate({ ...data, cards: value[0] })}
            />
          </div>

          <div>
            <Label htmlFor="format">Select format</Label>
            <Select
              onValueChange={(value) => setDate({ ...data, format: value })}
            >
              <SelectTrigger className="bg-[#eeeeee]" id="format">
                <SelectValue placeholder="Select a format" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Formats</SelectLabel>
                  <SelectItem value="anki">Anki Flashcards</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-fit mt-4">Generate!</Button>
        </div>
      </div>

      <div className="w-fit mr-auto ml-auto xl:mr-auto h-full font-thin pb-20 pt-6 xl:pt-32 xl:pb-32 px-12 sm:px-24 mt-14">
        <p className="text-xl sm:text-3xl font-londrinaSolid">Instructions:</p>
        <ol className="list-decimal font-londrinaSolid font-thin text-xl sm:text-3xl ml-10">
          <li>
            Choose <span className="font-light">topic</span>
          </li>
          <li>
            *Add additional <span className="font-light">description</span>{" "}
            <br /> or
            <span className="font-light"> scope of material</span>
          </li>
          <li>
            *Attach context <span className="font-light"> materials</span>
          </li>
          <li>
            Select <span className="font-light">number </span> of cards
          </li>
          <li>
            Select <span className="font-light"> file format</span>
          </li>
          <li>Press generate</li>
          <li>Download file</li>
          <li>
            Import it in your flashcards App <br />
            (e.g. Anki Flashcards)
          </li>
        </ol>
        <p className="text-base sm:text-2xl font-londrinaSolid mb-8">
          *Optional
        </p>
        <Button className="w-fit">Show examples</Button>
      </div>
    </div>
  );
};
export default Flashcards;
