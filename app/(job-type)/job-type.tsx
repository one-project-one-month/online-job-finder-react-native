import React, { useState } from "react";
import SafeView from "@/components/common/SafeView";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import useJobTypeState from "@/store/useJobTypeState";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { jobRoleDatas, jobTypeDatas } from "@/constants/job-type-data";

export default function JobTypeScreen() {
  const { jobRole, setJobRole, setJobType } = useJobTypeState();
  const [jobRoles, setJobRoles] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const handleJobRoleSave = () => {
    if (jobRoles) {
      setJobRole(jobRoles.join(","));
    }
  };
  const handleJobTypeSave = () => {
    if (jobTypes) {
      setJobType(jobTypes.join(","));
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
          <CheckboxGroup
            value={jobRoles}
            onChange={(keys) => {
              setJobRoles(keys);
            }}
          >
            <VStack space="xl">
              {jobRoleDatas.map((job, idx) => (
                <Checkbox
                  key={idx}
                  value={job.key}
                  className={` h-14 justify-between rounded-[10px] border p-3 ${
                    jobRoles.includes(job.key)
                      ? " border-primary-main"
                      : "border-gray-200"
                  } `}
                  style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.006)" }}
                >
                  <CheckboxLabel size="lg">{job.name}</CheckboxLabel>
                  <CheckboxIndicator className=" border-primary-main">
                    <CheckboxIcon
                      className=" bg-primary-main border-none"
                      as={CheckIcon}
                    />
                  </CheckboxIndicator>
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
          <Button
            disabled={jobRoles.length > 0 ? false : true}
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
        <CheckboxGroup
          value={jobTypes}
          onChange={(keys) => {
            setJobTypes(keys);
          }}
        >
          <VStack space="xl">
            {jobTypeDatas.map((job, idx) => (
              <Checkbox
                key={idx}
                value={job.key}
                className={` h-14 justify-between rounded-[10px] border p-3 ${
                  jobTypes.includes(job.key)
                    ? " border-primary-main"
                    : "border-gray-200"
                } `}
                style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.006)" }}
              >
                <CheckboxLabel size="lg">{job.name}</CheckboxLabel>
                <CheckboxIndicator className=" border-primary-main">
                  <CheckboxIcon
                    className=" bg-primary-main border-none"
                    as={CheckIcon}
                  />
                </CheckboxIndicator>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
        <Button
          disabled={jobTypes.length > 0 ? false : true}
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
