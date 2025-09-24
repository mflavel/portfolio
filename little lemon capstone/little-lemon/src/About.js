import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { HStack, VStack } from "@chakra-ui/react";

const About = () => {
    return (
        <>
            <div  style={{ textAlign: 'center', padding: "20px", margin: "20px"}} >
                <h2>Welcome to Little Lemon</h2>
                <p>At Little Lemon, we believe great food should be fresh, simple, and full of flavor. Our restaurant blends classic recipes with a modern twist, offering a menu that celebrates seasonal ingredients and bold Mediterranean-inspired dishes. Whether you’re joining us for a casual lunch, a cozy dinner, or a special celebration, we’re here to make every visit memorable. Warm service, inviting atmosphere, and delicious meals—that’s the Little Lemon way.</p>
            </div>
            <HStack justifyContent="space-around" alignItems="center" padding="20px" style={{ backgroundColor: '#495E57', color: 'white' }}>
                <VStack alignItems="center" justifyContent="center">
                    <h2>Chicago</h2>
                    <p>addess here</p>
                    <p>phone number here</p>
                </VStack>
                <VStack alignItems="center" justifyContent="center">
                    <h2>New York</h2>
                    <p>addess here</p>
                    <p>phone number here</p>
                </VStack>
                <VStack alignItems="center" justifyContent="center">
                    <h2>San Francisco</h2>
                    <p>addess here</p>
                    <p>phone number here</p>
                </VStack>
            </HStack>
        </>)
}

export default About;