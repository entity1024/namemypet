import { useState, useCallback, useRef } from "react";
import { PetType, Gender, StyleType, NameEntry } from "@/types";
import { generateName } from "@/services/generator";

interface LastParams {
  petType: PetType;
  gender: Gender;
  style: StyleType;
}

export function useNameGenerator() {
  const [currentName, setCurrentName] = useState<NameEntry | null>(null);
  const lastParams = useRef<LastParams | null>(null);

  const generate = useCallback(
    (petType: PetType, gender: Gender, style: StyleType) => {
      const name = generateName(petType, gender, style);
      setCurrentName(name);
      lastParams.current = { petType, gender, style };
    },
    []
  );

  const regenerate = useCallback(() => {
    if (lastParams.current) {
      const name = generateName(
        lastParams.current.petType,
        lastParams.current.gender,
        lastParams.current.style
      );
      setCurrentName(name);
    }
  }, []);

  return { currentName, generate, regenerate };
}
