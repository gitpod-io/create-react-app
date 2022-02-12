import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import StableIncomeSystem from '../../contracts/StableIncomeSystem.json';
import ROIToken from '../../contracts/ROIToken.json';

const getContracts = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      console.log("abc " + signer.toString());
      const stableIncomeSystem = new Contract(StableIncomeSystem.networks[networkId].address, StableIncomeSystem.abi, signer);
      const rOIToken = new Contract(ROIToken.networks[networkId].address, ROIToken.abi, signer);
      resolve({stableIncomeSystem, rOIToken});
      return;
    }
    reject('Install Metamask');
  });

export default getContracts;
