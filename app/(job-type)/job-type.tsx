import React, { useState } from "react";
import SafeView from "@/components/common/SafeView";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import useJobTypeState from "@/store/useJobTypeState";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

export default function JobTypeScreen() {
  const { jobRole, setJobRole, setJobType } = useJobTypeState();
  const [jobRoles, setJobRoles] = useState("");
  const [jobTypes, setJobTypes] = useState("");
  const fakeArr = new Array(5).fill(0);
  const handleJobRole = (data: string) => {
    setJobRoles(data);
  };
  const handleJobType = (data: string) => {
    setJobTypes(data);
  };
  const handleJobRoleSave = () => {
    if (jobRoles) {
      setJobRole(jobRoles);
    }
  };
  const handleJobTypeSave = () => {
    if (jobTypes) {
      setJobType(jobTypes);
      router.push("/");
    }
  };
  if (!jobRole) {
    return (
      <SafeView>
        <VStack space="3xl" className="p-6">
          <Box>
            <Text size="2xl" className=" text-[#356899] font-semibold">
              Jôbizz
            </Text>
          </Box>
          <Box>
            <Text size="3xl" className=" font-semibold">
              What type of job you’re looking for?
            </Text>
          </Box>
          <VStack space="md">
            {fakeArr.map((_, idx) => (
              <Pressable
                key={idx}
                className={` h-14 p-3 rounded-[10px] border ${
                  jobRoles === idx.toString()
                    ? " border-primary-main"
                    : "border-gray-200"
                } `}
                style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.006)" }}
                onPress={() => handleJobRole(idx.toString())}
              >
                <HStack>
                  <Text size="md" className=" font-medium">
                    Developer
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <Button
            disabled={jobRoles ? false : true}
            variant={"solid"}
            size={"lg"}
            className=" h-14 bg-[#356899] rounded-[10px] disabled:bg-gray-400"
            onPress={handleJobRoleSave}
          >
            <ButtonText className=" font-normal">Save</ButtonText>
          </Button>
        </VStack>
      </SafeView>
    );
  }
  return (
    <SafeView>
      <VStack space="3xl" className="p-6">
        <Box>
          <Text size="2xl" className=" text-[#356899] font-semibold">
            Jôbizz
          </Text>
        </Box>
        <Box>
          <Text size="3xl" className=" font-semibold">
            What type of job type you’re looking for?
          </Text>
        </Box>
        <VStack space="md">
          {fakeArr.map((_, idx) => (
            <Pressable
              key={idx}
              className={` h-14 p-3 rounded-[10px] border ${
                jobTypes === idx.toString()
                  ? " border-primary-main"
                  : "border-gray-200"
              } `}
              style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.006)" }}
              onPress={() => handleJobType(idx.toString())}
            >
              <HStack>
                <Text size="md" className=" font-medium">
                  Full Time
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>
        <Button
          disabled={jobTypes ? false : true}
          variant={"solid"}
          size={"lg"}
          className=" h-14 bg-[#356899] rounded-[10px] disabled:bg-gray-400"
          onPress={handleJobTypeSave}
        >
          <ButtonText className=" font-normal">Save</ButtonText>
        </Button>
      </VStack>
    </SafeView>
  );
}
