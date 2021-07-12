import React from "react";
import styled from "styled-components";

import {gsap} from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const BabyYoda = () => {

    const { gsap, Linear } = window
    const { timeline, to, set, registerPlugin } = gsap
    //register the plugin (just once)
    const svg = document.querySelector('svg')
    const lightsaber = document.getElementById('lightsaber')
    const beam = document.getElementById('lightSaberBeam')
    const eyelidsLeft = document.querySelector('.babyEyeLidsLeft')
    const eyelidsRight = document.querySelector('.babyEyeLidsRight')
    const eyelidsTop = document.querySelectorAll('.babyEyeLidTop')
    const eyelidsBottom = document.querySelectorAll('.babyEyeLidBottom')
    const baby = document.querySelector('.baby')
    const leftArm = document.querySelector('.babyArmLeft')
    const sleeve = document.querySelector('.babySleeve')
    const hand = document.querySelectorAll('.babyHand')
    const fingers = document.querySelectorAll('.babyFinger')
    const palm = document.querySelector('.babyPalm')
    const ears = document.querySelectorAll('.babyEar')
    const saberShadow = document.getElementById('saberShadow')
    /**
     * Set things up in the scene
     */
    const BLINK_SPEED = 0.1
    const EYE_OPEN = 1
    const EYE_CLOSED = 0.25
    const EAR_ROTATION_DEFAULT = 10
    const ROCK_SPEED = 0.1
    const ROCK_ROTATION = 4
    const EAR_SPEED = 0.1
    const EAR_DELAY = Math.floor(gsap.utils.random(1, 3))
    const EAR_COMBI_DELAY = Math.floor(gsap.utils.random(2, 4))
    const EAR_COMBI_REPEAT_DELAY = Math.floor(gsap.utils.random(2, 4))
    const SABER_RAISE = 1
    const SABER_ROTATE = 0.25
    const SABER_ACTIVATE = 0.1
    // Had to grab this by running the motion path. Likely a better way 🤔
    const MP_HEIGHT = 28.151
    /**
     * STATE
     */
    let FORCE_TL
    let ROCK_SABER_TL
    let USING_FORCE = false
    registerPlugin(MotionPathPlugin)
    set(lightsaber, { transformOrigin: '20%, 50%', scale: 1.25, x: 40, y: 125 })
    set(beam, { transformOrigin: 'left', scale: 0 })
    set(eyelidsTop, { transformOrigin: '50%, 0%', scaleY: EYE_CLOSED })
    set(eyelidsBottom, { transformOrigin: '50%, 100%', scaleY: EYE_CLOSED })
    set(ears[0], { transformOrigin: '100% 0', rotate: -EAR_ROTATION_DEFAULT })
    set(ears[1], { transformOrigin: '0 0', rotate: EAR_ROTATION_DEFAULT })
    set(eyelidsLeft, { transformOrigin: '50% 50%', rotate: -5 })
    set(eyelidsRight, { transformOrigin: '50% 50%', rotate: 5 })
    set(hand, { y: -1.5, scaleX: 0.75 })
    set(palm, { y: 1, transformOrigin: '50%, 50%', scaleX: 0.75 })
    set(saberShadow, { transformOrigin: '50% 50%', scale: 0.36, x: -69, y: 25 })
    svg.style.setProperty('opacity', '1')
    /**
     * There are some recurring timelines that happen at default
     * Blinking, ear wagging
     */
    const blinkTL = new timeline({
    repeat: -1,
    delay: gsap.utils.random(1, 5),
    repeatDelay: gsap.utils.random(4, 10),
    })
    .add(to(eyelidsTop, BLINK_SPEED, { scaleY: EYE_OPEN }), 0)
    .add(to(eyelidsBottom, BLINK_SPEED, { scaleY: EYE_OPEN }), 0)
    .add(to(eyelidsTop, BLINK_SPEED, { scaleY: EYE_CLOSED }), BLINK_SPEED)
    .add(to(eyelidsBottom, BLINK_SPEED, { scaleY: EYE_CLOSED }), BLINK_SPEED)
    const earsTL = new timeline({
    repeat: -1,
    delay: EAR_COMBI_DELAY,
    repeatDelay: EAR_COMBI_REPEAT_DELAY,
    })
    .add(to(ears[0], EAR_SPEED, { rotate: 0 }))
    .add(to(ears[0], EAR_SPEED, { rotate: -10, delay: EAR_DELAY }))
    .add(to(ears[1], EAR_SPEED, { rotate: 0, delay: EAR_SPEED * 2 }), 0)
    .add(
        to(ears[1], EAR_SPEED * 1.5, {
        rotate: 10,
        delay: EAR_DELAY,
        }),
        0
    )
    const earsUpTL = new timeline({
    onStart: () => earsTL.pause(),
    onReverseComplete: () => earsTL.play(0),
    paused: true,
    })
    .add(
        to(ears[0], EAR_SPEED, {
        rotation: 6,
        })
    )
    .add(to(ears[1], EAR_SPEED, { rotation: -6 }), 0)
    /**
     * If we mouse over yoda, make the ears perk up!
     *  */
    baby.addEventListener('pointerover', () => {
    if (!USING_FORCE) earsUpTL.play()
    })
    baby.addEventListener('pointerout', () => {
    if (!USING_FORCE) earsUpTL.reverse()
    })
    const FORCE_SPEED = 0.75
    const INIT_SHIFT = FORCE_SPEED * 0.1
    const raiseArmTL = () =>
    new timeline({
        onStart: () => {
        earsTL.pause()
        blinkTL.pause()
        },
    })
        .add(
        to(leftArm, FORCE_SPEED, { transformOrigin: '100% 15%', rotate: 45 }),
        0
        )
        .add(to(sleeve, FORCE_SPEED, { y: -2 }), INIT_SHIFT)
        .add(to(ears[0], FORCE_SPEED, { rotation: -18 }), INIT_SHIFT)
        .add(to(ears[1], FORCE_SPEED, { rotation: 18 }), INIT_SHIFT)
        .add(to(fingers[3], FORCE_SPEED, { y: 1 }), INIT_SHIFT)
        .add(to(fingers[4], FORCE_SPEED, { y: 0 }), INIT_SHIFT)
        .add(to(fingers[5], FORCE_SPEED, { y: -1 }), INIT_SHIFT)
        .add(to(eyelidsBottom, FORCE_SPEED, { scaleY: 0.9 }), INIT_SHIFT)
        .add(to(eyelidsTop, FORCE_SPEED, { scaleY: 0.9 }), INIT_SHIFT)
    const USE_FORCE_TL = new timeline({ paused: true }).add(
    to(baby, 0.065, { repeat: -1, yoyo: true, x: 0.5 })
    )
    const genForceTL = opts => {
    return new timeline({
        onReverseComplete: () => {
        earsTL.play(0)
        blinkTL.play(0)
        },
        ...opts,
    }).add(raiseArmTL())
    }
    new timeline().add(
    to(beam, 0.025, {
        scaleY: 1.25,
        repeat: -1,
        yoyo: true,
    })
    )
    const ROCK_SABER = () =>
    new timeline({ repeat: -1 })
        .add(
        to(lightsaber, ROCK_SPEED * 0.25, {
            rotate: -ROCK_ROTATION,
        })
        )
        .add(to(lightsaber, ROCK_SPEED * 0.25, { rotate: 0 }))
        .add(
        to(lightsaber, ROCK_SPEED * 0.25, {
            rotate: ROCK_ROTATION,
        })
        )
        .add(to(lightsaber, ROCK_SPEED * 0.25, { rotate: 0 }))
    const genSwing = () => {
    const repeat = Math.floor(gsap.utils.random(1, 3))
    const duration = Math.floor(gsap.utils.random(1, 3))
    return new timeline({ delay: 0.25 })
        .add(
        new timeline({
            repeat,
            ease: Linear.easeNone,
        }).add(
            to('#lightsaber', duration, {
            ease: Linear.easeNone,
            motionPath: {
                path: '#saberpath',
                offsetX: -6.9,
            },
            })
        )
        )
        .add(
        new timeline({ repeat, yoyo: false, ease: Linear.easeNone })
            .add(to(lightsaber, duration * 0.25, { rotate: -45 }))
            .add(to(lightsaber, duration * 0.5, { rotate: -135 }))
            .add(to(lightsaber, duration * 0.25, { rotate: -90 })),
        0
        )
    }
    const getForce = onComplete => {
    return new timeline({
        onComplete,
    })
        .add(to(lightsaber, SABER_RAISE, { y: MP_HEIGHT }), 0)
        .add(to(saberShadow, SABER_RAISE * 0.75, { scale: 0, opacity: 0 }), 0)
        // Rotate the saber on the way up 👍
        .add(to(lightsaber, SABER_ROTATE, { rotate: -90 }), SABER_RAISE * 0.25)
        .add(to(beam, SABER_ACTIVATE, { scale: 1, delay: 0.2 }))
        .add(genSwing())
        .add(to(beam, SABER_ACTIVATE, { scale: 0, delay: 0.5 }))
        .add(
        new timeline({ delay: 0.25 })
            .add(to(lightsaber, SABER_ROTATE, { rotate: 0 }), 0)
            .add(to(lightsaber, SABER_RAISE * 0.5, { y: 125 }), 0)
            .add(
            to(saberShadow, SABER_RAISE * 0.375, { scale: 0.36, opacity: 1 }),
            SABER_RAISE * 0.25
            )
        )
    }
    // Start using the force to raise and activate the saber
    const useTheForce = () => {
    USING_FORCE = true
    USE_FORCE_TL.timeScale(1.5)
    ROCK_SABER_TL.pause()
    set(lightsaber, { rotate: 0 })
    getForce(() => {
        // Once the force is over, reset everything back double time!
        USING_FORCE = false
        USE_FORCE_TL.pause()
        FORCE_TL.timeScale(10).reverse()
    })
    }
    const onStart = () => {
    if (USING_FORCE) return
    ROCK_SABER_TL = ROCK_SABER()
    USE_FORCE_TL.play()
    FORCE_TL = genForceTL({
        onComplete: useTheForce,
    })
    FORCE_TL.play()
    }
    const onStop = () => {
    // Only do something if the saber is still shaking
    if (ROCK_SABER_TL && !ROCK_SABER_TL.paused()) {
        ROCK_SABER_TL.pause()
        ROCK_SABER_TL = null
        USE_FORCE_TL.pause()
        FORCE_TL.timeScale(6).reverse()
        set(lightsaber, { rotate: 0 })
    }
    // Else, If we have started something, see it through as it's a nightmare to try and cancel it 👍 😅
    }
    // document.body.addEventListener('pointerdown', onStart)
    // document.body.addEventListener('pointerup', onStop)
    document.body.addEventListener('touchstart', onStart)
    document.body.addEventListener('touchend', onStop)
    document.body.addEventListener('mousedown', onStart)
    document.body.addEventListener('mouseup', onStop)

 //-----------------------------------------------------------------------------return  --------------------------------------------------------------------// 
        
    return(
       <BabyYodaStyle>
           <svg xmlns="http://www.w3.org/2000/svg" viewbox="-30 -20 188.75 178.75">
        <defs>
            <filter id="a" x="-.478" width="1.955" y="-.069" height="1.137" color-interpolation-filters="sRGB">
            <fegaussianblur stddeviation=".519"></fegaussianblur>
            </filter>
            <filter id="b" x="-.822" width="2.644" y="-.326" height="1.652" color-interpolation-filters="sRGB">
            <fegaussianblur stddeviation=".866"></fegaussianblur>
            </filter>
            <filter id="c" x="-.709" width="2.417" y="-.165" height="1.331" color-interpolation-filters="sRGB">
            <fegaussianblur stddeviation=".866"></fegaussianblur>
            </filter>
            <filter id="d" x="-.066" width="1.132" y="-.65" height="2.3" color-interpolation-filters="sRGB">
            <fegaussianblur stddeviation=".717"></fegaussianblur>
            </filter>
        </defs>
        <g className="babyWrap">
            <g transform="translate(41.066 -125.767)">
            <ellipse className="babyShadow" ry="1.538" rx="26.413" cy="242.637" cx="117.64" transform="translate(-41.066 -12.483)"></ellipse>
            <g id="saberShadow">
                <ellipse className="babySaberShadow" ry="1.538" rx="26.413" cy="242.637" cx="117.64" transform="translate(-41.066 -12.483)"></ellipse>
            </g>
            <g className="baby">
                <g transform="scale(-1 1) rotate(5.288 -24.745 -1423.853)">
                <g className="babyHand" transform="translate(0 -1.058)">
                    <rect className="babyFinger" ry=".675" y="214.483" x="59.607" height="4.089" width="1.35"></rect>
                    <rect className="babyFinger" width="1.35" height="4.089" x="61.337" y="214.483" ry=".675"></rect>
                    <rect className="babyFinger" ry=".675" y="214.483" x="63.066" height="4.089" width="1.35"></rect>
                    <rect className="babyFinger" ry="1.167" y="214.483" x="59.078" height="2.335" width="5.868"></rect>
                </g>
                <rect className="babyRobeSleeve" width="6.603" height="16.644" x="58.885" y="199.491" ry="3.075"></rect>
                <rect className="babyRobeCuff" width="9.407" height="3.688" x="57.483" y="212.447" ry=".905"></rect>
                </g>
                <g className="babyArm babyArmLeft">
                <g transform="rotate(5.288 51.972 237.488)">
                    <g className="babyHand" transform="translate(0 -1.058)">
                    <rect className="babyFinger" width="1.35" height="4.089" x="59.607" y="214.483" ry=".675"></rect>
                    <rect className="babyFinger" ry=".675" y="214.483" x="61.337" height="4.089" width="1.35"></rect>
                    <rect className="babyFinger" width="1.35" height="4.089" x="63.066" y="214.483" ry=".675"></rect>
                    <rect className="babyPalm" width="5.868" height="2.335" x="59.078" y="214.483" ry="1.167"></rect>
                    </g>
                    <g className="babySleeve">
                    <rect className="babyRobeSleeve" ry="3.075" y="199.491" x="58.885" height="16.644" width="6.603"></rect>
                    <rect className="babyRobeCuff" ry=".905" y="212.447" x="57.483" height="3.688" width="9.407"></rect>
                    </g>
                </g>
                </g>
                <path className="babyRobe" d="M64.992 191.416c-1.318 4.813.083 37.02-3.596 37.02-.702 0-1.266.565-1.266 1.266 0 .702.564 1.267 1.266 1.267H92.06c.701 0 1.266-.565 1.266-1.267 0-.701-.565-1.266-1.267-1.266-2.83.265-2.917-26.882-3.595-37.02z"></path>
                <g className="babyEar babyEarLeft">
                <path className="babyEarInner" d="M39.016 184.686a.84.84 0 00-.901.777c-.029.46.358.714.797.882l1.645.63c3.245 1.241 4.33 7.61 7.96 9.162 4.507 1.93 23.122.278 23.122.278s-.13-.007 0-2.117c.104-1.67-2.18-6.907-3.017-6.132a.836.836 0 00.838-.775.839.839 0 00-.798-.882z"></path>
                <path className="babyEarOuter" d="M39.016 184.686a.84.84 0 00-.901.777c-.029.46.358.714.797.882l1.645.63c3.245 1.241 12.454-.92 17.927 1.405 6.228 2.645 2.182 13.586 8.153 6.55 1.79.29 1.758 1.672 1.89-.437.104-1.67 1.27-4.858.095-6.327a.836.836 0 00.838-.775.839.839 0 00-.798-.882z"></path>
                </g>
                <g className="babyEar babyEarRight">
                <path className="babyEarInner" d="M114.133 184.686a.84.84 0 01.9.777c.029.46-.358.714-.797.882l-1.645.63c-3.245 1.241-4.33 7.61-7.96 9.162-4.507 1.93-23.122.278-23.122.278s.13-.007 0-2.117c-.104-1.67 2.18-6.907 3.017-6.132a.836.836 0 01-.838-.775.839.839 0 01.798-.882z"></path>
                <path className="babyEarOuter" d="M114.133 184.686a.84.84 0 01.9.777c.029.46-.358.714-.797.882l-1.645.63c-3.245 1.241-12.454-.92-17.927 1.405-6.228 2.645-2.182 13.586-8.153 6.55-1.79.29-1.758 1.672-1.89-.437-.103-1.67-1.27-4.858-.095-6.327a.836.836 0 01-.838-.775.839.839 0 01.798-.882z"></path>
                </g>
                <path className="babyHead" d="M89.69 192.575c0 2.573.96 5.673-1.646 7.359-2.608 1.686-7.496 1.7-11.474 1.7-6.812 0-8.738-.27-11.345-1.957-2.607-1.686-1.647-4.4-1.647-6.974 0-2.573.069-5.159 2.676-6.845s6.466-2.215 10.444-2.215c3.979 0 8.095.786 10.702 2.472 2.608 1.686 2.29 3.887 2.29 6.46z"></path>
                <path className="babyFace" d="M74.598 193.834a1.994 1.735 0 011.96-1.413 1.994 1.735 0 011.959 1.413M72.94 197.689a4.695 1.992 0 014.26-1.156 4.695 1.992 0 014.262 1.156" stroke-width="1" stroke-linecap="round"></path>
                <g className="babyEye babyEyeLeft" transform="matrix(.99997 0 0 1.00462 .446 -2.499)">
                <ellipse id="ellipse1246" style={{
    fill: "#000000",
    stroke: "#000000",
    strokeWidth: "1.26967835",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} cx="68.251839" cy="193.02319" rx="3.0693276" ry="3.0693274"></ellipse>
                <circle id="circle1248" style={{
    fill: "#ffffff",
    stroke: "none",
    strokeWidth: "0.78371131",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} cx="66.1614" cy="192.97395" r="0.40189433"></circle>
                <circle id="circle1250" r="0.78565741" cy="191.43892" cx="66.67308" style={{
    fill: "#ffffff",
    stroke: "none",
    strokeWidth: "1.53206599",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }}></circle>
                <g className="babyEyeLids babyEyeLidsLeft">
                    <g className="babyEyeLidBottom babyEyeLidTopLeft">
                    <path className="babyEyeLid" style={{
    stroke: "none",
    strokeWidth: "2.46095419",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} d="m 243.95898,207.01758 a 14,14 0 0 0 14,14 14,14 0 0 0 14,-14 z" transform="matrix(0.26458333,0,0,0.26458333,0,138.24998)" ></path>
                    </g>
                    <g className="babyEyeLidTop babyEyeLidLeftBottom">
                    <path className="babyEyeLid" d="m 71.955809,193.02338 a 3.7041666,3.7041666 0 0 0 -3.70417,-3.70417 3.7041666,3.7041666 0 0 0 -3.70416,3.70417 z" style={{
    stroke: "none",
    strokeWidth: "0.65112746",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} ></path>
                    </g>
                </g>
                </g>
                <path className="babyCollar babyCollarOne" d="M76.59 200.127l-3.016.704a1.39 1.39 0 00-.863.617 1.38 1.38 0 00-.172 1.046l.879 3.767 3.172.74 3.172-.74.878-3.767a1.382 1.382 0 00-1.034-1.663z"></path>
                <path className="babyCollar babyCollarTwo" d="M62.901 197.047a1.382 1.382 0 00-1.113 1.052l-.89 3.821a1.382 1.382 0 001.034 1.663l11.486 2.678-.879-3.767a1.389 1.389 0 01.172-1.046 1.382 1.382 0 01.863-.617l3.016-.704-13.138-3.063a1.388 1.388 0 00-.55-.017z"></path>
                <rect className="babyCollar babyCollarThree" transform="scale(-1 1) rotate(13.124)" ry="1.385" y="212.291" x="-44.024" height="6.694" width="19.357"></rect>
                <g className="babyEye babyEyeRight" transform="matrix(.99997 0 0 1.00462 16.32 -2.499)">
                <ellipse id="ellipse1246" style={{
    fill: "#000000",
    stroke: "#000000",
    strokeWidth: "1.26967835",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} cx="68.251839" cy="193.02319" rx="3.0693276" ry="3.0693274"></ellipse>
                <circle id="circle1248" style={{
    fill: "#ffffff",
    stroke: "none",
    strokeWidth: "0.78371131",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} cx="66.1614" cy="192.97395" r="0.40189433"></circle>
                <circle id="circle1250" r="0.78565741" cy="191.43892" cx="66.67308" style={{
    fill: "#ffffff",
    stroke: "none",
    strokeWidth: "1.53206599",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }}></circle>
                <g className="babyEyeLids babyEyeLidsRight">
                    <g className="babyEyeLidBottom babyEyeLidRightTop">
                    <path className="babyEyeLid" style={{
    stroke: "none",
    strokeWidth: "2.46095419",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} d="m 243.95898,207.01758 a 14,14 0 0 0 14,14 14,14 0 0 0 14,-14 z" transform="matrix(0.26458333,0,0,0.26458333,0,138.24998)" ></path>
                    </g>
                    <g className="babyEyeLidTop babyEyeLid--right-bottom">
                    <path className="babyEyeLid" d="m 71.955809,193.02338 a 3.7041666,3.7041666 0 0 0 -3.70417,-3.70417 3.7041666,3.7041666 0 0 0 -3.70416,3.70417 z" style={{
    stroke: "none",
    strokeWidth: "0.65112746",
    strokeLinecap: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1
  }} ></path>
                    </g>
                </g>
                </g>
                <g fill="none" stroke-width=".5" stroke-linecap="round">
                <path className="babyRobeFoldShadow" d="M67.886 210.21s-1.155 2.805.317 4.638c1.8 2.243 4.055 4.848 4.115 6.352.108 2.745-2.262 5.743-2.262 5.743" filter="url(#a)"></path>
                <path className="babyRobeFold" d="M67.886 210.21s-1.155 2.805.317 4.638c1.8 2.243 4.055 4.848 4.115 6.352.108 2.745-2.262 5.743-2.262 5.743"></path>
                </g>
                <path className="babyRobeFoldShadow" d="M67.614 219.707s.591 1.703-.723 3.89c-.21.347-1.674 2.487-1.674 2.487" fill="none" stroke-width=".5" filter="url(#b)"></path>
                <path className="babyRobeFold" d="M67.614 219.707s.591 1.703-.723 3.89c-.21.347-1.674 2.487-1.674 2.487" fill="none" stroke-width=".5" stroke-linecap="round"></path>
                <path className="babyRobeFoldShadow" d="M84.393 214.868s-.235 5.304.453 7.824c.468 1.717 2.442 4.749 2.442 4.749" fill="none" stroke-width=".5" stroke-linecap="round" filter="url(#c)"></path>
                <path className="babyRobeFold" d="M84.393 214.868s-.235 5.304.453 7.824c.468 1.717 2.442 4.749 2.442 4.749" fill="none" stroke-width=".5" stroke-linecap="round"></path>
                <path className="babyForehead babyForeheadVertical" d="M76.67 190.618s.022-.826-.028-1.234c-.04-.332-.217-.98-.217-.98" fill="none" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path className="babyHair" d="M74.082 184.43l-.362-.95M76.524 184.475l.317-.95M79.011 184.43l-.361-.995M77.7 183.842l.136-.904M75.438 183.933l-.452-.86" fill="none" stroke-width=".5"></path>
                <path className="babyForehead babyForeheadHorizontal" d="M73.63 186.692s1.857-.446 2.803-.453c.93-.006 2.76.407 2.76.407" fill="none" stroke-width=".75" stroke-linecap="round" stroke-opacity=".733"></path>
                <path className="babyCollar babyCollarFour" d="M90.006 197.028a1.401 1.401 0 00-.278.036l-2.143.5-.05 6.885 3.713-.866a1.382 1.382 0 001.034-1.663l-.891-3.821a1.382 1.382 0 00-1.385-1.07z"></path>
                <path className="babyCollar babyCollarFive" d="M63.173 197.028a1.382 1.382 0 00-1.384 1.07l-.891 3.822a1.382 1.382 0 001.034 1.663l4.481 1.045a8.77 8.77 0 01-.042-.742l-.058-6.154-2.861-.668a1.404 1.404 0 00-.28-.036z"></path>
                <path className="babyCollar babyCollarSix" d="M63.173 197.028a1.382 1.382 0 00-1.384 1.07l-.891 3.822a1.382 1.382 0 001.034 1.663l2.71.632.197-6.463c.004-.124.014-.242.026-.358l-1.413-.33a1.404 1.404 0 00-.28-.036z"></path>
            </g>
            </g>
        </g>
        <path id="saberpath" d="M46.42,28.151 C53.98,29.824 62.794,46.94 60.174,52.787 56.253,61.528 56.228,69.649 74.239,75.854 79.561,77.682 93.574,82.354 100.846,70.72 108.403,58.629 97.949,44.701 90.522,41.676 76.879,36.119 67.393,45.849 60.001,52.303 53.179,58.255 47.86,64.356 34.278,61.201 17.756,57.363 17.21,46.988 20.171,41.013 27.333,26.559 37.67,27.359 46.42,28.151 Z" fill="none" stroke-width="1.058" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray="1.05833327,3.17499981"></path>
        <g id="lightsaber">
            <g transform="translate(-35.05 -276.54)">
            <rect ry="0" y="278.046" x="49.723" height="1.191" width="1.833" fill="#999"></rect>
            <rect width="15.694" height="2.646" x="35.051" y="278.253" ry="0" fill="#e6e6e6"></rect>
            <g id="lightSaberBeam">
                <g transform="translate(.064)">
                <rect transform="matrix(-1.00861 0 0 .99791 -.398 .848)" width="26.015" height="2.646" x="-76.759" y="277.989" ry="1.323" fill="#91ff82" filter="url(#a)"></rect>
                <rect ry="1.058" y="278.518" x="-76.759" height="2.117" width="26.015" transform="scale(-1 1)" fill="#d8ffd3"></rect>
                <rect transform="scale(-1 1)" width="25.665" height="1.587" x="-76.272" y="278.783" ry=".794" fill="#f5fff3"></rect>
                </g>
            </g>
            <rect ry="0" y="278.253" x="40.822" height="2.646" width="9.923"></rect>
            <path fill="#b3b3b3" d="M35.77 277.592h5.821v3.969H35.77z"></path>
            <path d="M36.299 280.767h4.762v.794h-4.762zM36.299 277.592h4.762v.794h-4.762zM36.299 279.179h4.762v.794h-4.762z"></path>
            <path fill="#333" d="M42.12 277.592h3.831v3.969H42.12z"></path>
            <path fill="#ccc" d="M46.204 277.728h3.747v3.696h-3.747z"></path>
            <rect transform="scale(-1 1)" width=".954" height="3.175" x="-51.699" y="277.989" ry=".342"></rect>
            <path fill="red" d="M48.23 277.362h.837v.362h-.837z"></path>
            <rect ry=".32" y="277.317" x="50.553" height="1.582" width="1.799" fill="#999"></rect>
            </g>
        </g>
        </svg>
        <h1>Hold pointer down, you must</h1>
        <h1 className="text">404 Page Not Found</h1>
        <p>The force can't help you!</p>
       </BabyYodaStyle> 
    )
}

const BabyYodaStyle = styled.div`
    :root {
  --yoda-hue: 120;
  --yoda-saturation: 50;
  --yoda-lightness: 50;
  --sand-hue: 40;
  --sand: #c5b087;
}
body {
  background: radial-gradient(circle at top left, #fff, transparent 50%), linear-gradient(0deg, var(--sand), var(--sand) 43%, #c0e9f2 43%), var(--sand);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poller One', cursive;
  font-variant: small-caps;
}
svg {
  height: 90vmin;
  max-height: 600px;
  overflow: visible;
  transform: translateZ(0);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.babyEye {
  overflow: hidden;
  -webkit-clip-path: circle(50% at 50%);
  clip-path: circle(50% at 50%);
}
.babyShadow,
.babySaberShadow {
  fill: hsl(var(--sand-hue), 25%, 15%);
}
.babyHand,
.babyFinger {
  fill: hsl(var(--yoda-hue), 50%, calc(var(--yoda-lightness) * 1%));
}
.babyRobe {
  fill: #bf8040;
}
.babyRobeSleeve {
  fill: #963;
}
.babyRobeCuff {
  fill: #e6d1b3;
}
.babyRobeFoldShadow {
  stroke: #ac7339;
}
.babyRobeFold {
  stroke: #86592d;
}
.babyHead {
  fill: hsl(var(--yoda-hue), 50%, 60%);
}
.babyFace {
  fill: none;
  stroke: hsl(var(--yoda-hue), 50%, 35%);
}
.babyEyeLid {
  fill: hsl(var(--yoda-hue), 50%, 30%);
}
.babyEarInner {
  fill: #ffd6d6;
}
.babyEarOuter {
  fill: hsl(var(--yoda-hue), 50%, 50%);
}
.babyForehead {
  stroke: hsl(var(--yoda-hue), 50%, 35%);
}
.babyHair {
  stroke: #111;
  stroke-opacity: 0.25;
}
.babyCollarOne {
  fill: #bf8040;
}
.babyCollarTwo {
  fill: #963;
}
.babyCollarThree {
  fill: #d9b38c;
}
.babyCollarFour {
  fill: #c96;
}
.babyCollarFive {
  fill: #d9b38c;
}
.babyCollarSix {
  fill: #d9b38c;
}
h1 {
  color: #9b804b;
  position: fixed;
  font-weight: bold;
  font-size: 1rem;
  bottom: 20px;
  right: 20px;
}
.text{
  color: #9b804b;
  position: fixed;
  font-weight: bold;
  font-size: 3rem;
  bottom: 60%;
  right: 60%;
}
p{
  color: #9b804b;
  position: fixed;
  font-weight: bold;
  font-size: 2rem;
  bottom: 10%;
  right: 70%;
}
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}
`

export default BabyYoda;