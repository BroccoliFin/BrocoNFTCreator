import axios from "axios";
import toast from "react-hot-toast";

//PINATE API - SECRECT KEYS
const PINATA_AIP_KEY = process.env.NEXT_PUBLIC_PINATA_AIP_KEY;
const PINATA_SECRECT_KEY = process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY;

const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
const notifyError = (msg) => toast.error(msg, { duration: 2000 });

export const copyText = (text) => {
  navigator.clipboard.writeText(text);
  notifySuccess("Text copied successfully");
};

export const SHORTEN_ADDRESS = (address) =>
  `${address?.slice(0, 4)}...${address?.slice(address.length - 4)}`;

//--IMAGE UPLOAD
export const UPLOAD_IPFS_IMAGE = async (file) => {
  try {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      console.log(file);

      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: PINATA_AIP_KEY,
          pinata_secret_api_key: PINATA_SECRECT_KEY,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      notifySuccess("Uploaded successfully");
      return ImgHash;
    }
  } catch (error) {
    console.log(error);
    notifyError("Failed to upload, API Key Error");
  }
};

//--METADAT UPLOAD
export const UPLOAD_METADATA = async (nft, attributes, address) => {
  try {
    const { name, symbol, description, image, link } = nft;
    const { traitTypeOne, valueOne, traitTypeTwo, valueTwo } = attributes;

    if (
      !name ||
      !description ||
      !image ||
      !symbol ||
      !link ||
      !traitTypeOne ||
      !valueOne ||
      !traitTypeTwo ||
      !valueTwo
    )
      return notifyError("Data is missing");

    const data = JSON.stringify({
      name: name,
      symbol: symbol,
      description: description,
      seller_fee_basis_points: 600,
      image: image,
      external_url: link,
      attributes: [
        {
          trait_type: traitTypeOne,
          value: valueOne,
        },
        {
          trait_type: traitTypeTwo,
          value: valueTwo,
        },
      ],
      properties: {
        files: [
          {
            uri: image,
            type: "image/jpg",
          },
        ],
        category: "image",
        creators: [
          {
            address: address,
            share: 100,
          },
        ],
      },
    });

    const response = await axios({
      method: "POST",
      url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data: data,
      headers: {
        pinata_api_key: PINATA_AIP_KEY,
        pinata_secret_api_key: PINATA_SECRECT_KEY,
        "Content-Type": "application/json",
      },
    });

    const _IPFS_URL = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    const SOLANA_NFTS = {
      name,
      symbol,
      description,
      image,
      link,
      traitTypeOne,
      valueOne,
      traitTypeTwo,
      valueTwo,
    };

    let local_SOLANA_NFTS = [];

    const localNFTs = localStorage.getItem("SOLANA_NFTS");
    if (localNFTs) {
      local_SOLANA_NFTS = JSON.parse(localStorage.getItem("SOLANA_NFTS"));
      local_SOLANA_NFTS.push(SOLANA_NFTS);
      localStorage.setItem("SOLANA_NFTS", JSON.stringify(local_SOLANA_NFTS));
      notifySuccess("Uploaded successfully");
    } else {
      local_SOLANA_NFTS.push(SOLANA_NFTS);
      localStorage.setItem("SOLANA_NFTS", JSON.stringify(local_SOLANA_NFTS));
      notifySuccess("Uploaded successfully");
    }

    return _IPFS_URL;
  } catch (error) {
    console.log(error);
    notifyError("Failed to upload, API Key Error");
  }
};
