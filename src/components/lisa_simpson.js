import React, { Component } from 'react';
import './lisa_simpson_css.css';

export default class LisaSimpson extends Component {
  render() {
    return (
      <div class="character">
        <div id="legs">
          <div class="leg leg-1 hab"></div>
          <div class="leg leg-2 ha"></div>
          <div class="foot foot-1 hab"></div>
          <div class="shoe-lace shoe-lace-1 hab"></div>
          <div class="ankle ankle-1 hab"></div>
          <div class="foot foot-2 hab"></div>
          <div class="shoe-lace shoe-lace-2 r hb"></div>
        </div>
        <div id="body">
          <div class="arm arm-1 ha"></div>
          <div class="hand hand-1 r ha"></div>
          <div class="skirts">
            <div class="skirt skirt-1"></div>
            <div class="skirt skirt-2"></div>
            <div class="skirt skirt-3"></div>
            <div class="skirt skirt-4"></div>
            <div class="skirt skirt-5"></div>
            <div class="skirt skirt-6"></div>
            <div class="skirt skirt-7"></div>
          </div>
          <div class="chest ha"></div>
          <div class="body hba"></div>
          <div class="back r"></div>
          <div class="elbow r ha"></div>
          <div class="arm arm-2 ha"></div>
          <div class="hand hand-2 b r hab"></div>
          <div class="forearm"></div>
        </div>
        <div id="head">
          <div class="hair hair-1"></div>
          <div class="hair hair-2"></div>
          <div class="hair hair-3"></div>
          <div class="hair hair-4"></div>
          <div class="hair hair-5"></div>
          <div class="hair hair-6"></div>
          <div class="hair hair-7"></div>
          <div class="hair hair-8"></div>
          <div class="lower-lip r ha"></div>
          <div class="neck r"></div>
          <div class="smile r ha"></div>
          <div class="lip r ha"></div>
          <div id="eyelids">
            <div class="eyelid eyelid-1 r"></div>
            <div class="eyelid eyelid-2 r"></div>
            <div class="eyelid eyelid-3 r"></div>
            <div class="eyelid eyelid-4 r"></div>
            <div class="eyelid eyelid-5 r"></div>
            <div class="eyelid eyelid-6 r"></div>
            <div class="eyelid eyelid-7 r"></div>
            <div class="eyelid eyelid-8 r"></div>
          </div>
          <div class="eye eye-1 r b ha"></div>
          <div class="nose hab r b"></div>
          <div class="eye eye-2 r b"></div>
          <div class="ear hab r b"></div>
          <div class="pearls">
            <div class="pearl pearl-1 r b"></div>
            <div class="pearl pearl-2 r b"></div>
            <div class="pearl pearl-3 r b"></div>
            <div class="pearl pearl-4 r b"></div>
            <div class="pearl pearl-5 r b"></div>
          </div>

        </div>
      </div>

    );
  }
}
