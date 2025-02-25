import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AuthServices from "@services/auth/user.services";
import { useAuthActions } from "@hooks/useAuthActions";
import { UserLogin } from "@interfaces";
import ScreenWrapper from "@components";

const loginFormControls = z.object({
  email: z
    .string({ required_error: "El campo es obligatorio" })
    .email({ message: "Ingrese un email válido" }),
  password: z
    .string({ required_error: "El campo es obligatorio" })
    .min(8, "El password debe tener 8 caracteres como mínimo"),
});

export const LoginScreen = () => {
  const { login } = useAuthActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(loginFormControls),
  });

  const handlePress = (data: UserLogin) => {
    AuthServices.login(data).then((res) => {
      login(res);
      router.replace("/(home)/");
    });
  };

  return (
    <ScreenWrapper>
      <View className="flex flex-col justify-center items-center gap-2 bg-white">
        <Text className="text-3xl font-semibold">MyTinerary</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <>
              <View className="bg-gray-200 flex flex-row gap-2 mx-12 p-2 relative">
                <Ionicons name="mail-outline" size={40} color={"black"} />
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  placeholder="Escribe tu email"
                  className="flex-grow bg-white rounded-lg"
                />
              </View>
              {!!errors.email && (
                <Text className="text-red-400 text-xs">
                  {" "}
                  {errors.email.message}{" "}
                </Text>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <>
              <View className="bg-gray-200 flex flex-row gap-2 mx-12 p-2">
                <Ionicons
                  name="lock-closed-outline"
                  size={40}
                  color={"black"}
                />
                <TextInput
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  placeholder="Password"
                  className="flex-grow bg-white rounded-lg"
                />
              </View>
              {!!errors.password && (
                <Text className="text-red-400 text-xs">
                  {" "}
                  {errors.password.message}{" "}
                </Text>
              )}
            </>
          )}
        />

        <Pressable
          className="bg-blue-500 rounded-lg"
          onPress={handleSubmit(handlePress)}
        >
          <Text className="text-white text-xl font-semibold py-2 px-4 ">
            Sign in
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};
