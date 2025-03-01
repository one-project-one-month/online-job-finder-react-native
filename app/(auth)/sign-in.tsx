import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

import SafeView from "@/components/common/SafeView";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";
import { Link, Redirect, router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import { HStack } from "@/components/ui/hstack";
import { ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { signInSchema, SignInSchemaType } from "@/schema/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl } from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, KeyIcon, Mail } from "lucide-react-native";
import useJobTypeState from "@/store/useJobTypeState";

export default function SignIn() {
  const navigation = useNavigation();
  const { isOnboarded } = useOnboardState();
  const { signIn, session } = useSession();
  const { jobType, jobRole } = useJobTypeState();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  const handleSignIn = async (data: SignInSchemaType) => {
    signIn();
    if (jobType && jobRole) {
      // Navigate after signing in. You may want to tweak this to ensure sign-in is
      // successful before navigating.
      router.replace("/");
      // console.log(data);
    } else {
      router.replace("/job-type");
    }
  };

  const handleState = () => {
    setShowPassword(!showPassword);
  };
  if (!isOnboarded) {
    return <Redirect href="/on-boarding" />;
  }
  if (session) {
    return <Redirect href="/" />;
  }
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="dark" />
        <VStack className=" p-6" space="3xl">
          <VStack space="md">
            <Text size="2xl" className=" text-[#356899] font-semibold">
              Jôbizz
            </Text>
            <Text size="3xl" className=" font-semibold">
              Welcome Back 👋
            </Text>
            <Text className=" text-[#0D0D26] opacity-40">
              Let’s log in. Apply to jobs!
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
                <VStack>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input className="my-1 h-14 rounded-[10px]">
                        <InputSlot className="pl-3">
                          <InputIcon as={KeyIcon} />
                        </InputSlot>
                        <InputField
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          onChangeText={onChange}
                          value={value}
                          onBlur={onBlur}
                        />
                        <InputSlot className="pr-3" onPress={handleState}>
                          <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                        </InputSlot>
                      </Input>
                    )}
                    name="password"
                  />
                  {errors.password && (
                    <Text size="sm" className=" text-red-700">
                      {errors.password.message}
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
              <ButtonText className=" font-normal">Login</ButtonText>
            </Button>
            <Link
              href="/forgot-password"
              className=" block text-primary-main text-center"
            >
              Forgot Password
            </Link>
          </VStack>
          <HStack space="sm" className=" justify-center">
            <Text className=" text-[#0D0D26] opacity-40">
              Haven't an account ?
            </Text>
            <Link href="/sign-up" className=" text-primary-main">
              Register
            </Link>
          </HStack>
        </VStack>
      </ScrollView>
    </SafeView>
  );
}
