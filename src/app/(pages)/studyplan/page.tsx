"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DatePicker } from "@/components/ui/datePicker";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StudyPlan = () => {
  const [data, setData] = useState({
    topic: "",
    description: "",
    materials: "",
    date: new Date(),
    format: "",
  });
  const setDate = (date: Date) => {
    setData({ ...data, date });
  };

  console.log(data);

  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 ">
      <div className=" h-full flex flex-col gap-5 pt-20 pb-8 xl:pt-32 xl:pb-32 px-12 sm:px-24 max-w-[36rem] mx-auto sm:min-w-[35rem]">
        <h1 className="text-[2.8rem] font-londrinaSolid font-light">
          Generate Study Plan!
        </h1>
        <div className="h-full flex flex-col gap-5 w-5/6">
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="topic">Write exam topic</Label>
            <Input
              type="email"
              id="topic"
              placeholder="Circulatory system..."
              className="bg-[#eeeeee]"
              onChange={(e) => setData({ ...data, topic: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="description">
              Write description / material scope (optional)
            </Label>
            <Textarea
              placeholder="Value..."
              id="description"
              className="bg-[#eeeeee]"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>

          <div className="grid gap-1.5">
            <Label className="w-fit" htmlFor="materials">
              Attatch materials (optional)
            </Label>
            <Input
              className="bg-[#eeeeee]"
              id="materials"
              type="file"
              onChange={(e) => setData({ ...data, materials: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="cards">Type exam date (deadline)</Label>
            <DatePicker date={data["date"]} setDate={setDate} />
          </div>

          <div>
            <Label htmlFor="format">Select format</Label>
            <Select
              onValueChange={(value) => setData({ ...data, format: value })}
            >
              <SelectTrigger className="bg-[#eeeeee]" id="format">
                <SelectValue placeholder="Select a format" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Formats</SelectLabel>
                  <SelectItem value="Obsidian">Obsidian</SelectItem>
                  <SelectItem value="Goodnotes">Goodnotes</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
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
            Choose <span className="font-light">exam topic</span>
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
            Select <span className="font-light">length </span> of notes
          </li>
          <li>
            Select <span className="font-light"> file format</span>
          </li>
          <li>
            Press <span className="font-light">generate</span>
          </li>
          <li>Download file</li>
          <li>
            Import it in your notes App <br />
            (e.g. Obsidian or Goodnotes) <br />
            or just use it as pdf.
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

export default StudyPlan;
