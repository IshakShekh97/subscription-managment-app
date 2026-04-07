import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>SubscriptionsDetails: {id}</Text>
      <Link href={"/"}>
        <Text className="text-blue-500">Back to Home</Text>
      </Link>
    </SafeAreaView>
  );
};

export default SubscriptionsDetails;
