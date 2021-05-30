// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';

interface OptionBuyer is IERC721Receiver {

    function deposit(uint pitchId) external;
    function withdraw(uint pitchId) external;

}