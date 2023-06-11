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

const ssd = [
  {
    id: "61",
    fullName: "SSD Kingston A400, 480GB, Sata III, Leitura 500MBs",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-kingston-a400-480gb-sata-iii-leitura-500mbs-gravacao-450mbs-sa400s37480g-imp_129879.jpg",
    descProd:
      "Com incríveis velocidades de leitura/gravação, o SSD A400 não somente irá aumentar o desempenho, como também poderá ser usado para dar vida nova em computadores mais antigos",
    valorProd: "R$ 189,00",
  },
  {
    id: "62",
    fullName: "SSD WD Green SN350, 480GB, M.2 NVMe, Leitura 2400MB/s ",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-wd-green-480gb-m2-nvme-leitura-2400mbs-e-gravacao-1650mbs-wds480g2g0c_113536.jpg",
    descProd:
      "O SSD WD Green ™ SN350 NVMe ™ pode revitalizar seu computador antigo para uso diário. Esteja você na aula, conversando ou navegando, pode funcionar até quatro vezes mais rápido ",
    valorProd: "R$ 199,90",
  },
  {
    id: "63",
    fullName:
      "SSD Adata SU650, 240GB, Sata III, Leitura 520MBs e Gravação 450MBs",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-adata-su650-240gb-asu650ss-240gt-r-sata-6gbs-25-pol-leitura-520mbs-gravacao-450mbs_83663.jpg",
    descProd:
      "O algoritmo inteligente de armazenamento em cache do SLC permite que a memória NAND Flash opere no modo de célula de nível único e aprimora o desempenho, mantendo a velocidade",
    valorProd: "   R$ 109,90",
  },
  {
    id: "64",
    fullName: "SSD Hikvision E-100 512GB, SATA III Leitura 560MBs ",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-hikvision-hs-e100-512gb_100481.png",
    descProd:
      "O SSD HIKVISION foi desenvolvido a partir de anos de experiência e conhecimento em tecnologia de armazenamento e memória flash. Este produto é especializado para otimização",
    valorProd: "  R$ 169,90",
  },
  {
    id: "65",
    fullName:
      "SSD Hikvision C100, 120GB, Sata III, Leitura 550MBs e Gravação 420MBs",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-hikvision-c100-120gb-sata-iii-leitura-550mbs-e-gravacao-420mbs-hs-ssd-c100120g_96979.png",
    descProd:
      "Este ssd é especializado em otimização de sistemas operacionais de computador e oferece serviço de dados estável e rápido, acelerando a inicialização e o desempenho",
    valorProd: "     R$ 74,90",
  },
  {
    id: "66",
    fullName:
      "SSD Hikvision Desire, 128GB, SATA III, Leitura 500MBS e Gravação 370MBs,",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-hikvision-desire-128gb-sata-iii-leitura-500mbs-e-gravacao-370mbs-hs-ssd-e100128gdesire_149394.jpg",
    descProd:
      "Projetado para máxima confiabilidade no fluxo de áudio / vídeo de alta definição, devido a Tecnologia NAND Flash que oferece potencial para maior capacidade e desempenho",
    valorProd: "    R$ 69,90S",
  },
  {
    id: "67",
    fullName:
      "SSD Kingston NV2, 500GB, M.2 NVMe, 2280, Leitura 3500MBs e Gravação 2100MBs",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-kingston-nv2-500gb-m2-nvme-2280-leitura-3500mbs-e-gravacao-2100mbs-snv2s500g_154165.jpg",
    descProd:
      "O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução fundamental para armazenamento de última geração alimentada por um controlador NVMe Gen 4x4. O NV2 proporciona velocidades",
    valorProd: "   R$ 215,00",
  },
  {
    id: "68",
    fullName:
      "SSD Redragon Blaze GD-703, 512GB, M.2 2280, Leitura 7050MBs Gravação 4200MBs",
    ImageUrl:
      "https://img.terabyteshop.com.br/produto/g/ssd-redragon-blaze-gd-703-512gb-m2-2280-leitura-7050mbs-gravacao-4200mbs_160440.png",
    descProd:
      "O SSD Redragon Blaze apresenta uma tecnologia de qualidade e eficiência, equipado com a tecnologia 3D Nand para garantir melhor desempenho e estabilidade para seu PC.",
    valorProd: "  R$ 439,90",
  },
];

export function Listassd() {
  const { navigate } = useNavigation();
  return (
    <Box>
      <FlatList
        h={"full"}
        data={ssd}
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
