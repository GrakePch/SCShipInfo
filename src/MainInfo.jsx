import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import axios from "axios";

import "./App.css";
import SimpleInfo from "./SimpleInfo";
import ManufacturerToHue from "./assets/ManufacturerToHue";
import manufacturers_small from "./assets/manufacturers_small";
import ship_pics_and_zh_name from "./assets/ship_pics_and_zh_name.json";
import statusToHue from "./assets/statusToHue";
import CardList from "./components/CardList/CardList";
import FlightAccelerations from "./components/FlightAccelerations/FlightAccelerations";
import FlightCharacteristics from "./components/FlightCharacteristics/FlightCharacteristics";
import I18n from "./components/I18n";
import I18nPure from "./components/I18nPure";
import PanelComponents from "./components/PanelComponents/PanelComponents";
import PanelQuantumTravel from "./components/PanelQuantumTravel/PanelQuantumTravel";
import QuantumTravel from "./components/QuantumTravel/QuantumTravel";
import ShipSelector from "./components/ShipSelector/ShipSelector";
import shipIndex from "./data/index.js";
import shipHardpoints from "./data/ship-hardpoints.js";
import shipItems from "./data/ship-items.js";
import shipList from "./data/ship-list.js";
import shipDataRSIJson from "./data/ship_data_rsi.json";

const tabs = [
  "components",
  "payloads",
  "propulsion",
  "quantum-travel",
  "weapons",
  "defence-systems",
  "others",
];

function MainInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = localStorage.getItem("lang");

  const { shipId } = useParams();

  const [shipIdx, setShipIdx] = useState(null);
  const [shipObj, setShipObj] = useState(null);
  const [shipHardpts, setShipHardpts] = useState(null);
  const [shipDataWiki, setShipDataWiki] = useState(null);
  const [shipDataRSI, setShipDataRSI] = useState(null);

  const [speedMax, setSpeedMax] = useState(0);
  const [pitchMax, setPitchMax] = useState(0);
  const [yawMax, setYawMax] = useState(0);
  const [rollMax, setRollMax] = useState(0);

  const [accelFwdMax, setAccelFwdMax] = useState(0);
  const [accelBwdMax, setAccelBwdMax] = useState(0);
  const [accelStrMax, setAccelStrMax] = useState(0);
  const [accelUwdMax, setAccelUwdMax] = useState(0);
  const [accelDwdMax, setAccelDwdMax] = useState(0);

  const [dictShipZhName, setDictShipZhName] = useState({});
  const [dictShipImgIso, setDictShipImgIso] = useState({});

  const [totalDecoyAmmo, setTotalDecoyAmmo] = useState(0);
  const [totalNoiseAmmo, setTotalNoiseAmmo] = useState(0);
  const [totalDecoyItemNum, setTotalDecoyItemNum] = useState(0);
  const [totalNoiseItemNum, setTotalNoiseItemNum] = useState(0);

  const [shipComponentQDrive, setShipComponentQDrive] = useState(null);

  const [contentNavTab, setContentNavTab] = useState("");

  useEffect(() => {
    for (let i = 0; i < shipIndex.length; ++i)
      shipIndex[i].NameShort = shipIndex[i].Name.split(" ").slice(1).join(" ");
  }, [shipId]);

  useEffect(() => {
    let tempShipIdx = null;
    let tempShipObj = null;
    let tempShipHardpts = null;

    let _speedMax = 0;
    let _pitchMax = 0;
    let _yawMax = 0;
    let _rollMax = 0;
    let _fMax = 0;
    let _bMax = 0;
    let _sMax = 0;
    let _uMax = 0;
    let _dMax = 0;

    if (shipId) {
      for (let i = 0; i < shipIndex.length; i++) {
        if (
          shipIndex[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipIdx = shipIndex[i];
          break;
        }
      }

      /* Update Color Theme */
      if (searchParams.get("hue") != null && !isNaN(searchParams.get("hue"))) {
        document.documentElement.style.setProperty(
          "--hue",
          searchParams.get("hue"),
        );
      } else if (
        shipIdx &&
        shipIdx.Manufacturer &&
        ManufacturerToHue[shipIdx.Manufacturer] != null
      )
        document.documentElement.style.setProperty(
          "--hue",
          `${ManufacturerToHue[shipIdx.Manufacturer]}`,
        );

      for (let i = 0; i < shipList.length; i++) {
        if (
          shipList[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipObj = shipList[i];
        }
        let flight = shipList[i].FlightCharacteristics;
        if (flight) {
          let accel = flight.AccelerationG;
          // let capct = flight.Capacitors;
          const boostObj = flight.Boost;
          const accelMult = boostObj.AccelerationMultiplier;
          const angVelMult = boostObj.AngularVelocityMultiplier;

          _speedMax = Math.max(_speedMax, flight.MaxSpeed);
          _pitchMax = Math.max(_pitchMax, flight.Pitch * angVelMult.Pitch);
          _yawMax = Math.max(_yawMax, flight.Yaw * angVelMult.Yaw);
          _rollMax = Math.max(_rollMax, flight.Roll * angVelMult.Roll);

          _fMax = Math.max(_fMax, accel.Main * accelMult.PositiveAxis.Y);
          _bMax = Math.max(_bMax, accel.Retro * accelMult.NegativeAxis.Y);
          _sMax = Math.max(_sMax, accel.Strafe * accelMult.PositiveAxis.X);
          _uMax = Math.max(_uMax, accel.Up * accelMult.PositiveAxis.Z);
          _dMax = Math.max(_dMax, accel.Down * accelMult.NegativeAxis.Z);
        }
      }

      /* Set Ship Hardpoints */
      for (let i = 0; i < shipHardpoints.length; ++i) {
        if (
          shipHardpoints[i].ClassName.localeCompare(shipId, undefined, {
            sensitivity: "base",
          }) === 0
        ) {
          tempShipHardpts = shipHardpoints[i];
        }
      }
    }

    setShipIdx(tempShipIdx);
    setShipObj(tempShipObj);
    setShipHardpts(tempShipHardpts);

    setPitchMax(Math.max(_pitchMax, 90));
    setYawMax(Math.max(_yawMax, 90));
    setRollMax(_rollMax);
    setSpeedMax(_speedMax);
    setAccelFwdMax(_fMax);
    setAccelBwdMax(_bMax);
    setAccelStrMax(_sMax);
    setAccelUwdMax(_uMax);
    setAccelDwdMax(_dMax);
    // console.log(_fMax, _bMax, _sMax, _uMax, _dMax);
  }, [shipId, shipIdx]);

  useEffect(() => {
    let dShipZhName = {};
    let dShipImgIso = {};
    for (let i = 0; i < ship_pics_and_zh_name.ships.length; ++i) {
      let firstKey = Object.keys(ship_pics_and_zh_name.ships[i])[0];
      dShipZhName[firstKey] = ship_pics_and_zh_name.ships[i][firstKey];
      if (ship_pics_and_zh_name.ships[i].vehicleLink)
        dShipImgIso[firstKey] = ship_pics_and_zh_name.ships[i].vehicleLink;
    }
    setDictShipZhName(dShipZhName);
    setDictShipImgIso(dShipImgIso);
  }, []);

  useEffect(() => {
    if (!shipHardpts) return;
    let temp = [];

    shipHardpts.Hardpoints.Components.Propulsion?.QuantumDrives?.InstalledItems?.forEach(
      (item) => {
        temp.push(item);
      },
    );

    let QDriveTemp = null;
    if (temp && temp.length > 0) {
      for (let i = 0; i < shipItems.length; ++i) {
        if (
          shipItems[i].type === "QuantumDrive" &&
          shipItems[i].stdItem.Name === temp[0].Name
        ) {
          QDriveTemp = shipItems[i];
          break;
        }
      }
    }
    setShipComponentQDrive(QDriveTemp);

    let tempDecoyItemNum = 0;
    let tempNoiseItemNum = 0;
    if (shipHardpts.Hardpoints.Components.Systems.Countermeasures) {
      let CMs =
        shipHardpts.Hardpoints.Components.Systems.Countermeasures
          .InstalledItems;
      for (let i = 0; i < CMs?.length; ++i) {
        /* Special case for origin jumpworks: both decoy and noise are called "noise" */
        if (CMs[i].Name == "Origin Jumpworks Noise Launcher") {
          if (CMs[i].Ammunition > 10) {
            setTotalDecoyAmmo(CMs[i].Ammunition);
            tempDecoyItemNum++;
          } else {
            setTotalNoiseAmmo(CMs[i].Ammunition);
            tempNoiseItemNum++;
          }
          continue;
        }
        /* General */
        if (CMs[i].Name.includes("Decoy") || CMs[i].Name.includes("Flare")) {
          setTotalDecoyAmmo(CMs[i].Ammunition);
          tempDecoyItemNum++;
        } else if (
          CMs[i].Name.includes("Noise") ||
          CMs[i].Name.includes("Chaff")
        ) {
          setTotalNoiseAmmo(CMs[i].Ammunition);
          tempNoiseItemNum++;
        }
      }
    }
    setTotalDecoyItemNum(tempDecoyItemNum);
    setTotalNoiseItemNum(tempNoiseItemNum);
  }, [shipHardpts]);

  useEffect(() => {
    if (shipId == null) {
      setShipDataWiki(null);
      return;
    }
    let shipName = shipId.substring(shipId.indexOf("_") + 1);
    if (shipName.startsWith("Idris_K")) {
      shipName = "Idris-K";
    } else if (shipName.startsWith("Idris_P")) {
      shipName = "Idris-P";
    } else if (shipName.startsWith("Idris_M")) {
      shipName = "Idris-M";
    } else if (shipName.startsWith("Genesis")) {
      shipName = "Genesis";
    } else if (shipName.startsWith("Pionneer")) {
      shipName = "Pioneer";
    } else if (shipName.startsWith("Spirit_E1")) {
      shipName = "e1_spirit";
    } else if (shipName.startsWith("Polaris")) {
      shipName = "Polaris";
    } else if (shipName == "Zeus_ES") {
      shipName = "zeus_mk_ii_es";
    } else if (shipName == "Zeus_CL") {
      shipName = "zeus_mk_ii_cl";
    } else if (shipName == "Zeus_MR") {
      shipName = "zeus_mk_ii_mr";
    }

    axios
      .get(`https://api.star-citizen.wiki/api/v2/vehicles/${shipName}`, {
        params: {
          locale: lang == "zh_cn" ? "zh_CN" : "en_US",
        },
      })
      .then(function (response) {
        setShipDataWiki(response.data.data);
      })
      .catch(function (_error) {
        setShipDataWiki(null);
      });

    // console.log(shipName.toLowerCase());
    // console.log(shipDataRSIJson[shipName.toLowerCase()]);
    if (shipName == "Ballista") {
      shipName = "Ballista_";
    }

    setShipDataRSI(shipDataRSIJson[shipName.toLowerCase()]);
  }, [shipId, lang]);

  return (
    <>
      {searchParams.get("simple") == 1 ? (
        <SimpleInfo
          shipIdx={shipIdx}
          shipObj={shipObj}
          shipHardpts={shipHardpts}
          shipData={shipDataWiki}
          shipDataRSI={shipDataRSI}
          dictShipZhName={dictShipZhName}
          dictShipImgIso={dictShipImgIso}
          computedMax={{
            speedMax: speedMax,
            pitchMax: pitchMax,
            yawMax: yawMax,
            rollMax: rollMax,
            accelFwdMax: accelFwdMax,
            accelBwdMax: accelBwdMax,
            accelStrMax: accelStrMax,
            accelUwdMax: accelUwdMax,
            accelDwdMax: accelDwdMax,
          }}
        />
      ) : (
        <>
          {shipIdx && (
            <>
              <div className="title-card">
                <div className="manufacturer-bg">
                  {manufacturers_small[shipIdx.Manufacturer]}
                </div>
                <img
                  src={dictShipImgIso[shipIdx.Name]}
                  alt="ship_image"
                  className="ship-img-iso"
                />
                {/* <img src={`https://ships.42kit.com/${shipIdx.NameShort.toLowerCase().trimEnd().replaceAll(" ", "-")}%20iso.png`} alt="ship_image" className="ship-img-iso" /> */}
                <div className="manufacturer">
                  <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
                  <h2>
                    <I18n text={shipIdx.Manufacturer} />
                  </h2>
                </div>
                <div className="ship-name-wrapper">
                  <h1 className="ship-name">
                    {lang == "zh_cn"
                      ? dictShipZhName[shipIdx.Name]
                          ?.split(" ")
                          .slice(1)
                          .join(" ") || shipIdx.NameShort
                      : shipIdx.NameShort}
                  </h1>
                </div>
                <div className="career-and-role font-slim">
                  <h4>
                    <I18n text={shipIdx.Career} />
                  </h4>
                  <h4>
                    <I18n text={shipIdx.Role} />
                  </h4>
                  <h4
                    style={{
                      color: `hsl(${
                        statusToHue[shipIdx.ProgressTracker.Status]
                      }, 100%, 50%)`,
                      backgroundColor: `hsl(${
                        statusToHue[shipIdx.ProgressTracker.Status]
                      }, 100%, 9%)`,
                    }}
                  >
                    {shipIdx.ProgressTracker.Status}{" "}
                    {shipIdx.ProgressTracker.Patch && (
                      <span>{shipIdx.ProgressTracker.Patch}</span>
                    )}
                  </h4>
                </div>
                <h3
                  className="prices font-slim"
                  style={{ opacity: shipIdx.PU.Buy ? 1 : 0.5 }}
                >
                  {shipIdx.PU.Buy
                    ? shipIdx.PU.Buy + " aUEC"
                    : "Not Purchasable with aUEC"}
                </h3>
                <h3 className="prices font-slim">
                  {shipIdx.Store.Buy} USD
                  {shipIdx.Store.IsLimitedSale && " LIMITED SALE"}
                </h3>
                <p className="version-and-sources font-slim">
                  Game Version: 3.24.3 LIVE
                  <br />
                  Data Source:{" "}
                  <a href="https://www.spviewer.eu/" target="_blank">
                    SC Ships Performances Viewer
                  </a>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Image Source:{" "}
                  <a href="https://hangar.link/fleet/canvas" target="_blank">
                    STARJUMP
                  </a>
                </p>
              </div>
              <div className="container-content-navigation">
                {tabs.map((tabTitle) =>
                  shipIdx.Type !== "Ship" &&
                  tabTitle === "quantum-travel" ? null : (
                    <div
                      key={tabTitle}
                      className={contentNavTab === tabTitle ? "active" : ""}
                      onClick={() =>
                        setContentNavTab((prev) =>
                          prev == tabTitle ? "" : tabTitle,
                        )
                      }
                    >
                      <I18n text={"content-nav-" + tabTitle} />
                    </div>
                  ),
                )}
              </div>
              {contentNavTab === "components" && (
                <PanelComponents
                  shipHardpts={shipHardpts}
                  shipDataRSI={shipDataRSI}
                  hideQuantumDrives={shipIdx.Type !== "Ship"}
                />
              )}
              {shipIdx.Type === "Ship" &&
                contentNavTab === "quantum-travel" && (
                  <PanelQuantumTravel
                    shipHardpts={shipHardpts}
                    shipDataRSI={shipDataRSI}
                  />
                )}
            </>
          )}

          {shipObj && contentNavTab === "" && (
            <>
              <div className="grid3">
                <CardList
                  title="Basic"
                  infoObj={{
                    Size:
                      (shipObj.IsSpaceship
                        ? I18nPure(
                            [
                              "",
                              "Snub",
                              "Small",
                              "Medium",
                              "Large",
                              "Capital",
                              "Capital",
                              "Capital",
                            ].at(shipObj.Size),
                            lang,
                          )
                        : I18nPure(
                            [
                              "",
                              "Small",
                              "Medium",
                              "Medium",
                              "Large",
                              "Large",
                              "Large",
                            ].at(shipObj.Size),
                            lang,
                          )) + ` (${shipObj.Size})`,
                    Mass: [(shipObj.Mass / 1000).toFixed(3), "t"],
                    Dimensions: [
                      shipObj.Dimensions.Length +
                        " / " +
                        shipObj.Dimensions.Width +
                        " / " +
                        shipObj.Dimensions.Height,
                      "m",
                    ],
                    TotalHealthStruct:
                      Object.values(
                        shipObj.Hull.StructureHealthPoints.Parts,
                      ).reduce((a, b) => a + b, 0) +
                      Object.values(
                        shipObj.Hull.StructureHealthPoints.VitalParts,
                      ).reduce((a, b) => a + b, 0),
                    VitalHealthStruct: Object.values(
                      shipObj.Hull.StructureHealthPoints.VitalParts,
                    ).reduce((a, b) => a + b, 0),
                    FuelCapacity: shipObj?.FuelManagement?.FuelCapacity,
                    QuantumFuelCapacity:
                      shipObj?.FuelManagement?.QuantumFuelCapacity,
                  }}
                />
                <CardList
                  title="Payloads"
                  infoObj={{
                    Crew: shipObj.Crew,
                    WeaponCrew: shipObj.WeaponCrew,
                    OperationsCrew: shipObj.OperationsCrew,
                    CargoGrid: [shipObj.Cargo.CargoGrid, "SCU"],
                    CargoContainers: [shipObj.Cargo.CargoContainers, "SCU"],
                    ExternalStorage: [shipObj.Cargo.ExternalStorage, "SCU"],
                    PersonalInventory: [
                      shipObj.Cargo.PersonalInventory * 1000,
                      "mSCU",
                    ],
                  }}
                />
                <CardList
                  title="InsuranceAndDeals"
                  infoObj={{
                    StandardClaimTime: [
                      Math.floor(shipObj.Insurance.StandardClaimTime) + " m",
                      ((shipObj.Insurance.StandardClaimTime % 1) * 60)
                        .toFixed(0)
                        .padStart(2, "0") + " s",
                    ],
                    ExpeditedClaimTime: [
                      Math.floor(shipObj.Insurance.ExpeditedClaimTime) + " m",
                      ((shipObj.Insurance.ExpeditedClaimTime % 1) * 60)
                        .toFixed(0)
                        .padStart(2, "0") + " s",
                    ],
                    ExpeditedCost: [
                      shipObj.Insurance.ExpeditedCost.toFixed(0),
                      "aUEC",
                    ],
                    ...(() => {
                      return shipObj.Buy
                        ? { PurchasableAt: "" }
                        : { NotPurchasable: "" };
                    })(),
                    ...(() => {
                      if (!shipObj.Buy) return null;
                      let temp = {};
                      Object.keys(shipObj.Buy).forEach((k) => {
                        temp[k] = [shipObj.Buy[k], ""];
                      });
                      return temp;
                    })(),
                  }}
                />
                <CardList
                  title="Combats"
                  infoObj={{
                    PilotWeaponsBurstDPS: [shipObj.Weapons.PilotBurstDPS, "/s"],
                    TotalTurretDmg: ["?", "/s"],
                    TotalMissilesDmg: shipObj.Weapons.TotalMissilesDmg,
                    TotalEMPDmg: "?",
                    TotalDecoyAmmo:
                      totalDecoyItemNum &&
                      totalDecoyItemNum + "×" + totalDecoyAmmo,
                    TotalNoiseAmmo:
                      totalNoiseItemNum &&
                      totalNoiseItemNum + "×" + totalNoiseAmmo,
                  }}
                  iconOverrides={[
                    "Weapons",
                    "Turrets",
                    "Missiles",
                    "EMP",
                    "Decoy",
                    "Noise",
                  ]}
                />
                <CardList
                  title="Shields"
                  infoObj={{
                    ShieldType: I18nPure(
                      shipHardpts.Hardpoints.Components.Systems.Shields
                        .FaceType,
                      lang,
                    ),
                    TotalShieldHP:
                      shipHardpts.Hardpoints.Components.Systems.Shields
                        .TotalShieldPool,
                    SingleFaceShieldHP:
                      shipHardpts.Hardpoints.Components.Systems.Shields
                        .TotalShieldPool /
                      (shipHardpts.Hardpoints.Components.Systems.Shields
                        .FaceType == "Bubble"
                        ? 1
                        : shipHardpts.Hardpoints.Components.Systems.Shields
                              .FaceType == "FrontBack"
                          ? 2
                          : 4),
                    TotalRegenSpeed: [
                      shipHardpts.Hardpoints.Components.Systems.Shields
                        .TotalRegenSpeed,
                      "/s",
                    ],
                    RegenDelay: "?",
                    PhysicalAbsorptionRateMax: [
                      shipHardpts.Hardpoints.Components.Systems.Shields.InstalledItems?.at(
                        0,
                      )?.PhysicalAbsorption?.Maximum * 100,
                      "%",
                    ],
                  }}
                  iconOverrides={[
                    "Shields",
                    "ShieldType" +
                      shipHardpts.Hardpoints.Components.Systems.Shields
                        .FaceType,
                    shipHardpts.Hardpoints.Components.Systems.Shields
                      .FaceType === "Bubble"
                      ? "ShieldTypeBubble"
                      : "ShieldType" +
                        shipHardpts.Hardpoints.Components.Systems.Shields
                          .FaceType +
                        "FrontOnly",
                    null,
                    "TimeDelay",
                    "DamageReducPhy",
                  ]}
                />

                {shipObj.IsSpaceship && (
                  <>
                    <QuantumTravel
                      QDriveName={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Name
                      }
                      QDriveSize={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Size
                      }
                      QDriveClass={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Class
                      }
                      QDriveGrade={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Grade
                      }
                      QFuelCapacity={
                        shipObj?.FuelManagement?.QuantumFuelCapacity
                      }
                      FuelConsumpRate={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.FuelRate
                      }
                      QTSpeedCruise={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.CruiseSpeed
                      }
                      QTSpeedStage1={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Stage1Speed
                      }
                      QTSpeedStage2={
                        shipHardpts.Hardpoints.Components?.Propulsion?.QuantumDrives?.InstalledItems?.at(
                          0,
                        )?.Stage2Speed
                      }
                      SpoolTime={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.StandardJump
                          ?.SpoolUpTime
                      }
                      CoolDown={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.StandardJump
                          ?.Cooldown
                      }
                      SplineSpeed={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.SplineJump
                          ?.Speed
                      }
                      SplineAccelRateStage1={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.SplineJump
                          ?.Stage1AccelerationRate
                      }
                      SplineAccelRateStage2={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.SplineJump
                          ?.Stage2AccelerationRate
                      }
                      SplineSpoolTime={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.SplineJump
                          ?.SpoolUpTime
                      }
                      SplineCoolDown={
                        shipComponentQDrive?.stdItem?.QuantumDrive?.SplineJump
                          ?.Cooldown
                      }
                    />
                  </>
                )}

                {shipObj.IsSpaceship && (
                  <>
                    <FlightCharacteristics
                      scm={shipObj.FlightCharacteristics.ScmSpeed}
                      max={shipObj.FlightCharacteristics.MaxSpeed}
                      maxFwd={
                        shipObj.FlightCharacteristics.MasterModes.ScmMode
                          .BoostSpeedForward
                      }
                      maxBwd={
                        shipObj.FlightCharacteristics.MasterModes.ScmMode
                          .BoostSpeedBackward
                      }
                      pitch={shipObj.FlightCharacteristics.Pitch}
                      yaw={shipObj.FlightCharacteristics.Yaw}
                      roll={shipObj.FlightCharacteristics.Roll}
                      speedMax={speedMax}
                      pitchMax={pitchMax}
                      yawMax={yawMax}
                      rollMax={rollMax}
                      angVelMult={
                        shipObj.FlightCharacteristics.Boost
                          .AngularVelocityMultiplier
                      }
                      spoolTime={
                        shipObj.FlightCharacteristics.MasterModes
                          .BaseSpoolTime +
                        (shipComponentQDrive
                          ? shipComponentQDrive.stdItem.QuantumDrive
                              .StandardJump.SpoolUpTime
                          : 0)
                      }
                    />
                    <FlightAccelerations
                      shipImgIso={dictShipImgIso[shipIdx.Name]}
                      FlightCharObj={shipObj.FlightCharacteristics}
                      FwdMax={accelFwdMax}
                      BwdMax={accelBwdMax}
                      StrMax={accelStrMax}
                      UwdMax={accelUwdMax}
                      DwdMax={accelDwdMax}
                    />
                  </>
                )}

                {shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                  .InstalledItems && (
                  <CardList
                    title="SelfDestruct"
                    infoObj={{
                      Countdown: [
                        shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                          .InstalledItems[0].Countdown,
                        "s",
                      ],
                      ExplosionDamage:
                        shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                          .InstalledItems[0].Damage,
                      ExplosionRadius: [
                        shipHardpts.Hardpoints.Components.Avionics.SelfDestruct
                          .InstalledItems[0].MinRadius +
                          " ~ " +
                          shipHardpts.Hardpoints.Components.Avionics
                            .SelfDestruct.InstalledItems[0].MaxRadius,
                        "m",
                      ],
                    }}
                    iconOverrides={["TimeDelay"]}
                  />
                )}

                {shipObj.IsSpaceship && (
                  <>
                    <CardList
                      title="FuelTanks"
                      infoObj={{
                        FuelCapacity: shipObj.FuelManagement.FuelCapacity,
                        QuantumFuelCapacity:
                          shipObj.FuelManagement.QuantumFuelCapacity,
                        FuelIntakeRate: [
                          shipObj.FuelManagement.FuelIntakeRate,
                          "/s",
                        ],
                        // IntakeToMainFuelRatio:
                        //   shipObj.FuelManagement.IntakeToMainFuelRatio,
                        TimeForIntakesToFillTank:
                          shipObj.FuelManagement.FuelIntakeRate > 0 ? (
                            [
                              (
                                shipObj.FuelManagement
                                  .TimeForIntakesToFillTank / 3600
                              ).toFixed(1),
                              "hr",
                            ]
                          ) : (
                            <span
                              style={{
                                opacity: 0.5,
                              }}
                            >
                              ∅
                            </span>
                          ),
                      }}
                      iconOverrides={[null, null, null, "TimeDelay"]}
                    />
                    <CardList
                      title="FuelBurnRate"
                      infoObj={{
                        FuelBurnRateMain: [
                          shipObj.FuelManagement.FuelUsagePerSecond.Main,
                          "/s",
                        ],
                        FuelBurnRateMainAssisted:
                          shipObj.FuelManagement.FuelUsagePerSecond
                            .MainAssisted != null ? (
                            [
                              shipObj.FuelManagement.FuelUsagePerSecond.MainAssisted.toFixed(
                                2,
                              ),
                              "/s",
                            ]
                          ) : (
                            <span
                              style={{
                                opacity: 0.5,
                              }}
                            >
                              ∅
                            </span>
                          ),
                        FuelBurnRateRetro: [
                          shipObj.FuelManagement.FuelUsagePerSecond.Retro,
                          "/s",
                        ],
                        FuelBurnRateManeuv: [
                          shipObj.FuelManagement.FuelUsagePerSecond.Maneuvering,
                          "/s",
                        ],
                        FuelBurnRateVtol:
                          shipObj.FuelManagement.FuelUsagePerSecond.Vtol > 0 ? (
                            [
                              shipObj.FuelManagement.FuelUsagePerSecond.Vtol,
                              "/s",
                            ]
                          ) : (
                            <span
                              style={{
                                opacity: 0.5,
                              }}
                            >
                              ∅
                            </span>
                          ),
                      }}
                      iconOverrides={[
                        "AccelMain",
                        "AccelMainAssisted",
                        "AccelRetro",
                        "AccelManeuvering",
                        "AccelUp",
                      ]}
                    />
                    <CardList
                      title="FlightTime"
                      infoObj={{
                        FlightTimeMainWithVtol: [
                          shipObj.FuelManagement.FuelCapacity /
                            (shipObj.FuelManagement.FuelUsagePerSecond.Main +
                              shipObj.FuelManagement.FuelUsagePerSecond.Vtol -
                              shipObj.FuelManagement.FuelIntakeRate) /
                            60 <=
                          9999
                            ? (
                                shipObj.FuelManagement.FuelCapacity /
                                (shipObj.FuelManagement.FuelUsagePerSecond
                                  .Main +
                                  shipObj.FuelManagement.FuelUsagePerSecond
                                    .Vtol -
                                  shipObj.FuelManagement.FuelIntakeRate) /
                                60
                              ).toFixed(0)
                            : "9999+",
                          "min",
                        ],
                        FlightTimeMainAssistedWithVtol:
                          shipObj.FuelManagement.FuelUsagePerSecond
                            .MainAssisted != null ? (
                            [
                              shipObj.FuelManagement.FuelCapacity /
                                (shipObj.FuelManagement.FuelUsagePerSecond
                                  .MainAssisted +
                                  shipObj.FuelManagement.FuelUsagePerSecond
                                    .Vtol -
                                  shipObj.FuelManagement.FuelIntakeRate) /
                                60 <=
                              9999
                                ? (
                                    shipObj.FuelManagement.FuelCapacity /
                                    (shipObj.FuelManagement.FuelUsagePerSecond
                                      .MainAssisted +
                                      shipObj.FuelManagement.FuelUsagePerSecond
                                        .Vtol -
                                      shipObj.FuelManagement.FuelIntakeRate) /
                                    60
                                  ).toFixed(0)
                                : "9999+",
                              "min",
                            ]
                          ) : (
                            <span
                              style={{
                                opacity: 0.5,
                              }}
                            >
                              ∅
                            </span>
                          ),
                        FlightTimeMainAssistedWithManeuvWithVtol: [
                          shipObj.FuelManagement.FuelCapacity /
                            ((shipObj.FuelManagement.FuelUsagePerSecond
                              .MainAssisted ||
                              shipObj.FuelManagement.FuelUsagePerSecond.Main) +
                              shipObj.FuelManagement.FuelUsagePerSecond
                                .Maneuvering +
                              shipObj.FuelManagement.FuelUsagePerSecond.Vtol -
                              shipObj.FuelManagement.FuelIntakeRate) /
                            60 <=
                          9999
                            ? (
                                shipObj.FuelManagement.FuelCapacity /
                                ((shipObj.FuelManagement.FuelUsagePerSecond
                                  .MainAssisted ||
                                  shipObj.FuelManagement.FuelUsagePerSecond
                                    .Main) +
                                  shipObj.FuelManagement.FuelUsagePerSecond
                                    .Maneuvering +
                                  shipObj.FuelManagement.FuelUsagePerSecond
                                    .Vtol -
                                  shipObj.FuelManagement.FuelIntakeRate) /
                                60
                              ).toFixed(0)
                            : "9999+",
                          "min",
                        ],
                      }}
                      iconOverrides={[
                        "AccelMain",
                        "AccelMainAssisted",
                        "AccelManeuvering",
                      ]}
                    />
                    {false && (
                      <CardList
                        title="Afterburner"
                        infoObj={{
                          BoostCapacitor:
                            shipObj.FlightCharacteristics.Capacitors
                              .ThrusterCapacitorSize,
                          BoostIdleCost: [
                            shipObj.FlightCharacteristics.Capacitors
                              .CapacitorIdleCost,
                            "/s",
                          ],
                          BoostRegenRate: [
                            shipObj.FlightCharacteristics.Capacitors
                              .CapacitorRegenPerSec,
                            "/s",
                          ],
                          BoostRegenDelay: [
                            shipObj.FlightCharacteristics.Capacitors
                              .CapacitorRegenDelay,
                            "s",
                          ],
                          BoostRegenTime: [
                            shipObj.FlightCharacteristics.Capacitors
                              .RegenerationTime,
                            "s",
                          ],
                        }}
                        iconOverrides={[null, "Afterburner", null, null, null]}
                      />
                    )}
                  </>
                )}

                <CardList
                  title="Emissions"
                  infoObj={{
                    IdleEMEmission:
                      shipObj.Emissions.Electromagnetic.IdleEMEmission,
                    ActiveEMEmission:
                      shipObj.Emissions.Electromagnetic.ActiveEMEmission,
                    QTEMEmission:
                      shipObj.Emissions.Electromagnetic.QTEMEmission,
                    StartIREmission: shipObj.Emissions.Infrared.StartIREmission,
                    FrontCSEmission: shipObj.Emissions.CrossSection.Front,
                    SideCSEmission: shipObj.Emissions.CrossSection.Side,
                    TopCSEmission: shipObj.Emissions.CrossSection.Top,
                  }}
                />
                <CardList
                  title="ArmorAttributes"
                  infoObj={{
                    DamageReducPhy: [
                      (
                        100 -
                        shipObj.Armor.DamageMultipliers.Physical * 100
                      ).toFixed(0),
                      "%",
                    ],
                    DamageReducEne: [
                      (
                        100 -
                        shipObj.Armor.DamageMultipliers.Energy * 100
                      ).toFixed(0),
                      "%",
                    ],
                    DamageReducDis: [
                      (
                        100 -
                        shipObj.Armor.DamageMultipliers.Distortion * 100
                      ).toFixed(0),
                      "%",
                    ],
                    SignalReducEM: [
                      (
                        100 -
                        shipObj.Armor.SignalMultipliers.Electromagnetic * 100
                      ).toFixed(0),
                      "%",
                    ],
                    SignalReducIR: [
                      (
                        100 -
                        shipObj.Armor.SignalMultipliers.Infrared * 100
                      ).toFixed(0),
                      "%",
                    ],
                    SignalReducCS: [
                      (
                        100 -
                        shipObj.Armor.SignalMultipliers.CrossSection * 100
                      ).toFixed(0),
                      "%",
                    ],
                  }}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default MainInfo;
