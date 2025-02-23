/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { mdiLock } from "@mdi/js";
import Icon from "@mdi/react";

import "./SimpleInfo.css";
import RSISizeToNumber from "./assets/RSISizeToNumber";
import component_zh_name from "./assets/component_zh_name.json";
import cross from "./assets/cross.png";
import icons from "./assets/icons";
import bg_line from "./assets/lines.png";
import manufacturers_small from "./assets/manufacturers_small";
import statusEnToZh from "./assets/statusEnToZh";
import statusToHue from "./assets/statusToHue";
import CargoGrid3D from "./components/CargoGrid3D/CargoGrid3D";
import FlightAccelerations from "./components/FlightAccelerations/FlightAccelerations";
import FlightCharacteristics from "./components/FlightCharacteristics/FlightCharacteristics";
import I18n from "./components/I18n";
import I18nPure from "./components/I18nPure";
import SimpleComponent from "./components/SimpleComponent/SimpleComponent";
import SimpleComponentEditable from "./components/SimpleComponent/SimpleComponentEditable";
import SimpleFuelTank from "./components/SimpleFuelTank/SimpleFuelTank";
import SimpleWeaponGroup from "./components/SimpleWeaponGroup/SimpleWeaponGroup";
import shipItems from "./data/ship-items.js";

const checkObjNotEmpty = (obj) => {
  if (obj == null) return false;
  return Object.keys(obj).length !== 0;
};

