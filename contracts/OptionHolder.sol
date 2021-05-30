// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import './OptionBuyer.sol';

contract Writter is ERC721Holder {

    IERC721 public pitch;
    OptionBuyer public optionBuyer;

    constructor(address _pitch, address _optionbuyer) {

        pitch = IERC721(_pitch);
        optionBuyer = OptionBuyer(_optionbuyer);

    }

    function deposit(uint pitchId) external {

        pitch.safeTransferFrom(msg.sender, address(this), pitchId);
        pitch.approve(address(optionBuyer), pitchId);
        optionBuyer.deposit(pitchId);

    }

    function withdraw(uint pitchId) external {

        optionBuyer.withdraw(pitchId);
        pitch.safeTransferFrom(address(this), msg.sender, pitchId);

    }

}