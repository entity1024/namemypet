import { useState, useCallback, useRef } from "react";
import { PetType, Gender, StyleType, NameEntry } from "@/types";
import { getNames } from "@/data/names";
import { shuffle } from "@/utils/random";

interface LastParams {
  petType: PetType;
  gender: Gender;
  style: StyleType;
}

export function useNameGenerator() {
  const [currentName, setCurrentName] = useState<NameEntry | null>(null);
  const queueRef = useRef<NameEntry[]>([]);
  const lastParams = useRef<LastParams | null>(null);

  const fillQueue = useCallback(
    (petType: PetType, gender: Gender, style: StyleType) => {
      const names = getNames(petType, gender, style);
      queueRef.current = shuffle(names);
    },
    []
  );

  const generate = useCallback(
    (petType: PetType, gender: Gender, style: StyleType) => {
      fillQueue(petType, gender, style);
      const [first, ...rest] = queueRef.current;
      queueRef.current = rest;
      setCurrentName(first);
      lastParams.current = { petType, gender, style };
    },
    [fillQueue]
  );

  const regenerate = useCallback(() => {
    if (!lastParams.current) return;

    if (queueRef.current.length === 0) {
      fillQueue(
        lastParams.current.petType,
        lastParams.current.gender,
        lastParams.current.style
      );
    }

    const [next, ...rest] = queueRef.current;
    queueRef.current = rest;
    setCurrentName(next);
  }, [fillQueue]);

  return { currentName, generate, regenerate };
}
