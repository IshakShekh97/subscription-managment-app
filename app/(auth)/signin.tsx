import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href={"/(auth)/signup"}>
        <Text className="text-blue-500">
          {"Don't"} have an account? Sign up
        </Text>
      </Link>
      <Link href={"/"}>
        <Text className="text-blue-500">home</Text>
      </Link>
    </View>
  );
};

export default Signin;