const SimpleInfo = ({
  shipIdx,
  shipObj,
  shipHardpts,
  shipData,
  shipDataRSI,
  dictShipZhName,
  dictShipImgIso,
  computedMax,
}) => {
  const lang = localStorage.getItem("lang");
  const searchParams = useSearchParams()[0];

  const speedMax = computedMax.speedMax;
  const pitchMax = computedMax.pitchMax;
  const yawMax = computedMax.yawMax;
  const rollMax = computedMax.rollMax;

  const accelFwdMax = computedMax.accelFwdMax;
  const accelBwdMax = computedMax.accelBwdMax;
  const accelStrMax = computedMax.accelStrMax;
  const accelUwdMax = computedMax.accelUwdMax;
  const accelDwdMax = computedMax.accelDwdMax;

  const [shipComponentQDrive, setShipComponentQDrive] = useState(null);

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
  }, [shipHardpts]);

  if (!shipIdx) return null;
  return (
    <>
      <div className="SimpleInfo-container">
        {/* <div className="manufacturer-bg">
          {manufacturers_small[shipIdx.Manufacturer]}
        </div> */}
        <img
          src={dictShipImgIso[shipIdx.Name]}
          alt=""
          className="ship-img-iso"
          style={{ maxHeight: "14rem" }}
        />
        <div className="manufacturer">
          <div>{manufacturers_small[shipIdx.Manufacturer]}</div>
          <h2>
            <I18n text={shipIdx.Manufacturer} />
          </h2>
        </div>
        <div className="ship-name-wrapper">
          <h1 className="ship-name">
            {lang == "zh_cn"
              ? dictShipZhName[shipIdx.Name]?.split(" ").slice(1).join(" ") ||
                shipIdx.NameShort
              : shipIdx.NameShort}
          </h1>
        </div>
        <div className="career-and-role font-slim">
          <h4>
            <I18n text={shipData?.type || shipIdx.Career} />
          </h4>
          <h4>
            {I18nPure(shipData?.foci[0], lang) ||
              component_zh_name[shipIdx.Role?.toLowerCase()] ||
              shipIdx.Role}
          </h4>
          <h4
            style={{
              color: `hsl(${
                statusToHue[shipIdx.ProgressTracker.Status]
              }, 100%, ${searchParams.get("theme") == "light" ? 25 : 50}%)`,
              backgroundColor: `hsl(${
                statusToHue[shipIdx.ProgressTracker.Status]
              }, 100%, ${searchParams.get("theme") == "light" ? 85 : 9}%)`,
            }}
          >
            {statusEnToZh[shipIdx.ProgressTracker.Status]}{" "}
            {shipIdx.ProgressTracker.Patch && (
              <span>{shipIdx.ProgressTracker.Patch}</span>
            )}
          </h4>
        </div>
        <h3
          className="prices font-slim"
          style={{ opacity: shipIdx.PU.Buy ? 1 : 0.5 }}
        >
          {shipIdx.PU.Buy ? shipIdx.PU.Buy + " aUEC" : "无法通过 aUEC 购买"}
          <span>
            {shipObj?.Buy &&
              " 购买于 " +
                Object.keys(shipObj.Buy)
                  .map((loc) => I18nPure(loc, lang))
                  .join(" / ")}
          </span>
        </h3>
        <h3 className="prices font-slim" style={{ color: "#ffae00" }}>
          {shipIdx.Store.Buy} USD
          <span>{shipIdx.Store.IsLimitedSale && " 限时购买"}</span>
        </h3>
        <h3 className="basic-info font-slim">
          {shipData?.sizes ? (
            <>
              {icons.Length}长 {shipDataRSI?.length || shipData.sizes.length} m
              &nbsp;&nbsp;&nbsp;
              {icons.Width}宽 {shipDataRSI?.beam || shipData.sizes.beam} m
              &nbsp;&nbsp;&nbsp;
              {icons.Height}高 {shipDataRSI?.height || shipData.sizes.height} m
            </>
          ) : (
            "尺寸未知"
          )}
        </h3>
        <h3 className="basic-info font-slim">
          {icons.Mass}
          质量 &nbsp;&nbsp;&nbsp;{" "}
          {shipData?.mass ? <>{(shipData.mass / 1000).toFixed(3)} t</> : "未知"}
        </h3>
        <h3 className="basic-info font-slim">
          {icons.CargoGrid}
          货物网格 &nbsp;&nbsp;&nbsp;{" "}
          {shipObj
            ? shipObj.Cargo.CargoGrid
            : shipData
              ? shipData.cargo_capacity
              : "未知"}
        </h3>
        <div className="SimpleInfo-title-bottom-banner">
          <div className="small-texts">
            游戏版本：4.0.0 Prev &nbsp;&nbsp;|&nbsp;&nbsp; 主要数据来源：Ships
            Performances Viewer
          </div>
          <div className="small-logo"></div>
          <div className="small-texts">
            GrakePCH 设计 &nbsp;&nbsp;|&nbsp;&nbsp; CxJuice 与 XK_14
            提供技术支持 &nbsp;&nbsp;|&nbsp;&nbsp; Image Source: STARJUMP
          </div>
        </div>
      </div>
      {shipHardpts ? (
        <div className="SimpleInfo-contents">
          <div className="SimpleGrid">
            <SimpleComponentEditable
              type="电源"
              icon="PowerPlants"
              itemObj={shipHardpts.Hardpoints.Components.Propulsion.PowerPlants}
            />
            <SimpleComponentEditable
              type="护盾"
              icon={
                shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  ? "ShieldType" +
                    shipHardpts.Hardpoints.Components.Systems.Shields.FaceType
                  : "Shields"
              }
              itemObj={shipHardpts.Hardpoints.Components.Systems.Shields}
            />
            <SimpleComponentEditable
              type="冷却器"
              icon="Coolers"
              itemObj={shipHardpts.Hardpoints.Components.Systems.Coolers}
            />
            <SimpleComponentEditable
              type="量子引擎"
              icon="QuantumDrives"
              itemObj={
                shipHardpts.Hardpoints.Components.Propulsion.QuantumDrives
              }
            />
            <SimpleComponentEditable
              type="跳跃引擎"
              icon="JumpDrives"
              itemObj={{
                InstalledItems:
                  shipHardpts.Hardpoints.Components.Propulsion.QuantumDrives.InstalledItems?.at(
                    0,
                  )?.Ports,
              }}
            />
            {/* <SimpleComponent
              type="雷达"
              icon="Radars"
              itemObj={shipHardpts.Hardpoints.Components.Avionics.Radars}
            /> */}
            <SimpleFuelTank
              fuelH={shipObj?.FuelManagement?.FuelCapacity || 0}
              fuelQT={shipObj?.FuelManagement?.QuantumFuelCapacity || 0}
            />
            {shipIdx.Type == "Ship" && (
              <>
                <div style={{ gridColumn: "1/3" }}>
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
                      shipObj.FlightCharacteristics.MasterModes.BaseSpoolTime +
                      (shipComponentQDrive
                        ? shipComponentQDrive.stdItem.QuantumDrive.StandardJump
                            .SpoolUpTime
                        : 0)
                    }
                  />
                </div>
                <div style={{ gridColumn: "1/3" }}>
                  <FlightAccelerations
                    shipImgIso={dictShipImgIso[shipIdx.Name]}
                    FlightCharObj={shipObj.FlightCharacteristics}
                    FwdMax={accelFwdMax}
                    BwdMax={accelBwdMax}
                    StrMax={accelStrMax}
                    UwdMax={accelUwdMax}
                    DwdMax={accelDwdMax}
                  />
                </div>{" "}
              </>
            )}
          </div>
          <div className="SimpleInfo-column-2">
          {/* <CargoGrid3D /> */}
          <div className="SimpleInfo-weapons">
            {(checkObjNotEmpty(shipHardpts.Hardpoints.Weapons.PilotWeapons) ||
              checkObjNotEmpty(shipHardpts.Hardpoints.Weapons.MannedTurrets) ||
              checkObjNotEmpty(shipHardpts.Hardpoints.Weapons.RemoteTurrets) ||
              checkObjNotEmpty(shipHardpts.Hardpoints.Weapons.MissileRacks) ||
              checkObjNotEmpty(shipHardpts.Hardpoints.Weapons.BombRacks) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.EMP,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.QED,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.MiningHardpoints
                  ?.PilotControlled,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.MiningHardpoints?.CrewControlled,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.SalvageHardpoints
                  ?.PilotControlled,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.SalvageHardpoints
                  ?.CrewControlled,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.UtilityHardpoints,
              ) ||
              checkObjNotEmpty(
                shipHardpts.Hardpoints.Weapons.UtilityTurrets,
              )) && (
              <div className="legend">
                <div>图例</div>
                <div>
                  {icons.gimballed}
                  <p>有万向节</p>
                </div>
                <div>
                  <Icon path={mdiLock} size="1rem" />
                  <p>不可更改</p>
                </div>
              </div>
            )}
            <SimpleWeaponGroup
              groupName="PilotWeapons"
              icon="Weapons"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.PilotWeapons}
            />
            <SimpleWeaponGroup
              groupName="MannedTurrets"
              icon="WeaponCrew"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MannedTurrets}
            />
            <SimpleWeaponGroup
              groupName="RemoteTurrets"
              icon="RemoteTurrets"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.RemoteTurrets}
            />
            <SimpleWeaponGroup
              groupName="MissileRacks"
              icon="Missiles"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.MissileRacks}
            />
            <SimpleWeaponGroup
              groupName="BombRacks"
              icon="Bombs"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.BombRacks}
            />
            <SimpleWeaponGroup
              groupName="EMP"
              icon="EMP"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.EMP
              }
            />
            <SimpleWeaponGroup
              groupName="QED"
              icon="QED"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.InterdictionHardpoints?.QED
              }
            />
            <SimpleWeaponGroup
              groupName="PilotMiningHardpoints"
              icon="CargoContainers"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.MiningHardpoints?.PilotControlled
              }
            />
            <SimpleWeaponGroup
              groupName="CrewMiningHardpoints"
              icon="CargoContainers"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.MiningHardpoints?.CrewControlled
              }
            />
            <SimpleWeaponGroup
              groupName="PilotSalvageHardpoints"
              icon="Recycle"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.SalvageHardpoints
                  ?.PilotControlled
              }
            />
            <SimpleWeaponGroup
              groupName="CrewSalvageHardpoints"
              icon="Recycle"
              weaponGroupObj={
                shipHardpts.Hardpoints.Weapons.SalvageHardpoints?.CrewControlled
              }
            />
            <SimpleWeaponGroup
              groupName="UtilityHardpoints"
              icon="Beams"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.UtilityHardpoints}
            />
            <SimpleWeaponGroup
              groupName="UtilityTurrets"
              icon="Beams"
              weaponGroupObj={shipHardpts.Hardpoints.Weapons.UtilityTurrets}
            />
            <div
              className="placeholder"
              style={{
                backgroundImage: `url(${bg_line})`,
              }}
            ></div>
          </div>
          </div>
        </div>
      ) : shipDataRSI ? (
        <div className="SimpleInfo-contents">
          <div className="SimpleGrid">
            <SimpleComponent
              type="电源"
              icon="PowerPlants"
              itemObj={{
                InstalledItems:
                  shipDataRSI.compiled.RSIModular.power_plants.map((item) => ({
                    Name: item.details,
                    _Quantity: item.quantity,
                    Size: RSISizeToNumber[item.size],
                  })),
              }}
            />
            <SimpleComponent
              type="护盾"
              icon={"Shields"}
              itemObj={{
                InstalledItems:
                  shipDataRSI.compiled.RSIModular.shield_generators.map(
                    (item) => ({
                      Name: item.details,
                      _Quantity: item.quantity,
                      Size: RSISizeToNumber[item.size],
                    }),
                  ),
              }}
            />
            <SimpleComponent
              type="冷却器"
              icon="Coolers"
              itemObj={{
                InstalledItems: shipDataRSI.compiled.RSIModular.coolers.map(
                  (item) => ({
                    Name: item.details,
                    _Quantity: item.quantity,
                    Size: RSISizeToNumber[item.size],
                  }),
                ),
              }}
            />
            <SimpleComponent
              type="量子引擎"
              icon="QuantumDrives"
              itemObj={{
                InstalledItems:
                  shipDataRSI.compiled.RSIPropulsion.quantum_drives.map(
                    (item) => ({
                      Name: item.details,
                      _Quantity: item.quantity,
                      Size: RSISizeToNumber[item.size],
                    }),
                  ),
              }}
            />
            <SimpleComponent
              type="跳跃引擎"
              icon="JumpDrives"
              itemObj={{
                InstalledItems:
                  shipDataRSI.compiled.RSIPropulsion.jump_modules.map(
                    (item) => ({
                      Name: item.details,
                      _Quantity: item.quantity,
                      Size: RSISizeToNumber[item.size],
                    }),
                  ),
              }}
            />
            <SimpleFuelTank
              fuelH={
                shipDataRSI.compiled.RSIPropulsion.fuel_tanks.length > 0
                  ? null
                  : 0
              }
              fuelQT={
                shipDataRSI.compiled.RSIPropulsion.quantum_fuel_tanks.length > 0
                  ? null
                  : 0
              }
            />
          </div>
          <div className="SimpleInfo-weapons">
            <SimpleWeaponGroup
              groupName="PilotWeapons"
              icon="Weapons"
              weaponGroupObj={{
                InstalledItems: shipDataRSI.compiled.RSIWeapon.weapons.map(
                  (item) => ({
                    BaseLoadout: { Name: item.name },
                    MaxSize: item.size,
                    _Quantity: item.mounts,
                    Ports: [
                      {
                        BaseLoadout: { Name: item.details },
                        MaxSize: item.component_size,
                        _Quantity: item.quantity,
                      },
                    ],
                  }),
                ),
              }}
            />
            <SimpleWeaponGroup
              groupName="Turrets"
              icon="Turrets"
              weaponGroupObj={{
                InstalledItems: shipDataRSI.compiled.RSIWeapon.turrets.map(
                  (item) => ({
                    BaseLoadout: { Name: item.name },
                    MaxSize: item.size,
                    _Quantity: item.mounts,
                    Ports: [
                      {
                        BaseLoadout: { Name: item.details },
                        MaxSize: item.component_size,
                        _Quantity: item.quantity,
                      },
                    ],
                  }),
                ),
              }}
            />
            <SimpleWeaponGroup
              groupName="MissileRacks"
              icon="Missiles"
              weaponGroupObj={{
                InstalledItems: shipDataRSI.compiled.RSIWeapon.missiles.map(
                  (item) => ({
                    BaseLoadout: { Name: item.name },
                    MaxSize: item.size,
                    _Quantity: item.mounts,
                    Ports: [
                      {
                        BaseLoadout: { Name: item.details },
                        MaxSize: item.component_size,
                        _Quantity: item.quantity,
                      },
                    ],
                  }),
                ),
              }}
            />
            <SimpleWeaponGroup
              groupName="Utilities"
              icon="UtilityItems"
              weaponGroupObj={{
                InstalledItems:
                  shipDataRSI.compiled.RSIWeapon.utility_items.map((item) => ({
                    BaseLoadout: { Name: item.name },
                    MaxSize: item.size,
                    _Quantity: item.mounts,
                    Ports: [
                      {
                        BaseLoadout: { Name: item.details },
                        MaxSize: item.component_size,
                        _Quantity: item.quantity,
                      },
                    ],
                  })),
              }}
            />
            <div
              className="placeholder"
              style={{
                backgroundImage: `url(${bg_line})`,
              }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="SimpleInfo-nodata">
          <img className="bg" src={cross} width="100%" height="100%" />
          <p>暂无数据</p>
        </div>
      )}
    </>
  );
};

export default SimpleInfo;
