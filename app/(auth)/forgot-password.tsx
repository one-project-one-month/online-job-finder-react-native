import React from "react";
import SafeView from "@/components/common/SafeView";
import { StatusBar } from "expo-status-bar";
import { VStack } from "@/components/ui/vstack";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import { Text } from "@/components/ui/text";
import { Link, useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Controller, useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/schema/forgot-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollView } from "react-native";
import { FormControl } from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Mail } from "lucide-react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const handleSignIn = async (data: ForgotPasswordSchemaType) => {
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/confirm-reset");
    console.log(data);
  };
  return (
    <SafeView>
      <ScrollView>
        <StatusBar style="dark" />
        <VStack className=" p-6" space="3xl">
          <VStack space="md">
            <ArrowLeftIcon onPress={() => router.back()} />
            <Text size="2xl" className=" text-[#356899] font-semibold">
              Jôbizz
            </Text>
            <Text size="3xl" className=" font-semibold">
              Forgot Password
            </Text>
            <Text className=" text-[#0D0D26] opacity-40">
              Enter your email or phone number, we will send you verification
              code
            </Text>
          </VStack>
          <VStack space="3xl">
            <FormControl
              // isInvalid={isValid}
              size="md"
              // isDisabled={false}
              // isReadOnly={false}
              // isRequired={false}
            >
              <VStack space="sm">
                <VStack>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input className="my-1 h-14 rounded-[10px]">
                        <InputSlot className="pl-3">
                          <InputIcon as={Mail} />
                        </InputSlot>
                        <InputField
                          type="text"
                          placeholder="E-mail"
                          onChangeText={onChange}
                          value={value}
                          onBlur={onBlur}
                        />
                      </Input>
                    )}
                    name="email"
                  />
                  {errors.email && (
                    <Text size="sm" className=" text-red-700">
                      {errors.email.message}
                    </Text>
                  )}
                </VStack>
              </VStack>
            </FormControl>
            <Button
              variant={"solid"}
              size={"lg"}
              onPress={handleSubmit(handleSignIn)}
              className=" h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
            >
              <ButtonText className=" font-normal">Send code</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeView>
  );
}
