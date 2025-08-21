"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";

export default function SubjectFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const querySubject = searchParams.get("subject") || "all";

  const [subject, setSubject] = useState(querySubject);

  useEffect(() => {
    setSubject(querySubject);
  }, [querySubject]);

  useEffect(() => {
    let newUrl = "";
    if (subject == "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject, searchParams, router]);

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all"> All Subjects </SelectItem>

        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
