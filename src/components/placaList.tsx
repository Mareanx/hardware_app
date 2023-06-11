import React from "react";
import {
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  Button,
  Image,
} from "native-base";
import { Input } from "./Input";
import { myTheme } from "../style/style";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const placas = [
  {
    id: "50",
    fullName: "Placa de Vídeo Zotac Gaming GeForce RTX 3060 Twin Edge OC",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-zotac-gaming-geforce-rtx-3060-twin-edge-oc-white-12gb-gddr6-dlss-ray-tracing-zt-a30600h-10m_169184.png",
    descProd:
      "Vivencie o jogo com a nova GeForce RTX 3060 Series da ZOTAC GAMING, baseada na arquitectura NVIDIA Ampere. Construída com núcleos RT e tensores aprimorados",
    valorProd: "R$ 2.199,90",
  },
  {
    id: "51",
    fullName: "Placa De Vídeo Zotac NVIDIA GeForce RTX 4070 Gaming ",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-zotac-nvidia-geforce-rtx-4070-gaming-twin-edge-oc-12gb-gddr6x-dlss-ray-tracing-zt-d40700h-10m_169685.jpg",
    descProd:
      "A ZOTAC GAMING GeForce RTX 4070 Twin Edge OC é uma placa gráfica compacta e poderosa, apresentando a arquitetura NVIDIA Ada Lovelace e um design inspirado na aerodinâmica",
    valorProd: "R$ 4.499,00",
  },
  {
    id: "52",
    fullName: "Placa de Vídeo Duex NVIDIA GeForce GTX 750 Ti, 4GB GDDR5",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-duex-nvidia-geforce-gtx-750-ti-4gb-gddr5-128bit-gtx750ti-4gd5_166725.jpg",
    descProd:
      "A tecnologia da placa de vídeo GTX 750 Ti elimina o fenômeno de rasgo da tela e o atraso de entrada. A GTX 750 Ti aumenta duas vezes o desempenho comparado a GTX 650.",
    valorProd: "   R$ 589,00",
  },
  {
    id: "53",
    fullName: "Placa de Vídeo Galax NVIDIA GeForce RTX 4090 ST OC, 24GB",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-nvidia-geforce-rtx-4090-st-oc-24gb-gddr6x-dlss-ray-tracing-49nxm5md6ddr_159745.png",
    descProd:
      "A NVIDIA GeForce RTX 4090 é a GPU GeForce definitiva. Traz um enorme salto em desempenho, eficiência e gráficos com inteligência artificial. Experimente jogos de alta performance",
    valorProd: "R$ 12.929,00",
  },
  {
    id: "54",
    fullName: "Placa de Vídeo Gainward NVIDIA GeForce RTX 4080 Phantom, 16GB",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-gainward-nvidia-geforce-rtx-4080-phantom-16gb-gddr6x-dlss-ray-tracing-ned4080019t2-1030p_154899.jpg",
    descProd:
      "A arquitetura Ada libera toda a glória do Ray Tracing, simulando o comportamento da luz no mundo real. Com o poder da RTX Série 40, dos RT Cores de Terceira Geração",
    valorProd: "R$ 9.299,00",
  },
  {
    id: "55",
    fullName: "Placa de Vídeo Galax GeForce RTX 3080 Ti SG, 12GB, GDDR6X",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3080-ti-sg-12gb-gddr6x-384bit-38iom5md99dd_123772.png",
    descProd:
      "NVIDIA Ampere Streaming Multiprocessors: Base de construção para a GPU mais rápida e eficiente do mundo, o totalmente novo Ampere SM traz duas vezes a taxa de transferência FP32",
    valorProd: "R$ 5.999,90",
  },
  {
    id: "56",
    fullName: "Placa de Vídeo Colorful NVIDIA GeForce RTX 3080",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-colorful-geforce-igame-rtx-3080-advanced-oc-12g-lhr-v-12gb-gddr6x-dlss-ray-tracing_139213.jpg",
    descProd:
      "Fans triplos com novo design de 13 pás. Por meio do ajuste do equilíbrio dinâmico, o ângulo da borda elevada pode empurrar o fluxo de ar para o radiador aumentando a capacidade de resfriação",
    valorProd: " R$ 6.399,00",
  },
  {
    id: "57",
    fullName: "Placa De Video Gigabyte GeForce RTX 4070 Ti Eagle OC, 12GB",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-4070-ti-eagle-oc-12gb-gddr6x-dlss-ray-tracing-gv-n407teagle-oc-12gd_162268.jpg",
    descProd:
      "A NVIDIA GeForce RTX 4070 Ti oferece o ultra desempenho e os recursos que os gamers e criadores entusiastas exigem. Dê vida aos seus jogos e projetos criativos com ray tracing",
    valorProd: "R$ 7.299,00",
  },
];

export function ListaPlaca() {
  const { navigate } = useNavigation();
  return (
    <Box>
      <FlatList
        h={"full"}
        data={placas}
        renderItem={({ item }) => (
          <Box
            backgroundColor={"#F9F9F9"}
            width={"98%"}
            h={235}
            shadow={"1"}
            borderColor="muted.800"
            py={1}
            mb={7}
            mt={3}
            borderRadius={6}
            alignSelf={"center"}
          >
            <TouchableOpacity>
              <HStack ml={2}>
                <Image
                  height={130}
                  width={120}
                  mt={10}
                  alt={"produto"}
                  source={{ uri: item.ImageUrl }}
                />
                <VStack>
                  <Text
                    color="coolGray.800"
                    textAlign={"center"}
                    width={"27%"}
                    mt={3}
                    fontSize={17}
                    mr={2}
                    mb={4}
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    textAlign={"center"}
                    width={"25%"}
                    ml={3}
                    mb={2}
                    fontSize={11}
                  >
                    {item.descProd}
                  </Text>
                </VStack>
              </HStack>
              <HStack space={2} ml={139}>
                <Text
                  fontSize={23}
                  mb={2}
                  ml={2}
                  mr={2}
                  color={myTheme.colors.blue}
                  bold
                >
                  {item.valorProd}
                </Text>
                <Button
                  mb={5}
                  ml={1}
                  height={10}
                  width={60}
                  background={myTheme.colors.blue}
                >
                  <Image
                    size={6}
                    source={require("../assets/produtos/sacolas-de-compras.png")}
                    alt="logo"
                    mr={1}
                  />
                </Button>
              </HStack>
            </TouchableOpacity>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
