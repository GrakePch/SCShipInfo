const shipList = [{
    ClassName: "AEGS_Avenger_Stalker",
    Name: "Aegis Avenger Stalker",
    Description: "Initially designed as Aegis’ frontline carrier ship for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.",
    Career: "Combat",
    Role: "Interceptor",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 50786.3,
    ComponentsMass: 2914,
    Dimensions: {
        Length: 22.5,
        Width: 16.5,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500
            },
            Parts: {
                Canopy: 1500,
                Wing_Right: 680,
                Wing_Flap_Right: 10,
                WingTip_Right: 1e3,
                Wing_Left: 680,
                Wing_Flap_Left: 10,
                WingTip_Left: 1e3,
                HullTail_Right: 1e3,
                Right_Tail_Fin_Flap: 10,
                HullTail_Left: 1e3,
                Left_Tail_Fin_Flap: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 9100
            },
            Retro: {
                thruster_left_retro: 8100,
                thruster_right_retro: 8100
            },
            Maneuvering: {
                thruster_left_upper_front: 7100,
                thruster_right_upper_front: 7100,
                thruster_left_lower_front: 7100,
                thruster_right_lower_front: 7100,
                thruster_left_upper_rear: 7100,
                thruster_right_upper_rear: 7100,
                thruster_left_lower_rear: 7100,
                thruster_right_lower_rear: 7100
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52.5,
        Yaw: 48.5,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 6174081,
            Retro: 2e3,
            Vtol: 0,
            Maneuvering: 588e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.5,
            Retro: 4,
            Strafe: 4.5,
            Up: 6,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 280
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.675,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 771.76,
            Retro: .25,
            Vtol: 0,
            Maneuvering: 735
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6213,
            SCMActive: 7551,
            NAV: 13747
        },
        Infrared: {
            Start: 5948
        },
        CrossSection: {
            Front: 2028,
            Side: 5923,
            Top: 8114
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 2360,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 8098
    },
    Insurance: {
        StandardClaimTime: 4.86,
        ExpeditedClaimTime: 1.62,
        ExpeditedCost: 2658
    },
    Buy: {
        "New Deal, Lorville": 1587600
    }
}, {
    ClassName: "AEGS_Avenger_Titan",
    Name: "Aegis Avenger Titan",
    Description: "Lacking the Prisoner Cells of the Stalker or the EMP Generator of the Warlock, the Titan’s hold is free to carry cargo. Couple that available space with the Avenger’s tried and true combat abilities and you’ve got a light cargo hauler that’s more than capable of handling itself in a fight.",
    Career: "Transporter",
    Role: "Courier",
    Size: 2,
    Cargo: {
        CargoGrid: 8,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.01
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 51362.68,
    ComponentsMass: 3302,
    Dimensions: {
        Length: 22.5,
        Width: 16.5,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500
            },
            Parts: {
                Canopy: 1500,
                Wing_Right: 680,
                Wing_Flap_Right: 10,
                WingTip_Right: 1e3,
                Wing_Left: 680,
                Wing_Flap_Left: 10,
                WingTip_Left: 1e3,
                HullTail_Right: 1e3,
                Right_Tail_Fin_Flap: 10,
                HullTail_Left: 1e3,
                Left_Tail_Fin_Flap: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 9100
            },
            Retro: {
                thruster_left_retro: 8100,
                thruster_right_retro: 8100
            },
            Maneuvering: {
                thruster_left_upper_front: 7100,
                thruster_right_upper_front: 7100,
                thruster_left_lower_front: 7100,
                thruster_right_lower_front: 7100,
                thruster_left_upper_rear: 7100,
                thruster_right_upper_rear: 7100,
                thruster_left_lower_rear: 7100,
                thruster_right_lower_rear: 7100
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52.5,
        Yaw: 48.5,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 6237929,
            Retro: 2e3,
            Vtol: 0,
            Maneuvering: 5951392
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.5,
            Retro: 4,
            Strafe: 4.5,
            Up: 6,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 280
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.675,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 22,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 779.741,
            Retro: .25,
            Vtol: 0,
            Maneuvering: 743.924
        },
        IntakeToMainFuelRatio: 2.82,
        TimeForIntakesToFillTank: 409090.91
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6213,
            SCMActive: 7551,
            NAV: 13747
        },
        Infrared: {
            Start: 6032
        },
        CrossSection: {
            Front: 1904,
            Side: 5561,
            Top: 7617
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 2360,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 4.05,
        ExpeditedClaimTime: 1.35,
        ExpeditedCost: 2343
    },
    Buy: {
        "New Deal, Lorville": 1358280
    }
}, {
    ClassName: "AEGS_Avenger_Titan_Renegade",
    Name: "Aegis Avenger Titan Renegade",
    Description: "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Renegade pays tribute to famed pilot Danny Solomon for his notable work with the Advocacy to bring justice to Bremen. This Avenger Titan comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.",
    Career: "Transporter",
    Role: "Courier",
    Size: 2,
    Cargo: {
        CargoGrid: 8,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.01
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 51158.42,
    ComponentsMass: 3222,
    Dimensions: {
        Length: 22.5,
        Width: 16.5,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500
            },
            Parts: {
                Canopy: 1500,
                Wing_Right: 680,
                Wing_Flap_Right: 10,
                WingTip_Right: 1e3,
                Wing_Left: 680,
                Wing_Flap_Left: 10,
                WingTip_Left: 1e3,
                HullTail_Right: 1e3,
                Right_Tail_Fin_Flap: 10,
                HullTail_Left: 1e3,
                Left_Tail_Fin_Flap: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 9100
            },
            Retro: {
                thruster_left_retro: 8100,
                thruster_right_retro: 8100
            },
            Maneuvering: {
                thruster_left_upper_front: 7100,
                thruster_right_upper_front: 7100,
                thruster_left_lower_front: 7100,
                thruster_right_lower_front: 7100,
                thruster_left_upper_rear: 7100,
                thruster_right_upper_rear: 7100,
                thruster_left_lower_rear: 7100,
                thruster_right_lower_rear: 7100
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52.5,
        Yaw: 48.5,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 6237929,
            Retro: 2e3,
            Vtol: 0,
            Maneuvering: 5951392
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.6,
            Retro: 4,
            Strafe: 4.5,
            Up: 6,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 280
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.675,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 22,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 779.741,
            Retro: .25,
            Vtol: 0,
            Maneuvering: 743.924
        },
        IntakeToMainFuelRatio: 2.82,
        TimeForIntakesToFillTank: 409090.91
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6198,
            SCMActive: 7188,
            NAV: 13731
        },
        Infrared: {
            Start: 6032
        },
        CrossSection: {
            Front: 1904,
            Side: 5561,
            Top: 7617
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 1549,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 4.05,
        ExpeditedClaimTime: 1.35,
        ExpeditedCost: 2343
    },
    Buy: {
        "New Deal, Lorville": 1852200
    }
}, {
    ClassName: "AEGS_Avenger_Warlock",
    Name: "Aegis Avenger Warlock",
    Description: "The Avenger Warlock was built towards a single design philosophy: stop ships, don’t destroy them. Probably the closest to a non-lethal fighter, the Warlock is outfitted with a Behring REP-8 EMP Generator, capable of emitting a powerful electromagnetic wave to disable any electronics unfortunate enough to be within the blast radius.",
    Career: "Combat",
    Role: "Interceptor",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 47231.75,
    ComponentsMass: 7044,
    Dimensions: {
        Length: 22.5,
        Width: 16.5,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500
            },
            Parts: {
                Canopy: 1500,
                Wing_Right: 680,
                Wing_Flap_Right: 10,
                WingTip_Right: 1e3,
                Wing_Left: 680,
                Wing_Flap_Left: 10,
                WingTip_Left: 1e3,
                HullTail_Right: 1e3,
                Right_Tail_Fin_Flap: 10,
                HullTail_Left: 1e3,
                Left_Tail_Fin_Flap: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 9100
            },
            Retro: {
                thruster_left_retro: 8100,
                thruster_right_retro: 8100
            },
            Maneuvering: {
                thruster_left_upper_front: 7100,
                thruster_right_upper_front: 7100,
                thruster_left_lower_front: 7100,
                thruster_right_lower_front: 7100,
                thruster_left_upper_rear: 7100,
                thruster_right_upper_rear: 7100,
                thruster_left_lower_rear: 7100,
                thruster_right_lower_rear: 7100
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52.5,
        Yaw: 48.5,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 6226192,
            Retro: 2e3,
            Vtol: 0,
            Maneuvering: 59428352e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.6,
            Retro: 4,
            Strafe: 4.5,
            Up: 6,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 280
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.675,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 778.274,
            Retro: .25,
            Vtol: 0,
            Maneuvering: 742.854
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 7530,
            SCMActive: 9526,
            NAV: 15064
        },
        Infrared: {
            Start: 6248
        },
        CrossSection: {
            Front: 2031,
            Side: 5929,
            Top: 8122
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 2360,
        TurretsBurstDPS: 0,
        TotalEMPDmg: 2750,
        TotalMissilesDmg: 9558
    },
    Insurance: {
        StandardClaimTime: 4.86,
        ExpeditedClaimTime: 1.62,
        ExpeditedCost: 2724
    },
    Buy: {
        "New Deal, Lorville": 2249100
    }
}, {
    ClassName: "AEGS_Eclipse",
    Name: "Aegis Eclipse",
    Description: "The Aegis Eclipse is a bomber designed to get in and strike before it's ever even spotted. After extensive service with the UEE, this high-tech military equipment made its civilian market debut in 2947.",
    Career: "Combat",
    Role: "Stealth Bomber",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 55920,
    ComponentsMass: 2853,
    Dimensions: {
        Length: 20.5,
        Width: 36.6,
        Height: 4.4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1e4,
                body: 1e4
            },
            Parts: {
                cockpit_canopy: 1500,
                wing_left: 1500,
                wing_left_broken: 320,
                wingtip_left: 200,
                wing_right: 1500,
                wing_right_broken: 320,
                wingtip_right: 200,
                tail: 1500,
                bay_door_l_a: 1,
                bay_door_l_b: 1,
                bay_door_r_a: 1,
                bay_door_r_b: 1
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 12500,
                engine_right: 12500
            },
            Retro: {
                thruster_retro_left: 11500,
                thruster_retro_right: 11500
            },
            Maneuvering: {
                thruster_topFL: 10500,
                thruster_bottomFL: 10500,
                thruster_bottomFR: 10500,
                thruster_topFR: 10500,
                thruster_topRL: 10500,
                thruster_topRR: 10500,
                thruster_bottomRL: 10500,
                thruster_bottomRR: 10500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 202,
        MaxSpeed: 1050,
        Pitch: 33,
        Yaw: 33,
        Roll: 110,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3566e3,
            Retro: 216e3,
            Vtol: 0,
            Maneuvering: 5448e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.5,
            Retro: 4.5,
            Strafe: 6.5,
            Up: 6.5,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 215
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .6,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 445.75,
            Retro: 27,
            Vtol: 0,
            Maneuvering: 681
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4e3,
            SCMActive: 4687,
            NAV: 8520
        },
        Infrared: {
            Start: 4146
        },
        CrossSection: {
            Front: 537,
            Side: 4366,
            Top: 2452
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 1186861
    },
    Insurance: {
        StandardClaimTime: 16.54,
        ExpeditedClaimTime: 5.51,
        ExpeditedCost: 17643
    },
    Buy: {
        "New Deal, Lorville": 7938e3
    }
}, {
    ClassName: "AEGS_Gladius",
    Name: "Aegis Gladius",
    Description: "The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 51352.06,
    ComponentsMass: 3265,
    Dimensions: {
        Length: 20,
        Width: 17,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .43,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2134,
                Nose: 2e3
            },
            Parts: {
                WingLeft: 600,
                WingLeft_Tip: 260,
                TipWing_Left_B: 50,
                TipWing_Left_A: 50,
                WingLeft_Mid_Flap: 50,
                WingRight: 600,
                WingRight_Tip: 260,
                TipWing_Right_A: 50,
                TipWing_Right_B: 50,
                WingRight_Mid_Flap: 50,
                Belly: 240,
                Belly_Wing_Left: 150,
                Belly_Wing_Right: 150,
                Rudder_Right: 50,
                Rudder_Right_Flap: 50,
                RearWingRight: 50,
                RearWingRight_Flap: 50,
                RearWingLeft: 50,
                RearWingLeft_Flap: 50,
                Rudder_Left: 50,
                Rudder_Left_Flap: 50,
                FrontWing_Right: 50,
                FrontWing_Left: 50,
                Canopy: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 11500,
                thruster_main_right: 11500
            },
            Retro: {
                thruster_retro_left: 10500,
                thruster_retro_right: 10500
            },
            Maneuvering: {
                thruster_wing_left_top: 9500,
                thruster_wing_left_bottom: 9500,
                thruster_wing_right_top: 9500,
                thruster_wing_right_bottom: 9500,
                thruster_front_left_top: 9500,
                thruster_front_left_side: 9500,
                thruster_front_right_side: 9500,
                thruster_front_right_top: 9500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1230,
        Pitch: 70,
        Yaw: 52,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 491e4,
            Retro: 412e3,
            Vtol: 0,
            Maneuvering: 11336e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.7,
            Retro: 4.4,
            Strafe: 10.4,
            Up: 10,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 520,
                BoostSpeedBackward: 268
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 613.75,
            Retro: 51.5,
            Vtol: 0,
            Maneuvering: 1417
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5937,
            SCMActive: 6886,
            NAV: 14450
        },
        Infrared: {
            Start: 9550
        },
        CrossSection: {
            Front: 1956,
            Side: 7823,
            Top: 9779
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 1598,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14568
    },
    Insurance: {
        StandardClaimTime: 5.83,
        ExpeditedClaimTime: 1.94,
        ExpeditedCost: 2335
    },
    Buy: {
        "New Deal, Lorville": 2381400
    }
}, {
    ClassName: "AEGS_Gladius_Valiant",
    Name: "Aegis Gladius Valiant",
    Description: "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Valiant pays tribute to famed defense pilot Condi Hillard for being the first Human on record to defeat a Vanduul in combat. This Gladius comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring her iconic ship.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 50151.51,
    ComponentsMass: 3361,
    Dimensions: {
        Length: 20,
        Width: 17,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .43,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2134,
                Nose: 2e3
            },
            Parts: {
                WingLeft: 600,
                WingLeft_Tip: 260,
                TipWing_Left_B: 50,
                TipWing_Left_A: 50,
                WingLeft_Mid_Flap: 50,
                WingRight: 600,
                WingRight_Tip: 260,
                TipWing_Right_A: 50,
                TipWing_Right_B: 50,
                WingRight_Mid_Flap: 50,
                Belly: 240,
                Belly_Wing_Left: 150,
                Belly_Wing_Right: 150,
                Rudder_Right: 50,
                Rudder_Right_Flap: 50,
                RearWingRight: 50,
                RearWingRight_Flap: 50,
                RearWingLeft: 50,
                RearWingLeft_Flap: 50,
                Rudder_Left: 50,
                Rudder_Left_Flap: 50,
                FrontWing_Right: 50,
                FrontWing_Left: 50,
                Canopy: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 11500,
                thruster_main_right: 11500
            },
            Retro: {
                thruster_retro_left: 10500,
                thruster_retro_right: 10500
            },
            Maneuvering: {
                thruster_wing_left_top: 9500,
                thruster_wing_left_bottom: 9500,
                thruster_wing_right_top: 9500,
                thruster_wing_right_bottom: 9500,
                thruster_front_left_top: 9500,
                thruster_front_left_side: 9500,
                thruster_front_right_side: 9500,
                thruster_front_right_top: 9500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1230,
        Pitch: 70,
        Yaw: 52,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 491e4,
            Retro: 412e3,
            Vtol: 0,
            Maneuvering: 11336e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.7,
            Retro: 4.4,
            Strafe: 10.4,
            Up: 10,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 520,
                BoostSpeedBackward: 268
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 613.75,
            Retro: 51.5,
            Vtol: 0,
            Maneuvering: 1417
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6641,
            SCMActive: 7535,
            NAV: 15153
        },
        Infrared: {
            Start: 9663
        },
        CrossSection: {
            Front: 1956,
            Side: 7823,
            Top: 9779
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 1639,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 15147
    },
    Insurance: {
        StandardClaimTime: 5.83,
        ExpeditedClaimTime: 1.94,
        ExpeditedCost: 2934
    },
    Buy: {
        "New Deal, Lorville": 2910600
    }
}, {
    ClassName: "AEGS_Hammerhead",
    Name: "Aegis Hammerhead",
    Description: "A fast patrol ship with multiple turrets designed to combat fighters, the Hammerhead is equally suited to support larger capital ships in a fleet or act as a flagship for fighter groups.",
    Career: "Combat",
    Role: "Corvette",
    Size: 5,
    Cargo: {
        CargoGrid: 40,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 10.28
    },
    Crew: 2,
    WeaponCrew: 6,
    OperationsCrew: 0,
    Mass: 4617511,
    ComponentsMass: 31358,
    Dimensions: {
        Length: 120,
        Width: 72,
        Height: 16
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 8e4,
                nose: 8e4
            },
            Parts: {
                custom_decal: 200,
                Tail: 65e3,
                Front_Right: 15200,
                Front_Left: 15200,
                Engine_MountB_Right: 1e4,
                Engine_MountB_Left: 1e4,
                Engine_mountA_Right: 1e4,
                Engine_mountA_Left: 1e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_bottom_right: 25e3,
                thruster_main_bottom_left: 25e3,
                thruster_main_top_right: 25e3,
                thruster_main_top_left: 25e3
            },
            Retro: {
                thruster_retro_right: 23400,
                thruster_retro_left: 23400
            },
            Maneuvering: {
                thruster_side_rear_right: 2e4,
                thruster_side_rear_left: 2e4,
                thruster_bottom_rear_right: 2e4,
                thruster_bottom_rear_left: 2e4,
                thruster_top_rear_right: 2e4,
                thruster_top_rear_left: 2e4,
                thruster_bottom_front_right: 2e4,
                thruster_bottom_front_left: 2e4,
                thruster_side_front_right: 2e4,
                thruster_top_front_right: 2e4,
                thruster_side_front_left: 2e4,
                thruster_top_front_left: 2e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 160,
        MaxSpeed: 950,
        Pitch: 20,
        Yaw: 18,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2326e5,
            Retro: 93e6,
            Vtol: 0,
            Maneuvering: 4284e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 2,
            Strafe: 2,
            Up: 2.5,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 170
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 45e7,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 66e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 29075,
            Retro: 11625,
            Vtol: 0,
            Maneuvering: 53550
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 22024,
            SCMActive: 24175,
            NAV: 37471
        },
        Infrared: {
            Start: 23212
        },
        CrossSection: {
            Front: 8392,
            Side: 39312,
            Top: 6037
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 112200,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 19629,
        TotalMissilesDmg: 91933
    },
    Insurance: {
        StandardClaimTime: 48.6,
        ExpeditedClaimTime: 16.2,
        ExpeditedCost: 24582
    },
    Buy: {
        "New Deal, Lorville": 47958752
    }
}, {
    ClassName: "AEGS_Idris_M_PU",
    Name: "Aegis Idris",
    Description: "A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ship's ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
    Career: "Capital Ship",
    Role: "Frigate",
    Size: 6,
    Cargo: {
        CargoGrid: 1168,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 32
    },
    Crew: 1,
    WeaponCrew: 11,
    OperationsCrew: 0,
    Mass: 37854373,
    ComponentsMass: 354585,
    Dimensions: {
        Length: 243,
        Width: 127,
        Height: 57.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 61e5
            },
            Parts: {
                airlock_section: 375e3,
                Idris_Thruster_Main_01_Left: 3e5,
                Idris_Thruster_Main_01_Right: 3e5,
                Nose: 275e4,
                Nose_VFX_Hack: 1e6,
                railgun_mount: 16e5,
                rail_gun_mount_right: 1e6,
                rail_gun_mount_left: 1e6,
                walkway_left: 1e6,
                tail_engine_mount_left: 3e5,
                Idris_Thruster_Main_02_Left: 2e5,
                Bridge: 215e4,
                antennas_glow: 200,
                Idris_Thruster_Main_01_RearLeft: 3e5,
                Idris_Thruster_Main_01_RearRight: 3e5,
                Tail: 215e4,
                Tail_Bottom: 95e4,
                escapepod_door_rear_left: 5e3,
                escapepod_door_rear_right: 5e3,
                radar: 19e4,
                tail_antennamount: 19e4,
                walkway_right: 1e5,
                tail_engine_mount_right: 1e5,
                Idris_Thruster_Main_02_Right: 2e5
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left_3: 5e5,
                engine_right_3: 5e5,
                engine_left_1: 1e5,
                engine_left_2: 5e5,
                engine_right_2: 5e5,
                engine_right_1: 1e5
            },
            Retro: {
                thruster_retro_right: 8e4,
                thruster_retro_left: 8e4
            },
            Maneuvering: {
                thruster_side_front_left: 5e5,
                thruster_side_front_right: 5e5,
                thruster_bottom_front_left: 5e5,
                thruster_bottom_front_right: 5e5,
                thruster_top_middle_left: 5e5,
                thruster_top_middle_right: 5e5,
                thruster_bottom_rear_left: 5e5,
                thruster_bottom_rear_right: 5e5,
                thruster_top_front_middle: 5e5,
                thruster_side_rear_left: 5e5,
                thruster_side_rear_right: 5e5,
                thruster_top_rear_left: 5e5,
                thruster_top_rear_right: 5e5
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 45,
        MaxSpeed: 800,
        Pitch: 12,
        Yaw: 10,
        Roll: 22,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 972426600,
            Retro: 289355e3,
            Vtol: 0,
            Maneuvering: 1956663800
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.6,
            Retro: .7,
            Strafe: .8,
            Up: 1.6,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 9,
            ScmMode: {
                BoostSpeedForward: 290,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 2,
                    Y: 2,
                    Z: 2
                },
                NegativeAxis: {
                    X: 2,
                    Y: 2,
                    Z: 2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 3,
                Yaw: 3,
                Roll: 3
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 1500,
            CapacitorRegenPerSec: 50,
            CapacitorIdleCost: 50,
            CapacitorLinearCost: 1,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.3,
            RegenerationTime: 30,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 6399e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 12e7,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 16.25
        },
        FuelUsagePerSecond: {
            Main: 121553.325,
            Retro: 36169.375,
            Vtol: 0,
            Maneuvering: 244582.975
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 44827,
            SCMActive: 69380,
            NAV: 44831
        },
        Infrared: {
            Start: 29805
        },
        CrossSection: {
            Front: 1e4,
            Side: 31e3,
            Top: 6e4
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 234e4,
        PilotBurstDPS: 17336,
        TurretsBurstDPS: 25314,
        TotalMissilesDmg: 170917
    },
    Insurance: {
        StandardClaimTime: 112.5,
        ExpeditedClaimTime: 37.5,
        ExpeditedCost: 56250
    }
}, {
    ClassName: "AEGS_Reclaimer",
    Name: "Aegis Reclaimer",
    Description: "The Aegis Reclaimer is an industrial salvage ship. Equipped with a reinforced cargo bay, a long-range jump drive and launch pods for unmanned drones, the Reclaimer is an ideal ship for taking advantage of deep space wrecks. Tractor beams, floodlights, scanner options and docking ports round out the tools on this capable, utilitarian spacecraft.",
    Career: "Industrial",
    Role: "Heavy Salvage",
    Size: 6,
    Cargo: {
        CargoGrid: 420,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 7.22
    },
    Crew: 1,
    WeaponCrew: 7,
    OperationsCrew: 2,
    Mass: 97578535e-1,
    ComponentsMass: 27940,
    Dimensions: {
        Length: 155,
        Width: 118,
        Height: 50
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Front: 5e4,
                Rear: 5e4
            },
            Parts: {
                Main_Engine_BlockRight_VTOL: 1,
                Main_Engine_BlockRight: 2e3,
                Joint_Right: 2e3,
                Main_Engine_Right: 2e3,
                Arms_TopRight_Tip_VTOL: 200,
                Arms_TopRight_Tip: 100,
                Arms_LowerRight_Tip_VTOL: 200,
                Arms_LowerRight_Tip: 100,
                Main_Engine_BlockLeft_VTOL: 1,
                Main_Engine_BlockLeft: 2e3,
                Joint_Left: 2e3,
                Main_Engine_Left: 2e3,
                Arms_TopLeft_Tip_VTOL: 200,
                Arms_TopLeft_Tip: 100,
                Arms_LowerLeft_Tip_VTOL: 200,
                Arms_LowerLeft_Tip: 100,
                Arms_TopRight_Block_VTOL: 200,
                Arms_TopRight_Block: 100,
                Arms_TopRight_VTOL: 200,
                Arms_TopRight: 100,
                Arms_Top_Pistons_Right_VTOL: 200,
                Arms_Top_Pistons_Right: 100,
                Arms_TopLeft_Block_VTOL: 200,
                Arms_TopLeft_Block: 100,
                Arms_TopLeft_VTOL: 200,
                Arms_TopLeft: 100,
                Arms_Top_Pistons_Left_VTOL: 200,
                Arms_Top_Pistons_Left: 100,
                Arms_LowerRight_VTOL: 200,
                Arms_LowerRight: 100,
                Arms_Lower_Pistons_Right_VTOL: 200,
                Arms_Lower_Pistons_Right: 100,
                Arms_LowerLeft_VTOL: 200,
                Arms_LowerLeft: 100,
                Arms_Lower_Pistons_Left_VTOL: 200,
                Arms_Lower_Pistons_Left: 100,
                Bracket_Right: 1e3,
                Aux_Arms_Lower_Right_Bottom: 100,
                Aux_Arms_Lower_Right_B: 100,
                Aux_Arms_Top_Right_A: 100,
                Aux_Arms_Top_Right_B: 100,
                Aux_Arms_Block_Right: 2e3,
                Bracket_Left: 1e3,
                Aux_Arms_Lower_Left_Bottom: 100,
                Aux_Arms_Lower_Left_B: 100,
                Aux_Arms_Top_Left_A: 100,
                Aux_Arms_Top_Left_B: 100,
                Aux_Arms_Block_Left: 2e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 29e3,
                thruster_main_left: 29e3,
                thruster_aux_right: 28500,
                thruster_aux_left: 28500
            },
            Retro: {
                thruster_retro_front_left: 28e3,
                thruster_retro_front_right: 28e3,
                thruster_retro_right_02: 28e3,
                thruster_retro_right_01: 28e3,
                thruster_retro_left_02: 28e3,
                thruster_retro_left_01: 28e3
            },
            Maneuvering: {
                thruster_front_left_side: 26500,
                thruster_front_right_side: 26500,
                thruster_front_right_top: 26500,
                thruster_front_left_top: 26500,
                thruster_front_left_bottom: 26500,
                thruster_front_right_bottom: 26500,
                thruster_outer_front_right: 26500,
                thruster_outer_front_left: 26500,
                thruster_back_right_top: 26500,
                thruster_back_left_top: 26500,
                thruster_back_left_side: 26500,
                thruster_back_right_side: 26500,
                thruster_back_right_bottom: 26500,
                thruster_back_left_bottom: 26500,
                thruster_outer_rear_right: 26500,
                thruster_outer_rear_left: 26500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 110,
        MaxSpeed: 890,
        Pitch: 15,
        Yaw: 15,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 195e6,
            Retro: 1465e5,
            Vtol: 0,
            Maneuvering: 5852e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2,
            Retro: 1.5,
            Strafe: 1,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 290,
                BoostSpeedBackward: 100
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 1754e6,
        FuelIntakeRate: 200,
        QuantumFuelCapacity: 86e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 7.5,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 24375,
            Retro: 18312.5,
            Vtol: 0,
            Maneuvering: 73150
        },
        IntakeToMainFuelRatio: .82,
        TimeForIntakesToFillTank: 877e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 19397,
            SCMActive: 21643,
            NAV: 34844
        },
        Infrared: {
            Start: 24745
        },
        CrossSection: {
            Front: 18111,
            Side: 24656,
            Top: 36221
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 165e3,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 9002,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 30.69,
        ExpeditedClaimTime: 10.23,
        ExpeditedCost: 12555
    },
    Buy: {
        "New Deal, Lorville": 31752e3
    }
}, {
    ClassName: "AEGS_Redeemer",
    Name: "Aegis Redeemer",
    Description: "Designed by Aegis Dynamics, the Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering soldiers to the frontlines.",
    Career: "Combat",
    Role: "Gunship",
    Size: 4,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 4,
        PersonalInventory: 4.22
    },
    Crew: 4,
    WeaponCrew: 4,
    OperationsCrew: 0,
    Mass: 444270.26,
    ComponentsMass: 14642,
    Dimensions: {
        Length: 51,
        Width: 25,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 17e3
            },
            Parts: {
                Nose: 5700,
                Underbelly: 4500,
                Wing_Right: 5600,
                wing_pitch_right: 1e3,
                wing_debris_right_bottom: 5600,
                wing_debris_right_top: 5600,
                Wing_Left: 5600,
                wing_pitch_left: 1e3,
                wing_debris_left_top: 5600,
                wing_debris_left_bottom: 5600,
                Tail: 3300,
                rudder_right: 200,
                rudder_flap_right: 100,
                rudder_left: 200,
                rudder_flap_left: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_rear_main_right: 27500,
                thruster_rear_main_left: 27500,
                thruster_wing_bottom_main_right: 21400,
                thruster_wing_top_main_right: 21400,
                thruster_wing_top_main_left: 21400,
                thruster_wing_bottom_main_left: 21400
            },
            Retro: {
                thruster_retro_right: 28950,
                thruster_retro_left: 28950
            },
            Maneuvering: {
                thruster_mid_top_right: 25500,
                thruster_mid_top_left: 25500,
                thruster_mid_botom_left: 25500,
                thruster_mid_bottom_right: 25500,
                thruster_front_bottom_left: 25500,
                thruster_front_bottom_right: 25500,
                thruster_front_top_left: 25500,
                thruster_front_top_right: 25500,
                thruster_rear_side_right: 25500,
                thruster_rear_side_left: 25500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 202.5,
        MaxSpeed: 1050,
        Pitch: 32,
        Yaw: 32,
        Roll: 115,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2784e4,
            Retro: 22e4,
            Vtol: 102e5,
            Maneuvering: 318e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.1,
            Retro: 2.5,
            Strafe: 3.5,
            Up: 4,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 215
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .7,
            RampDown: .5,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.25,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 66e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 2.5,
            Vtol: 2.5,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 3480,
            Retro: 27.5,
            Vtol: 1275,
            Maneuvering: 3975
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 25451,
            SCMActive: 33281,
            NAV: 40605
        },
        Infrared: {
            Start: 16418
        },
        CrossSection: {
            Front: 3742,
            Side: 12976,
            Top: 27317
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 28440,
        PilotBurstDPS: 542,
        TurretsBurstDPS: 7798,
        TotalMissilesDmg: 32920
    },
    Insurance: {
        StandardClaimTime: 28.35,
        ExpeditedClaimTime: 9.45,
        ExpeditedCost: 13199
    },
    Buy: {
        "New Deal, Lorville": 17199e3
    }
}, {
    ClassName: "AEGS_Retaliator",
    Name: "Aegis Retaliator",
    Description: "This civilian refit of the Retaliator updates the military ship's chassis with unladen space able to be fitted with various modules to suit your needs.",
    Career: "Combat",
    Role: "Gunship",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 5.3,
        PersonalInventory: 8
    },
    Crew: 1,
    WeaponCrew: 5,
    OperationsCrew: 0,
    Mass: 343270.29,
    ComponentsMass: 9520,
    Dimensions: {
        Length: 71,
        Width: 30,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 35e3
            },
            Parts: {
                body: 5e4,
                body_lower_left: 200,
                wing_left_rl_geom: 240,
                wing_left_rl_damage: 1e4,
                wing_left_rl_fin_geom: 50,
                wing_left_mlr_geom: 480,
                wing_left_mlr_damage: 240,
                wing_left_m_geom: 480,
                wing_left_m_damage: 2800,
                main_wing_slider_a_left: 4e3,
                large_wing_piston_geom_l: 4e3,
                large_wing_piston_2: 4e3,
                left_wing_rs_geom: 50,
                body_lower_right: 200,
                wing_right_rl_geom: 240,
                wing_right_rl_damage: 1e4,
                wing_right_rl_fin_geom: 50,
                wing_right_mlr_geom: 480,
                wing_right_mlr_damage: 240,
                wing_right_m_geom: 480,
                wing_right_m_damage: 2800,
                right_wing_rs_geom: 50,
                main_wing_slider_a_right: 4e3,
                main_wing_slider_a_left_r: 4e3,
                large_wing_piston_003: 4e3,
                front_left_wing_damage: 100,
                front_left_wing_flp_geom: 100,
                front_right_wing_damage: 1,
                front_right_wing_flp_geom: 600,
                glass: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                mainthruster_left: 18500,
                mainthruster_right: 18500
            },
            Retro: {
                thruster_maneuver_frontleftretro: 17250,
                thruster_maneuver_frontrightretro: 17250
            },
            Vtol: {
                thruster_vtol_rearleft2: 15500,
                thruster_vtol_rearleft1: 15500,
                thruster_vtol_rearright2: 15500,
                thruster_vtol_rearright1: 15500,
                thruster_vtol_frontleft: 15500,
                thruster_vtol_frontright: 15500
            },
            Maneuvering: {
                thruster_maneuver_backbottomleft: 16e3,
                thruster_maneuver_backbottomright: 16e3,
                thruster_maneuver_backtopright: 16e3,
                thruster_maneuver_backtopleft: 16e3,
                thruster_maneuver_backright: 16e3,
                thruster_maneuver_backleft: 16e3,
                thruster_maneuver_fronttopleft: 16e3,
                thruster_maneuver_fronttopright: 16e3,
                thruster_maneuver_frontleft: 16e3,
                thruster_maneuver_frontright: 16e3,
                thruster_maneuver_frontbottomright: 16e3,
                thruster_maneuver_frontbottomleft: 16e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1244e4,
            Retro: 894e4,
            Vtol: 548e4,
            Maneuvering: 37912e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.2,
            Retro: 2.6,
            Strafe: 2.6,
            Up: 3.1,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 51e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 26e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 7.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1555,
            Retro: 1117.5,
            Vtol: 685,
            Maneuvering: 4739
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 26832,
            SCMActive: 34765,
            NAV: 42312
        },
        Infrared: {
            Start: 15080
        },
        CrossSection: {
            Front: 4700,
            Side: 15100,
            Top: 36e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 28440,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 5456,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 25.74,
        ExpeditedClaimTime: 8.58,
        ExpeditedCost: 32116
    },
    Dimensions2: {
        Length: 71,
        Width: 30,
        Height: 12.5
    },
    Buy: {
        "New Deal, Lorville": 7938e3
    }
}, {
    ClassName: "AEGS_Sabre",
    Name: "Aegis Sabre",
    Description: "Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. Designed to be a rapid responder, the Sabre is more than capable of establishing battlefield dominance for any number of combat scenarios.",
    Career: "Combat",
    Role: "Stealth Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 86592.72,
    ComponentsMass: 3039,
    Dimensions: {
        Length: 24,
        Width: 26,
        Height: 5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 4e3,
                Body: 4e3
            },
            Parts: {
                canopy: 1e3,
                bay_door_l_a: 500,
                bay_door_l_b: 500,
                bay_door_r_a: 500,
                bay_door_r_b: 500,
                Rear_Wing_Left: 2e3,
                Rear_Wing_Right: 2e3,
                Front_Wing_Left: 2e3,
                Wing_Left: 2e3,
                Front_Wing_Right: 2e3,
                Wing_Right: 2e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 14500,
                engine_right: 14500
            },
            Retro: {
                thruster_retro_left: 13450,
                thruster_retro_right: 13450
            },
            Maneuvering: {
                thruster_bottomRR: 12750,
                thruster_bottomRL: 12750,
                thruster_bottomFL: 12750,
                thruster_bottomFR: 12750,
                thruster_topFL: 12750,
                thruster_topFR: 12750,
                thruster_topRR: 12750,
                thruster_topRL: 12750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 206,
        MaxSpeed: 1235,
        Pitch: 55,
        Yaw: 55,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 88e5,
            Retro: 18e5,
            Vtol: 0,
            Maneuvering: 57251764e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12,
            Retro: 4.2,
            Strafe: 8.5,
            Up: 9,
            Down: 4.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1100,
            Retro: 225,
            Vtol: 0,
            Maneuvering: 715.647
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3992,
            SCMActive: 4558,
            NAV: 8512
        },
        Infrared: {
            Start: 4759
        },
        CrossSection: {
            Front: 1414,
            Side: 3880,
            Top: 3331
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 2182,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 11606
    },
    Insurance: {
        StandardClaimTime: 9.45,
        ExpeditedClaimTime: 3.15,
        ExpeditedCost: 4689
    },
    Buy: {
        "New Deal, Lorville": 4498200
    }
}, {
    ClassName: "AEGS_Sabre_Comet",
    Name: "Aegis Sabre Comet",
    Description: "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Comet pays tribute to famed pilot Captain Kamur Dalion for his work with Aegis to usher in a new era of combat ship design. This Sabre comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.",
    Career: "Combat",
    Role: "Stealth Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 86592.72,
    ComponentsMass: 3039,
    Dimensions: {
        Length: 24,
        Width: 26,
        Height: 5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 4e3,
                Body: 4e3
            },
            Parts: {
                canopy: 1e3,
                bay_door_l_a: 500,
                bay_door_l_b: 500,
                bay_door_r_a: 500,
                bay_door_r_b: 500,
                Rear_Wing_Left: 2e3,
                Rear_Wing_Right: 2e3,
                Front_Wing_Left: 2e3,
                Wing_Left: 2e3,
                Front_Wing_Right: 2e3,
                Wing_Right: 2e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 14500,
                engine_right: 14500
            },
            Retro: {
                thruster_retro_left: 13450,
                thruster_retro_right: 13450
            },
            Maneuvering: {
                thruster_bottomRR: 12750,
                thruster_bottomRL: 12750,
                thruster_bottomFL: 12750,
                thruster_bottomFR: 12750,
                thruster_topFL: 12750,
                thruster_topFR: 12750,
                thruster_topRR: 12750,
                thruster_topRL: 12750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 206,
        MaxSpeed: 1235,
        Pitch: 55,
        Yaw: 55,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 88e5,
            Retro: 18e5,
            Vtol: 0,
            Maneuvering: 57251764e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12,
            Retro: 4.2,
            Strafe: 8.5,
            Up: 9,
            Down: 4.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1100,
            Retro: 225,
            Vtol: 0,
            Maneuvering: 715.647
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3746,
            SCMActive: 4343,
            NAV: 8266
        },
        Infrared: {
            Start: 4981
        },
        CrossSection: {
            Front: 1414,
            Side: 3880,
            Top: 3331
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 2018,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 11606
    },
    Insurance: {
        StandardClaimTime: 9.45,
        ExpeditedClaimTime: 3.15,
        ExpeditedCost: 4689
    },
    Buy: {
        "New Deal, Lorville": 4895100
    }
}, {
    ClassName: "AEGS_Sabre_Firebird",
    Name: "Aegis Sabre Firebird",
    Description: "When frontline skirmishes call for a swift and decisive offensive, the Sabre Firebird is the ideal medium fighter for any arsenal. Taking the already battle proven Sabre Raven, Aegis has designed the Firebird variant with an enhanced missile launcher capable of engaging with a wide array of threats.",
    Career: "Combat",
    Role: "Stealth Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 75592.72,
    ComponentsMass: 5015,
    Dimensions: {
        Length: 26,
        Width: 30,
        Height: 3.8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2500
            },
            Parts: {
                wing_left: 2e3,
                wing_left_aileron_mesh: 1e3,
                wing_right: 2e3,
                wing_right_aileron_mesh: 1e3,
                tail: 2500,
                AEGS_Sabre_Firebird_winglet_right_debris: 500,
                AEGS_Sabre_Firebird_winglet_left_debris: 500,
                nose: 2500,
                canopy: 1e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 14500
            },
            Retro: {
                thruster_retro_left: 13450,
                thruster_retro_right: 13450
            },
            Maneuvering: {
                thruster_bottomFL: 12750,
                thruster_bottomFR: 12750,
                thruster_bottomRL: 12750,
                thruster_bottomRR: 12750,
                thruster_sideRL: 12750,
                thruster_sideRR: 12750,
                thruster_topFL: 12750,
                thruster_topFR: 12750,
                thruster_topRL: 12750,
                thruster_topRR: 12750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 240,
        MaxSpeed: 1400,
        Pitch: 50,
        Yaw: 42,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 9259129,
            Retro: 28e4,
            Vtol: 0,
            Maneuvering: 88919408e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 14.7,
            Retro: 3.4,
            Strafe: 4.4,
            Up: 5.8,
            Down: 3.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 600,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.7,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .4,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 1157.391,
            Retro: 35,
            Vtol: 0,
            Maneuvering: 1111.492
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3189,
            SCMActive: 3838,
            NAV: 7709
        },
        Infrared: {
            Start: 3728
        },
        CrossSection: {
            Front: 1414,
            Side: 3880,
            Top: 3331
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 1013,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 78633
    },
    Insurance: {
        StandardClaimTime: 7.56,
        ExpeditedClaimTime: 2.52,
        ExpeditedCost: 3934
    },
    "New Ship": "Aegis Sabre Firebird",
    Buy: {
        "New Deal, Lorville": 5874120
    }
}, {
    ClassName: "AEGS_Sabre_Peregrine",
    Name: "Aegis Sabre Peregrine",
    Description: "After seeing what fans of the Sabre Raven were able to accomplish with the fighter on the racetrack, the design team at Aegis Dynamics were inspired to craft an official racing variant for the agile ship. Enter the Sabre Peregrine. Streamlined and featuring additional thruster boosts, this nimble bird is ready to fly across the finish line.",
    Career: "Competition",
    Role: "Racing",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 75592.72,
    ComponentsMass: 1589,
    Dimensions: {
        Length: 26,
        Width: 30,
        Height: 3.8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .59,
            Energy: 1.18,
            Distortion: 1.18
        },
        SignalMultipliers: {
            Electromagnetic: 1.051,
            Infrared: 1.051,
            CrossSection: 1.051
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2400
            },
            Parts: {
                nose: 2400,
                canopy: 1e3,
                peregrine_rear_wing_l_bottom: 500,
                peregrine_rear_wing_l_top: 500,
                peregrine_rear_wing_r_bottom: 500,
                peregrine_rear_wing_r_top: 500,
                tail: 1e3,
                wing_front_flap_left: 100,
                wing_front_flap_right: 100,
                wing_left: 2e3,
                wing_left_aileron_mesh_a: 75,
                wing_left_aileron_mesh_b: 75,
                wing_flap_left_rear: 100,
                wing_right: 2e3,
                wing_right_aileron_mesh_b: 100,
                wing_right_aileron_mesh_a: 100,
                wing_flap_right_rear: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 14500
            },
            Retro: {
                thruster_retro_left: 13450,
                thruster_retro_right: 13450
            },
            Maneuvering: {
                thruster_bottomFL: 12750,
                thruster_bottomFR: 12750,
                thruster_bottomRL: 12750,
                thruster_bottomRR: 12750,
                thruster_sideRL: 12750,
                thruster_sideRR: 12750,
                thruster_topFL: 12750,
                thruster_topFR: 12750,
                thruster_topRL: 12750,
                thruster_topRR: 12750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 267,
        MaxSpeed: 1447,
        Pitch: 61,
        Yaw: 51,
        Roll: 187,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 10595e3,
            Retro: 35e4,
            Vtol: 0,
            Maneuvering: 11596e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.9,
            Retro: 3.5,
            Strafe: 5.2,
            Up: 6.8,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 655,
                BoostSpeedBackward: 277
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.79,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.23,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .4,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 1324.375,
            Retro: 43.75,
            Vtol: 0,
            Maneuvering: 1449.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5229,
            SCMActive: 6265,
            NAV: 13146
        },
        Infrared: {
            Start: 5821
        },
        CrossSection: {
            Front: 2477,
            Side: 6797,
            Top: 5834
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.56,
        ExpeditedClaimTime: 2.52,
        ExpeditedCost: 3934
    },
    "New Ship": "Aegis Sabre Peregrine"
}, {
    ClassName: "AEGS_Sabre_Raven",
    Name: "Aegis Sabre Raven",
    Description: "Aegis Dynamics have raised the bar yet again with their Raven variant, maintaining all the speed and maneuverability of its Sabre forebear, but with a lower ship signature, making it a fast, stealthy infiltrator.",
    Career: "Combat",
    Role: "Interceptor",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 70811.32,
    ComponentsMass: 2539,
    Dimensions: {
        Length: 24,
        Width: 20.5,
        Height: 5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2500
            },
            Parts: {
                nose: 2500,
                canopy: 1e3,
                tail: 2500,
                wing_left: 2e3,
                wing_right: 2e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 14500
            },
            Retro: {
                thruster_retro_left: 13450,
                thruster_retro_right: 13450
            },
            Maneuvering: {
                thruster_bottomFL: 12750,
                thruster_bottomFR: 12750,
                thruster_bottomRL: 12750,
                thruster_bottomRR: 12750,
                thruster_sideRL: 12750,
                thruster_sideRR: 12750,
                thruster_topFL: 12750,
                thruster_topFR: 12750,
                thruster_topRL: 12750,
                thruster_topRR: 12750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 240,
        MaxSpeed: 1400,
        Pitch: 50,
        Yaw: 42,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 9136699,
            Retro: 65e4,
            Vtol: 0,
            Maneuvering: 10975948
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15,
            Retro: 3.4,
            Strafe: 4.5,
            Up: 6,
            Down: 3.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 600,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.7,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .4,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 1142.087,
            Retro: 81.25,
            Vtol: 0,
            Maneuvering: 1371.994
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4488,
            SCMActive: 6660,
            NAV: 9008
        },
        Infrared: {
            Start: 4163
        },
        CrossSection: {
            Front: 1129,
            Side: 3297,
            Top: 4517
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 1094,
        TurretsBurstDPS: 0,
        TotalEMPDmg: 5500,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.56,
        ExpeditedClaimTime: 2.52,
        ExpeditedCost: 3934
    }
}, {
    ClassName: "AEGS_Vanguard",
    Name: "Aegis Vanguard Warden",
    Description: "A hard-charging bulldog of a fighter which features extensive forward-mounted weaponry designed to tear through the shields and armor of other spacecraft. So-named because their multiple-jump range allows them to form the vanguard of any military expedition, Vanguards have seen extensive service against the Vanduul.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 244270.26,
    ComponentsMass: 7522,
    Dimensions: {
        Length: 48,
        Width: 40,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .43,
            Energy: .93,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.334,
            Infrared: 1.334,
            CrossSection: 1.334
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 7500,
                Body: 7500
            },
            Parts: {
                Arm_Right: 200,
                Arm_Left: 200,
                Engine_R: 7500,
                Tail_Fin_Right_Upper: 250,
                Tail_Fin_Right_Lower: 250,
                Wing_Right_Geo: 800,
                Wing_Right_Flaps_Geo: 600,
                Engine_L: 7500,
                Tail_Fin_Left_Upper: 250,
                Tail_Fin_Left_Lower: 250,
                Wing_Left_Geo: 800,
                Wing_Left_Flaps_Geo: 600,
                Wing_Back_Right: 1800,
                Wing_Back_Left: 1800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 16500,
                engine_middle_right: 16500,
                engine_left: 16500,
                engine_middle_left: 16500
            },
            Retro: {
                thruster_retro_right: 15250,
                thruster_retro_left: 15250
            },
            Maneuvering: {
                thruster_top_FR: 14350,
                thruster_bottom_FR: 14350,
                thruster_bottom_RR: 14350,
                thruster_top_RR: 14350,
                thruster_side_RR: 14350,
                thruster_side_RL: 14350,
                thruster_bottom_FL: 14350,
                thruster_top_RL: 14350,
                thruster_top_FL: 14350,
                thruster_bottom_RL: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1111,
        Pitch: 40,
        Yaw: 33,
        Roll: 124,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 22811216,
            Retro: 8683966,
            Vtol: 0,
            Maneuvering: 39005550
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.2,
            Retro: 3.5,
            Strafe: 7.7,
            Up: 7.1,
            Down: 4.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 458,
                BoostSpeedBackward: 223
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 405e5,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 2851.402,
            Retro: 1085.496,
            Vtol: 0,
            Maneuvering: 4875.694
        },
        IntakeToMainFuelRatio: 1.75,
        TimeForIntakesToFillTank: 81e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 21086,
            SCMActive: 26140,
            NAV: 41737
        },
        Infrared: {
            Start: 15653
        },
        CrossSection: {
            Front: 4541,
            Side: 22706,
            Top: 21750
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 9480,
        PilotBurstDPS: 3527,
        TurretsBurstDPS: 900,
        TotalMissilesDmg: 29222
    },
    Insurance: {
        StandardClaimTime: 18.22,
        ExpeditedClaimTime: 6.07,
        ExpeditedCost: 9113
    },
    Buy: {
        "New Deal, Lorville": 10319400
    }
}, {
    ClassName: "AEGS_Vanguard_Harbinger",
    Name: "Aegis Vanguard Harbinger",
    Description: "The Vanguard Harbinger is Earth's standard fighter/bomber, converting the standard Warden's escape pod into a potent bomb bay. The extended range of the Vanguard and the relatively small profile mean that it can go where carrier-based ships or larger strategic bombers don't, strike hard, and then make it back to base.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 236604,
    ComponentsMass: 8591,
    Dimensions: {
        Length: 48,
        Width: 40,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .97,
            Distortion: .93
        },
        SignalMultipliers: {
            Electromagnetic: 1.268,
            Infrared: 1.268,
            CrossSection: 1.268
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 7500,
                Body: 7500
            },
            Parts: {
                Arm_Right: 200,
                Arm_Left: 200,
                Engine_R: 7500,
                Tail_Fin_Right_Upper: 250,
                Tail_Fin_Right_Lower: 250,
                Wing_Right_Geo: 800,
                Wing_Right_Flaps_Geo: 600,
                Engine_L: 7500,
                Tail_Fin_Left_Upper: 250,
                Tail_Fin_Left_Lower: 250,
                Wing_Left_Geo: 800,
                Wing_Left_Flaps_Geo: 600,
                Wing_Back_Right: 1800,
                Wing_Back_Left: 1800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 16500,
                engine_middle_right: 16500,
                engine_left: 16500,
                engine_middle_left: 16500
            },
            Retro: {
                thruster_retro_right: 15250,
                thruster_retro_left: 15250
            },
            Maneuvering: {
                thruster_top_FR: 14350,
                thruster_bottom_FR: 14350,
                thruster_bottom_RR: 14350,
                thruster_top_RR: 14350,
                thruster_side_RR: 14350,
                thruster_side_RL: 14350,
                thruster_bottom_FL: 14350,
                thruster_top_RL: 14350,
                thruster_top_FL: 14350,
                thruster_bottom_RL: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 219,
        MaxSpeed: 1115,
        Pitch: 38,
        Yaw: 32,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 22692450,
            Retro: 8447358,
            Vtol: 0,
            Maneuvering: 36770460
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.3,
            Retro: 3.4,
            Strafe: 7.4,
            Up: 7,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 466,
                BoostSpeedBackward: 226
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 39e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 2836.556,
            Retro: 1055.92,
            Vtol: 0,
            Maneuvering: 4596.308
        },
        IntakeToMainFuelRatio: 1.76,
        TimeForIntakesToFillTank: 78e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 20846,
            SCMActive: 30342,
            NAV: 41e3
        },
        Infrared: {
            Start: 14010
        },
        CrossSection: {
            Front: 4506,
            Side: 22530,
            Top: 21580
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 8820,
        PilotBurstDPS: 3327,
        TurretsBurstDPS: 300,
        TotalMissilesDmg: 80497
    },
    Insurance: {
        StandardClaimTime: 16.39,
        ExpeditedClaimTime: 5.46,
        ExpeditedCost: 8383
    },
    Buy: {
        "New Deal, Lorville": 11510100
    }
}, {
    ClassName: "AEGS_Vanguard_Hoplite",
    Name: "Aegis Vanguard Hoplite",
    Description: "The Vanguard Hoplite is a cross between the winning Vanguard deep space fighter and a dedicated boarding ship. Adapted from proven assault ship designs, the Hoplite is the perfect tool for inserting an armored strike team with enough firepower to get them out again.",
    Career: "Combat",
    Role: "Drop Ship",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 234870,
    ComponentsMass: 7006,
    Dimensions: {
        Length: 48,
        Width: 40,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: .93,
            Distortion: .97
        },
        SignalMultipliers: {
            Electromagnetic: 1.134,
            Infrared: 1.134,
            CrossSection: 1.134
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 31500,
                Body: 8e3
            },
            Parts: {
                Arm_Right: 200,
                Arm_Left: 200,
                Engine_R: 7500,
                Tail_Fin_Right_Upper: 250,
                Tail_Fin_Right_Lower: 250,
                Wing_Right_Geo: 2e3,
                Wing_Right_Flaps_Geo: 1200,
                Engine_L: 7500,
                Tail_Fin_Left_Upper: 250,
                Tail_Fin_Left_Lower: 250,
                Wing_Left_Geo: 2e3,
                Wing_Left_Flaps_Geo: 1200,
                Wing_Back_Right: 3500,
                Wing_Back_Left: 3500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 16500,
                engine_middle_right: 16500,
                engine_left: 16500,
                engine_middle_left: 16500
            },
            Retro: {
                thruster_retro_right: 15250,
                thruster_retro_left: 15250
            },
            Maneuvering: {
                thruster_top_FR: 14350,
                thruster_bottom_FR: 14350,
                thruster_bottom_RR: 14350,
                thruster_top_RR: 14350,
                thruster_side_RR: 14350,
                thruster_side_RL: 14350,
                thruster_bottom_FL: 14350,
                thruster_top_RL: 14350,
                thruster_top_FL: 14350,
                thruster_bottom_RL: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 209,
        MaxSpeed: 1115,
        Pitch: 35,
        Yaw: 30,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 22370806,
            Retro: 5960564,
            Vtol: 0,
            Maneuvering: 20340350
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.3,
            Retro: 2.5,
            Strafe: 4.2,
            Up: 4.6,
            Down: 5.3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 435,
                BoostSpeedBackward: 246
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 39e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 2796.351,
            Retro: 745.07,
            Vtol: 0,
            Maneuvering: 2542.544
        },
        IntakeToMainFuelRatio: 1.79,
        TimeForIntakesToFillTank: 78e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 15995,
            SCMActive: 20479,
            NAV: 33549
        },
        Infrared: {
            Start: 12286
        },
        CrossSection: {
            Front: 3687,
            Side: 18433,
            Top: 17658
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 9480,
        PilotBurstDPS: 3507,
        TurretsBurstDPS: 900,
        TotalMissilesDmg: 19117
    },
    Insurance: {
        StandardClaimTime: 13.25,
        ExpeditedClaimTime: 4.42,
        ExpeditedCost: 6603
    },
    Buy: {
        "New Deal, Lorville": 9327150
    }
}, {
    ClassName: "AEGS_Vanguard_Sentinel",
    Name: "Aegis Vanguard Sentinel",
    Description: "The Vanguard Sentinel is a ship that's designed to fight smart instead of taking enemies head on. The conversion features an AR cockpit, an external e-War pod, decoy missiles and a set of EMP charges. Vanguard Sentinels often provide necessary combat support for combined operations. A lone Sentinel is frequently paired with Harbinger bombers and Warden escorts for large attack missions.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 232170,
    ComponentsMass: 9257,
    Dimensions: {
        Length: 48,
        Width: 40,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .93,
            Distortion: .93
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 10170,
                Body: 10170
            },
            Parts: {
                Arm_Right: 200,
                Arm_Left: 200,
                Engine_R: 10170,
                Tail_Fin_Right_Upper: 250,
                Tail_Fin_Right_Lower: 250,
                Wing_Right_Geo: 800,
                Wing_Right_Flaps_Geo: 600,
                Engine_L: 10170,
                Tail_Fin_Left_Upper: 250,
                Tail_Fin_Left_Lower: 250,
                Wing_Left_Geo: 800,
                Wing_Left_Flaps_Geo: 600,
                Wing_Back_Right: 1800,
                Wing_Back_Left: 1800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 16500,
                engine_middle_right: 16500,
                engine_left: 16500,
                engine_middle_left: 16500
            },
            Retro: {
                thruster_retro_right: 15250,
                thruster_retro_left: 15250
            },
            Maneuvering: {
                thruster_top_FR: 14350,
                thruster_bottom_FR: 14350,
                thruster_bottom_RR: 14350,
                thruster_top_RR: 14350,
                thruster_side_RR: 14350,
                thruster_side_RL: 14350,
                thruster_bottom_FL: 14350,
                thruster_top_RL: 14350,
                thruster_top_FL: 14350,
                thruster_bottom_RL: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 217,
        MaxSpeed: 1111,
        Pitch: 40,
        Yaw: 34,
        Roll: 126,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 22188418,
            Retro: 8346074,
            Vtol: 0,
            Maneuvering: 38221760
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.2,
            Retro: 3.4,
            Strafe: 7.8,
            Up: 7.2,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 462,
                BoostSpeedBackward: 224
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 39e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 2773.552,
            Retro: 1043.259,
            Vtol: 0,
            Maneuvering: 4777.72
        },
        IntakeToMainFuelRatio: 1.8,
        TimeForIntakesToFillTank: 78e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 18885,
            SCMActive: 25604,
            NAV: 34365
        },
        Infrared: {
            Start: 12534
        },
        CrossSection: {
            Front: 3289,
            Side: 16444,
            Top: 15751
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 7020,
        PilotBurstDPS: 2865,
        TurretsBurstDPS: 405,
        TotalEMPDmg: 3300,
        TotalMissilesDmg: 29222
    },
    Insurance: {
        StandardClaimTime: 18.22,
        ExpeditedClaimTime: 6.07,
        ExpeditedCost: 9113
    },
    Buy: {
        "New Deal, Lorville": 10914750
    }
}, {
    ClassName: "ANVL_Arrow",
    Name: "Anvil Arrow",
    Description: "Unmatched design, blazing top speed, and ultra-responsive maneuverability make the Arrow the most agile scrapper in its class. With a robust weapons package that provides firepower to spare, this is truly the classic light fighter, updated for the next generation of combat.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 32310,
    ComponentsMass: 3352,
    Dimensions: {
        Length: 16,
        Width: 12,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 2e3,
                body: 2e3
            },
            Parts: {
                canopy: 80,
                wing_left: 1500,
                wing_right: 1500,
                stabilizer_left: 800,
                stabilizer_right: 800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main: 11250
            },
            Retro: {
                thruster_retro_right: 10560,
                thruster_retro_left: 10560
            },
            Maneuvering: {
                thruster_mav_rear_bottom_right: 9750,
                thruster_mav_front_top_right: 9750,
                thruster_mav_rear_top_right: 9750,
                thruster_mav_front_bottom_left: 9750,
                thruster_mav_rear_bottom_left: 9750,
                thruster_mav_front_top_left: 9750,
                thruster_mav_rear_top_left: 9750,
                thruster_mav_front_bottom_right: 9750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 232,
        MaxSpeed: 1210,
        Pitch: 74,
        Yaw: 55,
        Roll: 189,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 44e5,
            Retro: 153e4,
            Vtol: 0,
            Maneuvering: 348e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.3,
            Retro: 4.6,
            Strafe: 10.2,
            Up: 10.2,
            Down: 5.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 515,
                BoostSpeedBackward: 265
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 75e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 550,
            Retro: 191.25,
            Vtol: 0,
            Maneuvering: 435
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5240,
            SCMActive: 6022,
            NAV: 12773
        },
        Infrared: {
            Start: 6038
        },
        CrossSection: {
            Front: 1910,
            Side: 5647,
            Top: 7473
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1730,
        PilotBurstDPS: 1494,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14337
    },
    Insurance: {
        StandardClaimTime: 5.27,
        ExpeditedClaimTime: 1.76,
        ExpeditedCost: 3121
    },
    Buy: {
        "Astro Armada, Area 18": 1984500
    }
}, {
    ClassName: "ANVL_Ballista",
    Name: "Anvil Ballista",
    Description: "Keep your airspace clear of danger with the Anvil Ballista. Originally designed to defend outposts from Vanduul attacks, this mobile missile defense system packs a powerful loadout, allowing the Ballista to stand firm against any threat, whether it arrives by air or land.",
    Career: "Ground",
    Role: "Ground",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.11
    },
    Crew: 2,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 76816,
    ComponentsMass: 4020,
    Dimensions: {
        Length: 17,
        Width: 7,
        Height: 5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1e4,
                body: 1e4
            },
            Parts: {
                hardpoint_wheel_front_left01: 1700,
                hardpoint_wheel_front_left02: 1700,
                hardpoint_wheel_front_right01: 1700,
                hardpoint_wheel_front_right02: 1700,
                hardpoint_wheel_back_left01: 1700,
                hardpoint_wheel_back_left02: 1700,
                hardpoint_wheel_back_right01: 1700,
                hardpoint_wheel_back_right02: 1700
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 100,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 115
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2041,
            SCMActive: 3145,
            NAV: 0
        },
        Infrared: {
            Start: 1745
        },
        CrossSection: {
            Front: 1377,
            Side: 1885,
            Top: 3338
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1090,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 677,
        TotalMissilesDmg: 320185
    },
    Insurance: {
        StandardClaimTime: 6.19,
        ExpeditedClaimTime: 2.06,
        ExpeditedCost: 8073
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "Astro Armada, Area 18": 1481760,
        "New Deal, Lorville": 1481760
    }
}, {
    ClassName: "ANVL_C8R_Pisces",
    Name: "Anvil C8R Pisces Rescue",
    Description: "With the addition of an onboard Tier 3 Medical Bed, the C8R Pisces can treat minor injuries and keep a patient stable while transporting them to the safety of a larger ship, station, or nearby medical facility, making it an invaluable asset for short-range search and rescue.",
    Career: "Support",
    Role: "Medical",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .12,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 1798.2,
    Dimensions: {
        Length: 13,
        Width: 10,
        Height: 3.25
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 4500
            },
            Parts: {
                Canopy: 250,
                Body_underpanels_Left: 250,
                Body_underpanels_Right: 250,
                Wing_Left: 250,
                Wing_Left_Debris: 250,
                Wing_Right: 250,
                Wing_Right_Debris: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 8e3,
                thruster_main_left: 8e3
            },
            Retro: {
                thruster_retro_right: 7e3,
                thruster_retro_left: 7e3
            },
            Maneuvering: {
                thruster_rear_top_right: 5500,
                thruster_rear_top_left: 5500,
                thruster_rear_side_right: 6500,
                thruster_rear_side_left: 6500,
                thruster_rear_bottom_right: 5500,
                thruster_rear_bottom_left: 5500,
                thruster_front_top_right: 5500,
                thruster_front_top_left: 5500,
                thruster_front_side_right: 6500,
                thruster_front_side_left: 6500,
                thruster_front_bottom_right: 5500,
                thruster_front_bottom_left: 5500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 56,
        Roll: 142,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 38e5,
            Retro: 12e5,
            Vtol: 0,
            Maneuvering: 1e7
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.9,
            Retro: 2.4,
            Strafe: 4.4,
            Up: 6.2,
            Down: 5.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 460,
                BoostSpeedBackward: 300
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 5225e4,
        FuelIntakeRate: 12,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 475,
            Retro: 150,
            Vtol: 0,
            Maneuvering: 1250
        },
        IntakeToMainFuelRatio: 2.53,
        TimeForIntakesToFillTank: 435416667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4781,
            SCMActive: 5634,
            NAV: 12314
        },
        Infrared: {
            Start: 5242
        },
        CrossSection: {
            Front: 1778,
            Side: 5489,
            Top: 6958
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1280,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 4.59,
        ExpeditedClaimTime: 1.53,
        ExpeditedCost: 2301
    },
    Buy: {
        "Astro Armada, Area 18": 555660
    }
}, {
    ClassName: "ANVL_C8X_Pisces_Expedition",
    Name: "Anvil C8X Pisces Expedition",
    Description: "Sporting more guns and a limited-edition livery, the C8X Pisces Expedition turns the stout snub into a perfectly viable standalone exploration vessel. With its compact frame, deft maneuverability, and seating for three, the Pisces Expedition is ready to take on its own adventures.",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 1,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 2115,
    Dimensions: {
        Length: 13,
        Width: 10,
        Height: 3.25
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 4500
            },
            Parts: {
                Canopy: 250,
                Body_underpanels_Left: 250,
                Body_underpanels_Right: 250,
                Wing_Left: 250,
                Wing_Left_Debris: 250,
                Wing_Right: 250,
                Wing_Right_Debris: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 8e3,
                thruster_main_left: 8e3
            },
            Retro: {
                thruster_retro_right: 7e3,
                thruster_retro_left: 7e3
            },
            Maneuvering: {
                thruster_rear_top_right: 5500,
                thruster_rear_top_left: 5500,
                thruster_rear_side_right: 6500,
                thruster_rear_side_left: 6500,
                thruster_rear_bottom_right: 5500,
                thruster_rear_bottom_left: 5500,
                thruster_front_top_right: 5500,
                thruster_front_top_left: 5500,
                thruster_front_side_right: 6500,
                thruster_front_side_left: 6500,
                thruster_front_bottom_right: 5500,
                thruster_front_bottom_left: 5500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 60,
        Yaw: 60,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 38e5,
            Retro: 12e5,
            Vtol: 0,
            Maneuvering: 1e7
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.9,
            Retro: 2.4,
            Strafe: 4.4,
            Up: 6.2,
            Down: 5.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 460,
                BoostSpeedBackward: 300
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 5225e4,
        FuelIntakeRate: 12,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 475,
            Retro: 150,
            Vtol: 0,
            Maneuvering: 1250
        },
        IntakeToMainFuelRatio: 2.53,
        TimeForIntakesToFillTank: 435416667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5183,
            SCMActive: 6036,
            NAV: 12716
        },
        Infrared: {
            Start: 5638
        },
        CrossSection: {
            Front: 1909,
            Side: 5893,
            Top: 7470
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1280,
        PilotBurstDPS: 848,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 3.36,
        ExpeditedClaimTime: 1.12,
        ExpeditedCost: 1806
    },
    Buy: {
        "Astro Armada, Area 18": 515970
    }
}, {
    ClassName: "ANVL_C8_Pisces",
    Name: "Anvil C8 Pisces",
    Description: "With its compact frame, deft maneuverability, and seating for three, the C8 Pisces snub craft, included with every Carrack, is built by Anvil Aerospace for scouting ahead or exploring environments inaccessible to its larger carrier ship. ",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 1,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 1785,
    Dimensions: {
        Length: 13,
        Width: 10,
        Height: 3.25
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 4500
            },
            Parts: {
                Canopy: 250,
                Body_underpanels_Left: 250,
                Body_underpanels_Right: 250,
                Wing_Left: 250,
                Wing_Left_Debris: 250,
                Wing_Right: 250,
                Wing_Right_Debris: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 8e3,
                thruster_main_left: 8e3
            },
            Retro: {
                thruster_retro_right: 7e3,
                thruster_retro_left: 7e3
            },
            Maneuvering: {
                thruster_rear_top_right: 5500,
                thruster_rear_top_left: 5500,
                thruster_rear_side_right: 6500,
                thruster_rear_side_left: 6500,
                thruster_rear_bottom_right: 5500,
                thruster_rear_bottom_left: 5500,
                thruster_front_top_right: 5500,
                thruster_front_top_left: 5500,
                thruster_front_side_right: 6500,
                thruster_front_side_left: 6500,
                thruster_front_bottom_right: 5500,
                thruster_front_bottom_left: 5500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 60,
        Yaw: 60,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 38e5,
            Retro: 12e5,
            Vtol: 0,
            Maneuvering: 1e7
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.9,
            Retro: 2.4,
            Strafe: 4.4,
            Up: 6.2,
            Down: 5.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 460,
                BoostSpeedBackward: 300
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 5225e4,
        FuelIntakeRate: 12,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 475,
            Retro: 150,
            Vtol: 0,
            Maneuvering: 1250
        },
        IntakeToMainFuelRatio: 2.53,
        TimeForIntakesToFillTank: 435416667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4781,
            SCMActive: 5634,
            NAV: 12314
        },
        Infrared: {
            Start: 5578
        },
        CrossSection: {
            Front: 1835,
            Side: 5664,
            Top: 7180
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1280,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 3.36,
        ExpeditedClaimTime: 1.12,
        ExpeditedCost: 1806
    },
    Buy: {
        "Astro Armada, Area 18": 745290
    }
}, {
    ClassName: "ANVL_Carrack",
    Name: "Anvil Carrack",
    Description: "Adventure calls and Anvil Aerospace answers with the Carrack. Built to endure extreme conditions in both space and atmosphere, this self-sustaining explorer has more than earned its long-standing status as the go-to pathfinder for both military and civilian service. ",
    Career: "Exploration",
    Role: "Expedition",
    Size: 5,
    Cargo: {
        CargoGrid: 456,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 8.92
    },
    Crew: 6,
    WeaponCrew: 4,
    OperationsCrew: 0,
    Mass: 4397858,
    ComponentsMass: 20510,
    Dimensions: {
        Length: 126.5,
        Width: 76.5,
        Height: 30
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                middle: 7e4
            },
            Parts: {
                rear: 3e3,
                Wings_L: 5e3,
                Wings_R: 5e3,
                front: 5e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left_large: 3e4,
                thruster_main_left_small: 27500,
                thruster_main_right_large: 3e4,
                thruster_main_right_small: 27500
            },
            Retro: {
                thruster_retro_back: 28950,
                thruster_retro_forward: 28950
            },
            Vtol: {
                thruster_vtol_rear_left: 28950,
                thruster_vtol_rear_right: 28950,
                thruster_vtol_front_left: 28950,
                thruster_vtol_front_right: 28950
            },
            Maneuvering: {
                thruster_bottom_rear_left: 25500,
                thruster_bottom_rear_right: 25500,
                thruster_side_rear_left: 25500,
                thruster_side_rear_right: 25500,
                thruster_top_rear_left: 25500,
                thruster_top_rear_right: 25500,
                thruster_bottom_front_left: 25500,
                thruster_bottom_front_right: 25500,
                thruster_side_front_left: 25500,
                thruster_side_front_right: 25500,
                thruster_top_front_left: 25500,
                thruster_top_front_right: 25500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 140,
        MaxSpeed: 1050,
        Pitch: 16,
        Yaw: 16,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1666e5,
            Retro: 665e5,
            Vtol: 372e5,
            Maneuvering: 1764e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.8,
            Retro: 1.5,
            Strafe: 1.1,
            Up: 2,
            Down: 1.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 315,
                BoostSpeedBackward: 160
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: 1.3,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 36e7,
        FuelIntakeRate: 800,
        QuantumFuelCapacity: 106e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 20825,
            Retro: 8312.5,
            Vtol: 4650,
            Maneuvering: 22050
        },
        IntakeToMainFuelRatio: 3.84,
        TimeForIntakesToFillTank: 45e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 21688,
            SCMActive: 25066,
            NAV: 37135
        },
        Infrared: {
            Start: 20757
        },
        CrossSection: {
            Front: 10428,
            Side: 26620,
            Top: 44e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 112200,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 6543,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 48.3,
        ExpeditedClaimTime: 16.1,
        ExpeditedCost: 19595
    },
    Buy: {
        "Astro Armada, Area 18": 34398e3
    }
}, {
    ClassName: "ANVL_Centurion",
    Name: "Anvil Centurion",
    Description: "Built on Anvil's popular Atlas Platform, the Centurion presents a tactical solution for short-range anti-aircraft operations. Thanks to the Centurion’s custom energy-based AA turret, your forces can establish ground superiority by assuring immediate threats from above are dealt with quickly and efficiently.",
    Career: "Ground",
    Role: "Ground",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.11
    },
    Crew: 2,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 77016,
    ComponentsMass: 2052,
    Dimensions: {
        Length: 17,
        Width: 7,
        Height: 5.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .3,
            Infrared: .4,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1e4,
                body: 1e4
            },
            Parts: {
                hardpoint_wheel_left01: 1700,
                hardpoint_wheel_left02: 1700,
                hardpoint_wheel_left03: 1700,
                hardpoint_wheel_left04: 1700,
                hardpoint_wheel_right01: 1700,
                hardpoint_wheel_right02: 1700,
                hardpoint_wheel_right03: 1700,
                hardpoint_wheel_right04: 1700
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 100,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 115
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 771,
            SCMActive: 1059,
            NAV: 0
        },
        Infrared: {
            Start: 1263
        },
        CrossSection: {
            Front: 2193,
            Side: 1903,
            Top: 2053
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1348,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 4058,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.56,
        ExpeditedClaimTime: 2.52,
        ExpeditedCost: 5920
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "Astro Armada, Area 18": 1164240,
        "New Deal, Lorville": 1164240
    }
}, {
    ClassName: "ANVL_Gladiator",
    Name: "Anvil Gladiator",
    Description: "The civilian model of the Gladiator appeals to those that want to explore the ‘verse with a bit of added security. Supporting a maximum of two, the Gladiator is perfectly equipped to explore and fight with or without a wingman. The Civilian model allows pilots to choose between an extra cargo hold or a bomb bay.",
    Career: "Combat",
    Role: "Bomber",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.29,
        PersonalInventory: 1.29
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 88408,
    ComponentsMass: 6502,
    Dimensions: {
        Length: 22.5,
        Width: 22.5,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 5500,
                body: 5500
            },
            Parts: {
                shield_generator_cover: 40,
                cockpitbay_outerdoor_left: 100,
                cockpitbay_outerdoor_right: 100,
                canopy: 7500,
                canopy_glass: 250,
                amunition_hatch_right: 40,
                amunition_hatch_left: 40,
                engine_cover_left: 40,
                engine_cover_right: 40,
                sidefin_left: 40,
                tailfin_left: 800,
                tailfin_left_rudder: 40,
                sidefin_right: 40,
                tailfin_right: 800,
                tailfin_right_rudder: 40,
                tail: 200,
                wing_right: 800,
                wing_right_tip: 300,
                wing_flap_side_right: 160,
                wing_flap_main_right: 160,
                cockpitbay_gunnerdoor: 40,
                hull_avionicsaccess_panel: 40,
                hull_fuelaccess_panel_left: 40,
                hull_fuelaccess_panel_right: 40,
                bombbay_outerdoor_left: 60,
                bombbay_outerdoor_right: 600,
                core_bottomshield: 400,
                core_topshield: 200,
                wing_left: 800,
                wing_left_tip: 300,
                wing_flap_side_left: 160,
                wing_flap_main_left: 160
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 8500,
                engine_right: 8500
            },
            Retro: {
                thruster_top_front_left: 7256,
                thruster_top_front_right: 7256
            },
            Maneuvering: {
                thruster_top_back_right: 6980,
                thruster_top_back_left: 6980,
                thruster_bottom_back_left: 6980,
                thruster_bottom_front_left: 6980,
                thruster_bottom_back_right: 6980,
                thruster_bottom_front_right: 6980
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 210,
        MaxSpeed: 1125,
        Pitch: 40,
        Yaw: 40,
        Roll: 130,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 422e4,
            Retro: 73e4,
            Vtol: 0,
            Maneuvering: 46e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.9,
            Retro: 3.9,
            Strafe: 5.9,
            Up: 6.9,
            Down: 2.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 15e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 527.5,
            Retro: 91.25,
            Vtol: 0,
            Maneuvering: 575
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9375,
            SCMActive: 11328,
            NAV: 16900
        },
        Infrared: {
            Start: 8445
        },
        CrossSection: {
            Front: 2615,
            Side: 8715,
            Top: 8715
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 1636,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 97502
    },
    Insurance: {
        StandardClaimTime: 7.59375,
        ExpeditedClaimTime: 2.53125,
        ExpeditedCost: 3800
    },
    Buy: {
        "Astro Armada, Area 18": 4365900
    }
}, {
    ClassName: "ANVL_Hawk",
    Name: "Anvil Hawk",
    Description: "A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 67066,
    ComponentsMass: 3100,
    Dimensions: {
        Length: 17,
        Width: 22,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1500,
                body: 1500
            },
            Parts: {
                canopy: 1500,
                Nacelle_left: 1e3,
                rear_wing_left: 800,
                wing_left: 800,
                Nacelle_right: 1e3,
                rear_wing_right: 800,
                wing_right: 800,
                tail: 1500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 7500,
                main_thruster_right: 7500
            },
            Retro: {
                retro_thruster_left: 6780,
                retro_thruster_right: 6780
            },
            Maneuvering: {
                mav_thruster_left_bottom: 6e3,
                mav_thruster_left_top: 6e3,
                mav_thruster_right_bottom: 6e3,
                mav_thruster_right_top: 6e3,
                mav_thruster_body_right: 6e3,
                mav_thruster_body_left: 6e3,
                mav_thruster_body_top: 6e3,
                mav_thruster_tail_left: 6e3,
                mav_thruster_tail_bottom: 6e3,
                mav_thruster_tail_right: 6e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 222,
        MaxSpeed: 1175,
        Pitch: 65,
        Yaw: 48,
        Roll: 178,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 82e5,
            Retro: 29e5,
            Vtol: 0,
            Maneuvering: 308e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.1,
            Retro: 4.2,
            Strafe: 9.1,
            Up: 9,
            Down: 4.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 490,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 1025,
            Retro: 362.5,
            Vtol: 0,
            Maneuvering: 3850
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9245,
            SCMActive: 11751,
            NAV: 16778
        },
        Infrared: {
            Start: 8365
        },
        CrossSection: {
            Front: 3024,
            Side: 11201,
            Top: 8064
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 1582,
        TurretsBurstDPS: 0,
        TotalEMPDmg: 2475,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 6.8,
        ExpeditedClaimTime: 2.27,
        ExpeditedCost: 3040
    },
    Dimensions2: {
        Length: 17,
        Width: 13,
        Height: 6.5
    },
    Buy: {
        "Astro Armada, Area 18": 2646e3
    }
}, {
    ClassName: "ANVL_Hornet_F7A_Mk1",
    Name: "Anvil F7A Hornet Mk I",
    Description: "The UEE Navy's premier carrier-based fighter craft, the F7A Hornet Mk I is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits and dish out a powerful response.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 74132,
    ComponentsMass: 7327,
    Dimensions: {
        Length: 22.5,
        Width: 21.5,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2750
            },
            Parts: {
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_a: 50,
                Tail: 1800,
                Tail_Debris: 1500,
                Nose: 2750,
                Canopy: 200,
                WingLeft: 200,
                WingLeft_Debris: 1500,
                WingRight: 200,
                WingRight_Debris: 1500,
                WingLeftRear: 700,
                WingRightRear: 700
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_left: 4700,
                thruster_top_front_right: 4700
            },
            Maneuvering: {
                thruster_top_back_left: 4700,
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_right: 4700,
                thruster_bottom_front_right: 4700,
                thruster_bottom_back_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1146,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2814e3,
            Retro: 2482e3,
            Vtol: 0,
            Maneuvering: 9212e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.7,
            Retro: 3.8,
            Strafe: 6.9,
            Up: 7.8,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 479,
                BoostSpeedBackward: 249
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 14e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 351.75,
            Retro: 310.25,
            Vtol: 0,
            Maneuvering: 1151.5
        },
        IntakeToMainFuelRatio: 10.23,
        TimeForIntakesToFillTank: 388888.89
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 7661,
            SCMActive: 8766,
            NAV: 16412
        },
        Infrared: {
            Start: 7353
        },
        CrossSection: {
            Front: 1893,
            Side: 6778,
            Top: 7328
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 4279,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 18723
    },
    Insurance: {
        StandardClaimTime: 6.75,
        ExpeditedClaimTime: 2.25,
        ExpeditedCost: 3375
    }
}, {
    ClassName: "ANVL_Hornet_F7A_Mk2",
    Name: "Anvil F7A Hornet Mk II",
    Description: "Ushering in a new age of space superiority, Anvil Aerospace has re-engineered the celebrated Hornet for the next generation of fighter combat.  Purpose built for the UEE Navy, the F7A Hornet Mk II maintains the spirit of the original while incorporating even more powerful offensive capabilities.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 73317,
    ComponentsMass: 10069,
    Dimensions: {
        Length: 22.5,
        Width: 21,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 3e3,
                nose: 3e3,
                tail: 1900
            },
            Parts: {
                wing_right: 200,
                wing_right_debris: 1600,
                wing_flap_right: 50,
                small_wing_left: 100,
                small_wing_flap_left: 50,
                small_wing_right: 100,
                small_wing_flap_right: 50,
                canopy: 200,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_c: 50,
                tail_wing: 1,
                tail_wing_debris: 400,
                wing_left: 200,
                wing_left_debris: 1600,
                wing_left_debris_02: 200,
                cap_spine: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_s5: 7e3
            },
            Retro: {
                retro_thruster_left: 8250,
                retro_thruster_right: 8250
            },
            Maneuvering: {
                thruster_top_front_right: 5e3,
                thruster_top_front_left: 5e3,
                thruster_top_back_right: 5e3,
                thruster_top_back_left: 5e3,
                thruster_bottom_front_right: 5e3,
                thruster_bottom_front_left: 5e3,
                thruster_bottom_back_right: 5e3,
                thruster_bottom_back_left: 5e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1146,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8646e3,
            Retro: 3128e3,
            Vtol: 0,
            Maneuvering: 1156e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.8,
            Retro: 3.9,
            Strafe: 7.3,
            Up: 7.6,
            Down: 4.3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 479,
                BoostSpeedBackward: 249
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 16e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1080.75,
            Retro: 391,
            Vtol: 0,
            Maneuvering: 1445
        },
        IntakeToMainFuelRatio: 3.33,
        TimeForIntakesToFillTank: 444444.44
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8453,
            SCMActive: 10405,
            NAV: 16956
        },
        Infrared: {
            Start: 7771
        },
        CrossSection: {
            Front: 2347,
            Side: 8404,
            Top: 9085
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 4719,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 19029
    },
    Insurance: {
        StandardClaimTime: 11.34,
        ExpeditedClaimTime: 3.56,
        ExpeditedCost: 5104
    },
    "New Ship": "Anvil F7A Hornet Mk II",
    Dimensions2: {
        Length: 22.5,
        Width: 15,
        Height: 6
    }
}, {
    ClassName: "ANVL_Hornet_F7C",
    Name: "Anvil F7C Hornet Mk I",
    Description: "To the enemy, it is a weapon never to be underestimated. To allies, it's a savior. The F7C Hornet Mk I is the same dependable and resilient multi-purpose fighter that has become the face of the UEE Navy. The F7C is the foundation to build on and meet whatever requirements you have in mind.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 2,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 74132,
    ComponentsMass: 2834,
    Dimensions: {
        Length: 22.5,
        Width: 21.5,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2650
            },
            Parts: {
                IntakeLeft: 400,
                MissileBay_Left: 400,
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                IntakeRight: 400,
                MissileBay_Right: 400,
                Nose: 2650,
                Canopy: 200,
                WingRightRear: 700,
                WingRight_Debris: 1500,
                LG_Door_Rear_R: 100,
                WingLeftRear: 700,
                WingLeft_Debris: 1500,
                LG_Door_Rear_L: 100,
                Tail: 1800,
                Tail_Debris: 1500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_right: 4700,
                thruster_top_front_left: 4700
            },
            Maneuvering: {
                thruster_top_back_right: 4700,
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_left: 4700,
                thruster_bottom_back_right: 4700,
                thruster_bottom_front_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5581e3,
            Retro: 2482e3,
            Vtol: 0,
            Maneuvering: 9212e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.3,
            Retro: 4,
            Strafe: 7.9,
            Up: 8.2,
            Down: 7.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 697.625,
            Retro: 310.25,
            Vtol: 0,
            Maneuvering: 1151.5
        },
        IntakeToMainFuelRatio: 5.16,
        TimeForIntakesToFillTank: 333333.33
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6382,
            SCMActive: 7394,
            NAV: 14894
        },
        Infrared: {
            Start: 6262
        },
        CrossSection: {
            Front: 1893,
            Side: 6778,
            Top: 7328
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14162
    },
    Insurance: {
        StandardClaimTime: 6.75,
        ExpeditedClaimTime: 2.25,
        ExpeditedCost: 3375
    },
    Buy: {
        "Astro Armada, Area 18": 2910600
    }
}, {
    ClassName: "ANVL_Hornet_F7CM",
    Name: "Anvil F7C-M Super Hornet Mk I",
    Description: "The closest to the Military load-out as is legally possible for a Civilian model, the F7C-M Super Hornet Mk I reattaches the ball turret and offers near milspec parts under the hood. Proving that two heads are better than one, a second seat has been added to split the logistic and combat duty, making the Super Hornet a truly terrifying mark to engage.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.29,
        PersonalInventory: 1.29
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 78886,
    ComponentsMass: 5703,
    Dimensions: {
        Length: 25.5,
        Width: 24,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2900,
                Nose: 2900
            },
            Parts: {
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_a: 50,
                Tail: 1800,
                Tail_Debris: 1500,
                WingLeftRear: 700,
                IntakeLeft: 400,
                WingLeft_Debris: 1500,
                LG_Door_Rear_L: 100,
                Canopy: 200,
                Canopy_Rear: 200,
                WingRightRear: 700,
                IntakeRight: 400,
                WingRight_Debris: 1500,
                LG_Door_Rear_R: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_right: 4700,
                thruster_top_front_left: 4700
            },
            Maneuvering: {
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_left: 4700,
                thruster_bottom_back_right: 4700,
                thruster_bottom_front_right: 4700,
                thruster_top_back_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 219,
        MaxSpeed: 1142,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8648e3,
            Retro: 2216e3,
            Vtol: 0,
            Maneuvering: 17752e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.8,
            Retro: 3.8,
            Strafe: 7.2,
            Up: 7.9,
            Down: 4.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 477,
                BoostSpeedBackward: 249
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 1081,
            Retro: 277,
            Vtol: 0,
            Maneuvering: 2219
        },
        IntakeToMainFuelRatio: 3.33,
        TimeForIntakesToFillTank: 375e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6785,
            SCMActive: 7904,
            NAV: 15569
        },
        Infrared: {
            Start: 6896
        },
        CrossSection: {
            Front: 2288,
            Side: 8191,
            Top: 8856
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2107,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9121
    },
    Insurance: {
        StandardClaimTime: 9.72,
        ExpeditedClaimTime: 3.24,
        ExpeditedCost: 4789
    },
    Buy: {
        "Astro Armada, Area 18": 4762800
    }
}, {
    ClassName: "ANVL_Hornet_F7CR",
    Name: "Anvil F7C-R Hornet Tracker Mk I",
    Description: "If the Ghost is made to hide, the Tracker is made to seek. The F7C-R Hornet Tracker Mk I boasts an advanced radar suite making it ideal for deep-space explorers who require depth and accuracy in their scan packages. Local militia and larger merc units will also repurpose Trackers to act as mobile C&C ships for their squadrons.",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 74197,
    ComponentsMass: 2596,
    Dimensions: {
        Length: 22.5,
        Width: 21.5,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2650
            },
            Parts: {
                IntakeLeft: 400,
                MissileBay_Left: 400,
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                IntakeRight: 400,
                MissileBay_Right: 400,
                Nose: 2650,
                Canopy: 200,
                WingRightRear: 700,
                WingRight_Debris: 1500,
                LG_Door_Rear_R: 100,
                WingLeftRear: 700,
                WingLeft_Debris: 1500,
                LG_Door_Rear_L: 100,
                Tail: 1800,
                Tail_Debris: 1500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_right: 4700,
                thruster_top_front_left: 4700
            },
            Maneuvering: {
                thruster_top_back_right: 4700,
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_left: 4700,
                thruster_bottom_back_right: 4700,
                thruster_bottom_front_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 219,
        MaxSpeed: 1142,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5581e3,
            Retro: 2482e3,
            Vtol: 0,
            Maneuvering: 9212e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.1,
            Retro: 4,
            Strafe: 7.6,
            Up: 8,
            Down: 4.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 477,
                BoostSpeedBackward: 249
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 697.625,
            Retro: 310.25,
            Vtol: 0,
            Maneuvering: 1151.5
        },
        IntakeToMainFuelRatio: 5.16,
        TimeForIntakesToFillTank: 333333.33
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6382,
            SCMActive: 7395,
            NAV: 14895
        },
        Infrared: {
            Start: 6506
        },
        CrossSection: {
            Front: 1893,
            Side: 6778,
            Top: 7328
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4480,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14162
    },
    Insurance: {
        StandardClaimTime: 8.1,
        ExpeditedClaimTime: 2.7,
        ExpeditedCost: 4367
    },
    Buy: {
        "Astro Armada, Area 18": 3210480
    }
}, {
    ClassName: "ANVL_Hornet_F7CR_Mk2",
    Name: "Anvil F7C-R Hornet Tracker Mk II",
    Description: "When seeking the next great frontier, who better to trust than a next-generation pathfinder? The F7C-R Hornet Tracker Mk II boasts an overhauled radar suite ideal for deep-space explorers who require depth and accuracy in their scan packages.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 73317,
    ComponentsMass: 3673,
    Dimensions: {
        Length: 22.2,
        Width: 22,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2850,
                nose: 2850,
                tail: 1900
            },
            Parts: {
                wing_right: 200,
                wing_right_debris: 1600,
                wing_flap_right: 50,
                small_wing_left: 100,
                small_wing_flap_left: 50,
                small_wing_right: 100,
                small_wing_flap_right: 50,
                canopy: 200,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_c: 50,
                tail_wing: 1,
                tail_wing_debris: 400,
                wing_left: 200,
                wing_left_debris: 1600,
                wing_left_debris_02: 200,
                cap_spine: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_s5: 7e3
            },
            Retro: {
                retro_thruster_left: 8250,
                retro_thruster_right: 8250
            },
            Maneuvering: {
                thruster_top_front_right: 5e3,
                thruster_top_front_left: 5e3,
                thruster_top_back_right: 5e3,
                thruster_top_back_left: 5e3,
                thruster_bottom_front_right: 5e3,
                thruster_bottom_front_left: 5e3,
                thruster_bottom_back_right: 5e3,
                thruster_bottom_back_left: 5e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8070928,
            Retro: 2922927,
            Vtol: 0,
            Maneuvering: 11194608
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.8,
            Retro: 3.9,
            Strafe: 7.5,
            Up: 7.9,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 144e5,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1008.866,
            Retro: 365.366,
            Vtol: 0,
            Maneuvering: 1399.326
        },
        IntakeToMainFuelRatio: 3.57,
        TimeForIntakesToFillTank: 4e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5965,
            SCMActive: 7925,
            NAV: 14478
        },
        Infrared: {
            Start: 7151
        },
        CrossSection: {
            Front: 2347,
            Side: 8404,
            Top: 9085
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2532,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9121
    },
    Insurance: {
        StandardClaimTime: 9.33,
        ExpeditedClaimTime: 2.33,
        ExpeditedCost: 4070
    },
    "New Ship": "Anvil F7C-R Hornet Tracker Mk II",
    Dimensions2: {
        Length: 22.2,
        Width: 15,
        Height: 6
    }
}, {
    ClassName: "ANVL_Hornet_F7CS",
    Name: "Anvil F7C-S Hornet Ghost Mk I",
    Description: "Through a combination of low-emission drives, low-draw weapons, and Void Armor technology capable of diffusing scans, the F7C-S Hornet Ghost Mk I is built for the pilot who wants to keep a low profile. The Ghost is capable of slipping past the most ardent of observers to accomplish whatever goal you need to accomplish. Don't worry, we won't ask.",
    Career: "Combat",
    Role: "Stealth Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 73724,
    ComponentsMass: 2521,
    Dimensions: {
        Length: 22.5,
        Width: 21.5,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .85,
            Infrared: .85,
            CrossSection: .85
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2550
            },
            Parts: {
                IntakeLeft: 400,
                MissileBay_Left: 400,
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                IntakeRight: 400,
                MissileBay_Right: 400,
                Nose: 2550,
                Canopy: 200,
                WingRightRear: 700,
                WingRight_Debris: 1500,
                LG_Door_Rear_R: 100,
                WingLeftRear: 700,
                WingLeft_Debris: 1500,
                LG_Door_Rear_L: 100,
                Tail: 1800,
                Tail_Debris: 1500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_right: 4700,
                thruster_top_front_left: 4700
            },
            Maneuvering: {
                thruster_top_back_right: 4700,
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_left: 4700,
                thruster_bottom_back_right: 4700,
                thruster_bottom_front_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 219,
        MaxSpeed: 1142,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5581e3,
            Retro: 2482e3,
            Vtol: 0,
            Maneuvering: 9212e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.1,
            Retro: 4,
            Strafe: 7.8,
            Up: 8,
            Down: 4.8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 477,
                BoostSpeedBackward: 249
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 697.625,
            Retro: 310.25,
            Vtol: 0,
            Maneuvering: 1151.5
        },
        IntakeToMainFuelRatio: 5.16,
        TimeForIntakesToFillTank: 333333.33
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5068,
            SCMActive: 5830,
            NAV: 11472
        },
        Infrared: {
            Start: 4894
        },
        CrossSection: {
            Front: 1357,
            Side: 4860,
            Top: 5254
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 1094,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14075
    },
    Insurance: {
        StandardClaimTime: 9.72,
        ExpeditedClaimTime: 3.24,
        ExpeditedCost: 4905
    },
    Buy: {
        "Astro Armada, Area 18": 3307500
    }
}, {
    ClassName: "ANVL_Hornet_F7CS_Mk2",
    Name: "Anvil F7C-S Hornet Ghost Mk II",
    Description: "When approaching the Mk II redesign of the F7C-S Hornet Ghost, the engineers at Anvil Aerospace wanted to preserve what pilots loved about the low-emission drives, low-draw weapons, and Void Armor technology of the original, but refine them to an even higher level of performance for a whole new era of stealth operations.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 73317,
    ComponentsMass: 3673,
    Dimensions: {
        Length: 22.2,
        Width: 22,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .72,
            Infrared: .72,
            CrossSection: .72
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2750,
                nose: 2750,
                tail: 1900
            },
            Parts: {
                wing_right: 200,
                wing_right_debris: 1600,
                wing_flap_right: 50,
                small_wing_left: 100,
                small_wing_flap_left: 50,
                small_wing_right: 100,
                small_wing_flap_right: 50,
                canopy: 200,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_c: 50,
                tail_wing: 1,
                tail_wing_debris: 400,
                wing_left: 200,
                wing_left_debris: 1600,
                wing_left_debris_02: 200,
                cap_spine: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_s5: 7e3
            },
            Retro: {
                retro_thruster_left: 8250,
                retro_thruster_right: 8250
            },
            Maneuvering: {
                thruster_top_front_right: 5e3,
                thruster_top_front_left: 5e3,
                thruster_top_back_right: 5e3,
                thruster_top_back_left: 5e3,
                thruster_bottom_front_right: 5e3,
                thruster_bottom_front_left: 5e3,
                thruster_bottom_back_right: 5e3,
                thruster_bottom_back_left: 5e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8069988,
            Retro: 2923778,
            Vtol: 0,
            Maneuvering: 11189216
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.8,
            Retro: 3.9,
            Strafe: 7.5,
            Up: 7.9,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 144e5,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1008.748,
            Retro: 365.472,
            Vtol: 0,
            Maneuvering: 1398.652
        },
        IntakeToMainFuelRatio: 3.57,
        TimeForIntakesToFillTank: 4e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3801,
            SCMActive: 5049,
            NAV: 9225
        },
        Infrared: {
            Start: 4556
        },
        CrossSection: {
            Front: 1495,
            Side: 5355,
            Top: 5789
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2532,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9121
    },
    Insurance: {
        StandardClaimTime: 9.5,
        ExpeditedClaimTime: 2.375,
        ExpeditedCost: 4190
    },
    "New Ship": "Anvil F7C-S Hornet Ghost Mk II",
    Dimensions2: {
        Length: 22.2,
        Width: 15,
        Height: 6
    }
}, {
    ClassName: "ANVL_Hornet_F7C_Mk2",
    Name: "Anvil F7C Hornet Mk II",
    Description: "Straight from the front lines to your personal hangar, the re-engineered F7C Hornet Mk II takes the latest battlefield upgrades and makes them available to private pilots across the empire. The fighter features an improved power system utilized by an overhauled weapon and missile package",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 73317,
    ComponentsMass: 3573,
    Dimensions: {
        Length: 22.5,
        Width: 21,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2850,
                nose: 2850,
                tail: 1900
            },
            Parts: {
                wing_right: 200,
                wing_right_debris: 1600,
                wing_flap_right: 50,
                small_wing_left: 100,
                small_wing_flap_left: 50,
                small_wing_right: 100,
                small_wing_flap_right: 50,
                canopy: 200,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                thrust_vector_flap_c: 50,
                tail_wing: 1,
                tail_wing_debris: 400,
                wing_left: 200,
                wing_left_debris: 1600,
                wing_left_debris_02: 200,
                cap_spine: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_s5: 7e3
            },
            Retro: {
                retro_thruster_left: 8250,
                retro_thruster_right: 8250
            },
            Maneuvering: {
                thruster_top_front_right: 5e3,
                thruster_top_front_left: 5e3,
                thruster_top_back_right: 5e3,
                thruster_top_back_left: 5e3,
                thruster_bottom_front_right: 5e3,
                thruster_bottom_front_left: 5e3,
                thruster_bottom_back_right: 5e3,
                thruster_bottom_back_left: 5e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8646e3,
            Retro: 3128e3,
            Vtol: 0,
            Maneuvering: 1156e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.9,
            Retro: 3.9,
            Strafe: 7.5,
            Up: 7.9,
            Down: 4.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 16e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1080.75,
            Retro: 391,
            Vtol: 0,
            Maneuvering: 1445
        },
        IntakeToMainFuelRatio: 3.33,
        TimeForIntakesToFillTank: 444444.44
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5965,
            SCMActive: 7925,
            NAV: 14478
        },
        Infrared: {
            Start: 6907
        },
        CrossSection: {
            Front: 2347,
            Side: 8404,
            Top: 9085
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2532,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9121
    },
    Insurance: {
        StandardClaimTime: 11.34,
        ExpeditedClaimTime: 3.56,
        ExpeditedCost: 5104
    },
    "New Ship": "Anvil F7C Hornet Mk II",
    Dimensions2: {
        Length: 22.5,
        Width: 15,
        Height: 6
    },
    Buy: {
        "Astro Armada, Area 18": 4895100
    }
}, {
    ClassName: "ANVL_Hornet_F7C_Wildfire",
    Name: "Anvil F7C Hornet Wildfire Mk I",
    Description: "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Wildfire pays tribute to famed pilot Aria Reilly for her distinguished service with the legendary Squadron 42. This F7C Hornet Mk I comes equipped with her own personally selected loadout preferences and a custom special edition livery honoring her iconic ship.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 2,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 74132,
    ComponentsMass: 3443,
    Dimensions: {
        Length: 22.5,
        Width: 21.5,
        Height: 6.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.13,
            Infrared: 1.13,
            CrossSection: 1.13
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2650
            },
            Parts: {
                IntakeLeft: 400,
                MissileBay_Left: 400,
                EngineHousing: 400,
                thrust_vector_flap_c: 50,
                thrust_vector_flap_a: 50,
                thrust_vector_flap_b: 50,
                IntakeRight: 400,
                MissileBay_Right: 400,
                Nose: 2650,
                Canopy: 200,
                WingRightRear: 700,
                WingRight_Debris: 1500,
                LG_Door_Rear_R: 100,
                WingLeftRear: 700,
                WingLeft_Debris: 1500,
                LG_Door_Rear_L: 100,
                Tail: 1800,
                Tail_Debris: 1500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_attach: 6700
            },
            Retro: {
                thruster_top_front_right: 4700,
                thruster_top_front_left: 4700
            },
            Maneuvering: {
                thruster_top_back_right: 4700,
                thruster_bottom_front_left: 4700,
                thruster_bottom_back_left: 4700,
                thruster_top_back_left: 4700,
                thruster_bottom_back_right: 4700,
                thruster_bottom_front_right: 4700
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5581e3,
            Retro: 2482e3,
            Vtol: 0,
            Maneuvering: 9212e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.3,
            Retro: 4,
            Strafe: 7.9,
            Up: 8.2,
            Down: 7.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 12e6,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 7.5
        },
        FuelUsagePerSecond: {
            Main: 697.625,
            Retro: 310.25,
            Vtol: 0,
            Maneuvering: 1151.5
        },
        IntakeToMainFuelRatio: 5.16,
        TimeForIntakesToFillTank: 333333.33
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5848,
            SCMActive: 7418,
            NAV: 14361
        },
        Infrared: {
            Start: 6280
        },
        CrossSection: {
            Front: 1893,
            Side: 6778,
            Top: 7328
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 2177,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 14162
    },
    Insurance: {
        StandardClaimTime: 6.75,
        ExpeditedClaimTime: 2.25,
        ExpeditedCost: 3375
    },
    Buy: {
        "Astro Armada, Area 18": 4630500
    }
}, {
    ClassName: "ANVL_Hurricane",
    Name: "Anvil Hurricane",
    Description: "Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 2.58,
        PersonalInventory: 1.29
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 90245,
    ComponentsMass: 4492,
    Dimensions: {
        Length: 22,
        Width: 18.2,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 7e3,
                body: 7e3
            },
            Parts: {
                canopy_exterior: 250,
                Canopy_interior: 250,
                wing_bottom_left: 500,
                wing_bottom_left_flap: 1,
                stabilizer_left: 50,
                stabilizer_left_flap: 25,
                wing_top_left: 800,
                wing_top_left_flap: 25,
                wing_bottom_right: 800,
                wing_bottom_right_flap: 25,
                wing_top_right: 600,
                wing_top_right_flap: 25,
                stabilizer_right: 50,
                stabilizer_right_flap: 25
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 9760,
                thruster_main_left: 9760
            },
            Retro: {
                thruster_retro_left: 8900,
                thruster_retro_right: 8900
            },
            Maneuvering: {
                thruster_mav_front_top_right: 8150,
                thruster_mav_front_top_left: 8150,
                thruster_mav_front_bot_right: 8150,
                thruster_mav_front_bot_left: 8150,
                thruster_mav_rear_top_left: 8150,
                thruster_mav_rear_top_right: 8150,
                thruster_mav_rear_bot_right: 8150,
                thruster_mav_rear_bot_left: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 38,
        Yaw: 32,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1002e4,
            Retro: 364e4,
            Vtol: 0,
            Maneuvering: 11392e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11,
            Retro: 4,
            Strafe: 7.5,
            Up: 8,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.33,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.33,
                    Y: 1.4,
                    Z: 1.34
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1252.5,
            Retro: 455,
            Vtol: 0,
            Maneuvering: 1424
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10409,
            SCMActive: 12443,
            NAV: 17943
        },
        Infrared: {
            Start: 9436
        },
        CrossSection: {
            Front: 3420,
            Side: 8361,
            Top: 12668
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 1636,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 8.55,
        ExpeditedClaimTime: 2.85,
        ExpeditedCost: 4148
    },
    Buy: {
        "Astro Armada, Area 18": 5556600
    }
}, {
    ClassName: "ANVL_Lightning_F8C",
    Name: "Anvil F8C Lightning",
    Description: "Few vehicles employed by the proud men and women who serve in our Empire's Navy inspire the awe of the legendary F8 Lightning. A force to be reckoned with, the F8 has secured Humanity's freedom from numerous threats at home and abroad countless times. Now, that same next generation space superiority fighter is available to become a part of your personal fleet with the Anvil F8C civilian variant.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 158775,
    ComponentsMass: 5309,
    Dimensions: {
        Length: 26,
        Width: 25,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1.03,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 7650
            },
            Parts: {
                wing_base_left: 6e3,
                rear_wing_left: 2e3,
                rear_wing_flap_left: 250,
                wing_left: 500,
                mini_wing_left: 250,
                weapon_mount_wing_b_S3_left: 200,
                weapon_mount_wing_a_S4_left: 200,
                fin_bot_left: 500,
                fin_top_left: 500,
                top_wing_flap_left: 250,
                engine_center: 200,
                wing_base_right: 6e3,
                rear_wing_right: 2e3,
                rear_wing_flap_right: 250,
                wing_right: 500,
                mini_wing_right: 250,
                weapon_mount_wing_b_S3_right: 200,
                weapon_mount_wing_a_S4_right: 200,
                fin_top_right: 500,
                fin_bot_right: 500,
                top_wing_flap_right: 250,
                tail_right: 250,
                tail_left: 250,
                nose: 7650,
                canopy: 350,
                front_wing_left: 500,
                front_wing_right: 500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 10500,
                engine_mid: 10500,
                engine_right: 10500
            },
            Retro: {
                thruster_retro_left: 9800,
                thruster_retro_right: 9800
            },
            Maneuvering: {
                thruster_bottomCL: 9150,
                thruster_topCL: 9150,
                thruster_bottomCR: 9150,
                thruster_topCR: 9150,
                thruster_topRR: 9150,
                thruster_topRL: 9150,
                thruster_bottomFL: 9150,
                thruster_bottomFR: 9150,
                thruster_bottomRL: 9150,
                thruster_bottomRR: 9150,
                thruster_topFL: 9150,
                thruster_topFR: 9150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 210,
        MaxSpeed: 1120,
        Pitch: 35,
        Yaw: 35,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 15084e3,
            Retro: 553e4,
            Vtol: 0,
            Maneuvering: 2856e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.4,
            Retro: 3.4,
            Strafe: 8.1,
            Up: 7.4,
            Down: 4.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 228
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 372e5,
        FuelIntakeRate: 36,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1885.5,
            Retro: 691.25,
            Vtol: 0,
            Maneuvering: 3570
        },
        IntakeToMainFuelRatio: 1.91,
        TimeForIntakesToFillTank: 103333333e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9126,
            SCMActive: 11910,
            NAV: 16651
        },
        Infrared: {
            Start: 9696
        },
        CrossSection: {
            Front: 2654,
            Side: 10173,
            Top: 11058
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 7020,
        PilotBurstDPS: 3266,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 19029
    },
    Insurance: {
        StandardClaimTime: 16.03125,
        ExpeditedClaimTime: 5.34375,
        ExpeditedCost: 8020
    },
    "New Ship": "Anvil F8C Lightning"
}, {
    ClassName: "ANVL_Spartan",
    Name: "Anvil Spartan",
    Description: "Built on Anvil’s robust Atlas Platform, the same chassis used for their devastating Ballista air defense system, the Spartan is a fully armored transport outfitted with eight jump seats. The Spartan’s rugged frame makes it perfect for all kinds of terrain, and its remote Gatling turret helps clear the area for easier deployment.",
    Career: "Ground",
    Role: "Ground",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.06
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 80016,
    ComponentsMass: 627,
    Dimensions: {
        Length: 17,
        Width: 7,
        Height: 5.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .55,
            Infrared: .85,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1e4,
                body: 1e4
            },
            Parts: {
                WheelFrontLeft01DmgGroup: 1,
                hardpoint_wheel_left01: 1700,
                hardpoint_wheel_left03: 1700,
                hardpoint_wheel_left04: 1700,
                hardpoint_wheel_left02: 1700,
                hardpoint_wheel_right01: 1700,
                hardpoint_wheel_right02: 1700,
                hardpoint_wheel_right03: 1700,
                hardpoint_wheel_right04: 1700
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 100,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 115
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 236,
            SCMActive: 844,
            NAV: 0
        },
        Infrared: {
            Start: 969
        },
        CrossSection: {
            Front: 1229,
            Side: 1927,
            Top: 2394
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1348,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 677,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 6.19,
        ExpeditedClaimTime: 2.06,
        ExpeditedCost: 2475
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "Astro Armada, Area 18": 846720,
        "New Deal, Lorville": 846720
    }
}, {
    ClassName: "ANVL_Terrapin",
    Name: "Anvil Terrapin",
    Description: "Presenting the Anvil Aerospace U4A-3 Terrapin-class Scanning/Exploration Ship. The Terrapin was developed near the end of the 28th century to serve as the first ship in the Empire’s defensive restructuring of the Navy. The Terrapin’s watchword is protection, with extensive shield systems and armor layers designed to provide the maximum possible defense for pilot and crew. While it lacks the maneuverability of a dedicated fighter, it does maintain an advanced, hard-hitting array of weapons intended to keep the most fearsome Vanduul raider at bay.",
    Career: "Support",
    Role: "Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 166850,
    ComponentsMass: 3410,
    Dimensions: {
        Length: 19.5,
        Width: 14.5,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e4,
                nose: 15e3
            },
            Parts: {
                Front_left_leg: 1e4,
                front_main_thruster_base_left: 1e3,
                terrapin_thruster_main_front_left: 1e4,
                Body_Bottom: 15e3,
                fuelport_inflight_housing: 1,
                tail: 2e4,
                Leg_rear_right: 1e4,
                rear_Main_thruster_base_right: 1e3,
                rear_right_Main_Thruster_wing_top: 3e3,
                rear_right_Main_Thruster_wing_bot: 3e3,
                terrapin_thruster_main_rear_right: 1e4,
                Leg_rear_Left: 1e4,
                rear_main_thruster_base_left: 1e3,
                rear_left_Main_Thruster_wing_top: 3e3,
                rear_left_Main_Thruster_wing_bot: 3e3,
                terrapin_thruster_main_rear_left: 1e4,
                Flap_Top_right: 1e3,
                Flap_Top_left: 1e3,
                tail_top_plate: 200,
                Front_right_leg: 1e4,
                front_main_thruster_base_right: 1e3,
                terrapin_thruster_main_front_right: 1e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_front_left: 6e3,
                thruster_main_rear_right: 6e3,
                thruster_main_rear_left: 6e3,
                thruster_main_front_right: 6e3
            },
            Retro: {
                thruster_retro_left: 5240,
                thruster_retro_right: 5240
            },
            Maneuvering: {
                thruster_top_left: 6e3,
                thruster_top_right: 6e3,
                thruster_bottom_left: 6e3,
                thruster_bottom_right: 6e3,
                thruster_rear_top_right: 6e3,
                thruster_rear_top_left: 6e3,
                thruster_rear_right: 4800,
                thruster_rear_left: 4800,
                thruster_rear_bottom_right: 6e3,
                thruster_rear_bottom_left: 6e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1150,
        Pitch: 35,
        Yaw: 35,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 424e4,
            Retro: 4173886,
            Vtol: 0,
            Maneuvering: 21540048
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.2,
            Retro: 2.4,
            Strafe: 3,
            Up: 3.4,
            Down: 3.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 240
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 1045e5,
        FuelIntakeRate: 18,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 530,
            Retro: 521.736,
            Vtol: 0,
            Maneuvering: 2692.506
        },
        IntakeToMainFuelRatio: 3.4,
        TimeForIntakesToFillTank: 580555556e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8621,
            SCMActive: 11325,
            NAV: 16146
        },
        Infrared: {
            Start: 5835
        },
        CrossSection: {
            Front: 3066,
            Side: 7562,
            Top: 10219
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 8860,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.875,
        ExpeditedClaimTime: 2.625,
        ExpeditedCost: 3940
    },
    Buy: {
        "Astro Armada, Area 18": 5433120
    }
}, {
    ClassName: "ANVL_Terrapin_Medic",
    Name: "Anvil Terrapin Medic",
    Description: "Maintaining the famed toughness of the original Terrapin, Anvil designers have crafted an optimal vehicle for rescue operations with the Terrapin Medic. Featuring a tier 2 medical bed, the Terrapin Medic can extract injured parties from even the most hazardous situations thanks to its powerful armor and shielding.",
    Career: "Support",
    Role: "Medical",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 166850,
    ComponentsMass: 3200,
    Dimensions: {
        Length: 20,
        Width: 15.6,
        Height: 7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .46,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e4,
                nose: 15e3
            },
            Parts: {
                Front_left_leg: 1e4,
                front_main_thruster_base_left: 1e3,
                terrapin_thruster_main_front_left: 1e4,
                Body_Bottom: 15e3,
                fuelport_inflight_housing: 1,
                tail: 2e4,
                Leg_rear_right: 1e4,
                rear_Main_thruster_base_right: 1e3,
                rear_right_Main_Thruster_wing_top: 3e3,
                rear_right_Main_Thruster_wing_bot: 3e3,
                terrapin_thruster_main_rear_right: 1e4,
                Leg_rear_Left: 1e4,
                rear_main_thruster_base_left: 1e3,
                rear_left_Main_Thruster_wing_top: 3e3,
                rear_left_Main_Thruster_wing_bot: 3e3,
                terrapin_thruster_main_rear_left: 1e4,
                Flap_Top_right: 1e3,
                Flap_Top_left: 1e3,
                tail_top_plate: 200,
                Front_right_leg: 1e4,
                front_main_thruster_base_right: 1e3,
                terrapin_thruster_main_front_right: 1e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_front_left: 6e3,
                thruster_main_rear_right: 6e3,
                thruster_main_rear_left: 6e3,
                thruster_main_front_right: 6e3
            },
            Retro: {
                thruster_retro_left: 5240,
                thruster_retro_right: 5240
            },
            Maneuvering: {
                thruster_top_left: 6e3,
                thruster_top_right: 6e3,
                thruster_bottom_left: 6e3,
                thruster_bottom_right: 6e3,
                thruster_rear_top_right: 6e3,
                thruster_rear_top_left: 6e3,
                thruster_rear_right: 4800,
                thruster_rear_left: 4800,
                thruster_rear_bottom_right: 6e3,
                thruster_rear_bottom_left: 6e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1150,
        Pitch: 35,
        Yaw: 35,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 424e4,
            Retro: 4173886,
            Vtol: 0,
            Maneuvering: 21540048
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9.2,
            Retro: 2.5,
            Strafe: 3,
            Up: 3.4,
            Down: 3.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 240
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 1045e5,
        FuelIntakeRate: 18,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 530,
            Retro: 521.736,
            Vtol: 0,
            Maneuvering: 2692.506
        },
        IntakeToMainFuelRatio: 3.4,
        TimeForIntakesToFillTank: 580555556e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8621,
            SCMActive: 11325,
            NAV: 16145
        },
        Infrared: {
            Start: 6040
        },
        CrossSection: {
            Front: 3066,
            Side: 7562,
            Top: 10219
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 8860,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 9.5,
        ExpeditedClaimTime: 2.375,
        ExpeditedCost: 4220
    },
    "New Ship": "Anvil Terrapin Medic",
    Dimensions2: {
        Length: 20,
        Width: 16.4,
        Height: 7
    }
}, {
    ClassName: "ANVL_Valkyrie",
    Name: "Anvil Valkyrie",
    Description: "The Valkyrie ups the ante on troop transport. Designed to carry up to twenty soldiers, as well as vehicles, to the most hostile locations, this conflict-ready mil-spec craft is a formidable force, both offensively and defensively. Built with military and private defense contractors in mind, the Valkyrie is one of the most efficient and effective personnel transports in its class.",
    Career: "Combat",
    Role: "Drop Ship",
    Size: 4,
    Cargo: {
        CargoGrid: 30,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4.63
    },
    Crew: 1,
    WeaponCrew: 6,
    OperationsCrew: 0,
    Mass: 621046.06,
    ComponentsMass: 11620,
    Dimensions: {
        Length: 48,
        Width: 38,
        Height: 12
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .38,
            Energy: .97,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.07,
            Infrared: 1.07,
            CrossSection: 1.07
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1e4,
                Tail: 1e4
            },
            Parts: {
                Wing_Left: 4500,
                Decal_Wing_Left: 200,
                Wing_Right: 4500,
                Decal_Wing_Right: 200,
                Wing_RR: 2e3,
                Wing_RL: 2e3,
                Engine_RR: 150,
                Engine_RR_Split: 2500,
                Lights_Engine_RR_Split: 1,
                Engine_RL: 150,
                Engine_RL_Split: 2500,
                Tail_Shell: 1,
                Engine_FL: 150,
                Engine_FL_Split: 2500,
                Engine_FR: 150,
                Engine_FR_Split: 2500,
                Lights_Nose: 1,
                Nose_Shell: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_rear_right: 17600,
                thruster_main_rear_left: 17600,
                thruster_aux_left: 17600,
                thruster_aux_right: 17600,
                thruster_main_front_left: 17600,
                thruster_main_front_right: 17600
            },
            Retro: {
                thruster_retro_left: 16800,
                thruster_retro_right: 16800
            },
            Maneuvering: {
                thruster_bottom_front_right: 16250,
                thruster_bottom_front_left: 16250,
                thruster_side_front_right: 16250,
                thruster_side_front_left: 16250,
                thruster_top_front_left: 16250,
                thruster_top_front_right: 16250,
                thruster_bottom_rear_left: 16250,
                thruster_bottom_rear_right: 16250,
                thruster_side_rear_right: 16250,
                thruster_side_rear_left: 16250,
                thruster_top_rear_left: 16250,
                thruster_top_rear_right: 16250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 207,
        MaxSpeed: 1110,
        Pitch: 34,
        Yaw: 29,
        Roll: 98,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 28361686,
            Retro: 10865956,
            Vtol: 0,
            Maneuvering: 77361400
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 4.5,
            Retro: 1.7,
            Strafe: 3.9,
            Up: 2.1,
            Down: 2.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 431,
                BoostSpeedBackward: 245
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 945e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3545.211,
            Retro: 1358.244,
            Vtol: 0,
            Maneuvering: 9670.174
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 26565,
            SCMActive: 33598,
            NAV: 43129
        },
        Infrared: {
            Start: 19250
        },
        CrossSection: {
            Front: 6349,
            Side: 20065,
            Top: 25398
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 18960,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 4221,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 16.875,
        ExpeditedClaimTime: 5.625,
        ExpeditedCost: 8440
    },
    Buy: {
        "Astro Armada, Area 18": 19845e3
    }
}, {
    ClassName: "ARGO_CSV_Cargo",
    Name: "Argo CSV-SM",
    Description: "You got your plot of land, you’ve got the right construction materials, and now you’re ready to watch your dreams take shape. The ideal companion to the CSV-FM, the CSV Supply Model provides additional storage for all the resources required to build your next settlement.",
    Career: "Ground",
    Role: "Ground",
    Size: 1,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: .73,
        PersonalInventory: .73
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3754.6,
    ComponentsMass: 163,
    Dimensions: {
        Length: 5.44,
        Width: 4.13,
        Height: 2.81
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 3500
            },
            Parts: {
                front: 2500,
                front_barbreakbottom_right: 250,
                front_panelbreak_bumper_left: 250,
                front_panelbreak_bumper_right: 250,
                front_barbreakbottom_left: 250,
                AAsus_wheel_RR: 2e3,
                AAsus_wheel_RL: 2e3,
                wheel_rl_mudguard: 150,
                wheel_rr_mudguard: 150,
                rear_panelbreak_left: 250,
                body_panelbreak_right: 250,
                AAsus_wheel_FL: 2e3,
                AAsus_wheel_FR: 2e3,
                wheel_fl_mudguard: 150,
                wheel_fr_mudguard: 150
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 50,
        VMaxSteerSpeed: 20,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 50,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 80
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 16,
            SCMActive: 466,
            NAV: 0
        },
        Infrared: {
            Start: 1531
        },
        CrossSection: {
            Front: 1184,
            Side: 1011,
            Top: 505
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .33,
        ExpeditedClaimTime: .08,
        ExpeditedCost: 190
    },
    "New Ship": "Argo CSV-SM"
}, {
    ClassName: "ARGO_MOLE",
    Name: "Argo MOLE",
    Description: 'Argo’s iconic multi-operator laser extractor, more commonly referred to as the MOLE, lets you work faster and more effectively than ever before, thanks to its patented trilateral mining system. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage "many hands make for light work".',
    Career: "Industrial",
    Role: "Medium Mining",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 96,
        ExternalStorage: 0,
        PersonalInventory: 4.57
    },
    Crew: 5,
    WeaponCrew: 0,
    OperationsCrew: 3,
    Mass: 869686,
    ComponentsMass: 8513,
    Dimensions: {
        Length: 45,
        Width: 25,
        Height: 15
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Front: 22575,
                Rear: 45e3
            },
            Parts: {
                Vtol_Rear_Left: 1200,
                Thruster_Top_Left: 2e3,
                Thruster_Bot_Left: 2e3,
                Vtol_Rear_Right: 1200,
                Thruster_Top_Right: 2e3,
                Thruster_Bot_Right: 2e3,
                thruster_front_vtol_left: 1200,
                thruster_front_vtol_right: 1200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left_top: 14500,
                thruster_main_left_bottom: 14500,
                thruster_main_right_top: 14500,
                thruster_main_right_bottom: 14500
            },
            Retro: {
                thruster_retro_left: 13500,
                thruster_retro_right: 13500
            },
            Vtol: {
                thruster_rear_vtol_left: 14500,
                thruster_rear_vtol_right: 14500,
                thruster_front_vtol_left: 14500,
                thruster_front_vtol_right: 14500
            },
            Maneuvering: {
                thruster_rear_bottom_left: 12e3,
                thruster_rear_bottom_right: 12e3,
                thruster_rear_top_left: 12e3,
                thruster_rear_top_right: 12e3,
                thruster_front_bottom_left: 12e3,
                thruster_front_bottom_right: 12e3,
                thruster_front_top_left: 12e3,
                thruster_front_top_right: 12e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 140,
        MaxSpeed: 960,
        Pitch: 30,
        Yaw: 30,
        Roll: 75,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 428e5,
            Retro: 3e7,
            Vtol: 188e5,
            Maneuvering: 528e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 4.9,
            Retro: 3.5,
            Strafe: 2.7,
            Up: 3,
            Down: 2.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 340,
                BoostSpeedBackward: 150
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.1,
            RampDown: .7,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.41,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.39,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 2e8,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 26e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 6750,
            Retro: 3750,
            Vtol: 2350,
            Maneuvering: 6600
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 27573,
            SCMActive: 33025,
            NAV: 42655
        },
        Infrared: {
            Start: 13499
        },
        CrossSection: {
            Front: 9693,
            Side: 16155,
            Top: 29373
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 48800,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 13.5,
        ExpeditedClaimTime: 4.5,
        ExpeditedCost: 5715
    },
    Buy: {
        "New Deal, Lorville": 8930250
    }
}, {
    ClassName: "ARGO_MPUV",
    Name: "Argo MPUV Cargo",
    Description: "The Argo Astronautics MPUV Cargo is a dedicated merchant transfer ship. A ubiquitous intergalactic stevedore, vast numbers of MPUV Cargos are responsible for loading and unloading goods onto ships that can't otherwise land on planets or drydocks, such as the Hull D and the Orion. Some hauler captains choose to own and operate their own Argo, while others prefer to contract with the local Argo owners found at many of the busier ports. ",
    Career: "Transporter",
    Role: "Light Freight",
    Size: 1,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .8
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 13030,
    ComponentsMass: 556,
    Dimensions: {
        Length: 9.5,
        Width: 8.5,
        Height: 4.3
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500,
                Cargo_Container_Exterior: 440
            },
            Parts: {
                Leg_Left: 240,
                Leg_Right: 240
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_middle_left: 3500,
                engine_middle_right: 3500,
                engine_left: 3500,
                engine_right: 3500
            },
            Maneuvering: {
                thruster_front_left_front: 2500,
                thruster_front_left_top: 2500,
                thruster_front_left_middle: 2500,
                thruster_front_right_front: 2500,
                thruster_front_right_top: 2500,
                thruster_front_right_middle: 2500,
                thruster_front_right_bottom: 2500,
                thruster_front_left_bottom: 2500,
                thruster_rear_left_top: 2500,
                thruster_rear_left_middle: 2500,
                thruster_rear_left_bottom: 2500,
                thruster_rear_right_bottom: 2500,
                thruster_rear_right_middle: 2500,
                thruster_rear_right_top: 2500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 170,
        MaxSpeed: 890,
        Pitch: 30,
        Yaw: 30,
        Roll: 85,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 385e3,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 13186832e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.8,
            Retro: 2.7,
            Strafe: 2.1,
            Up: 2.8,
            Down: 2.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 360,
                BoostSpeedBackward: 140
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 48.125,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 164.835
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3368,
            SCMActive: 4069,
            NAV: 0
        },
        Infrared: {
            Start: 7624
        },
        CrossSection: {
            Front: 2822,
            Side: 6028,
            Top: 6413
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1850,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .16875,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 205
    },
    Buy: {
        "New Deal, Lorville": 330750
    }
}, {
    ClassName: "ARGO_MPUV_1T",
    Name: "Argo MPUV Tractor",
    Description: "The Argo Astronautics MPUV-1T is outfitted with a tractor beam to allow it to handily move cargo containers on and off larger hauling vessels.  Its smaller size and maneuverability make it an ideal support vehicle at landing zones and space stations.",
    Career: "Transporter",
    Role: "Light Freight",
    Size: 1,
    Cargo: {
        CargoGrid: 16,
        CargoContainers: 0,
        ExternalStorage: .45,
        PersonalInventory: 2
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 8015,
    ComponentsMass: 813,
    Dimensions: {
        Length: 9,
        Width: 8.5,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2500,
                Nose: 2500
            },
            Parts: {
                Leg_Left: 240,
                Leg_Right: 240,
                Power_Cap_mesh: 50,
                Cooler_Cap_mesh: 50,
                headlight_bot_r: 200,
                headlight_top_r: 200,
                headlight_top_l: 200,
                headlight_bot_l: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_middle_left: 3500,
                engine_middle_right: 3500,
                engine_left: 3500,
                engine_right: 3500
            },
            Maneuvering: {
                thruster_front_left_front: 2500,
                thruster_front_left_top: 2500,
                thruster_front_left_middle: 2500,
                thruster_front_right_front: 2500,
                thruster_front_right_top: 2500,
                thruster_front_right_middle: 2500,
                thruster_rear_left_top: 2500,
                thruster_rear_left_middle: 2500,
                thruster_rear_left_bottom: 2500,
                thruster_rear_right_bottom: 2500,
                thruster_rear_right_middle: 2500,
                thruster_rear_right_top: 2500,
                thruster_front_left_bottom: 2500,
                thruster_front_right_bottom: 2500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 175,
        MaxSpeed: 895,
        Pitch: 35,
        Yaw: 35,
        Roll: 85,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 238849.2,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 918105.1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.8,
            Retro: 2.8,
            Strafe: 1,
            Up: 3,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 365,
                BoostSpeedBackward: 145
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 29.856,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 114.763
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3555,
            SCMActive: 4462,
            NAV: 0
        },
        Infrared: {
            Start: 8329
        },
        CrossSection: {
            Front: 2420,
            Side: 5170,
            Top: 5500
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1850,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .16875,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 205
    },
    "New Ship": "Argo MPUV-1T",
    Buy: {
        "New Deal, Lorville": 415800
    }
}, {
    ClassName: "ARGO_MPUV_Transport",
    Name: "Argo MPUV Personnel",
    Description: "The Argo Astronautics MPUV-1P (commonly ‘Argo Personnel’). This version of the Argo is geared towards a simple but incredibly important responsibility: moving grounds of people from place to place. The UEE Navy uses MPUV-1Ps extensively, and any new recruit can likely recall those terrifying moments in which such a ship carried them to their first space assignment. In civilian hands, Argo Personnel ships are adapted for everything from standard taxi services to use as makeshift combat dropships. The Argo MPUV-1P is capable of carrying up to eight humans and their equipment.",
    Career: "Transporter",
    Role: "Passenger",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 13005,
    ComponentsMass: 556,
    Dimensions: {
        Length: 9.25,
        Width: 8.5,
        Height: 4.3
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 2500,
                Body: 2500,
                aegs_escape_pod_exterior: 440
            },
            Parts: {
                Leg_Left: 240,
                Leg_Right: 240
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_middle_left: 3500,
                engine_middle_right: 3500,
                engine_left: 3500,
                engine_right: 3500
            },
            Maneuvering: {
                thruster_front_left_front: 2500,
                thruster_front_left_top: 2500,
                thruster_front_left_middle: 2500,
                thruster_front_right_front: 2500,
                thruster_front_right_top: 2500,
                thruster_front_right_middle: 2500,
                thruster_front_right_bottom: 2500,
                thruster_front_left_bottom: 2500,
                thruster_rear_left_top: 2500,
                thruster_rear_left_middle: 2500,
                thruster_rear_left_bottom: 2500,
                thruster_rear_right_bottom: 2500,
                thruster_rear_right_middle: 2500,
                thruster_rear_right_top: 2500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 170,
        MaxSpeed: 890,
        Pitch: 30,
        Yaw: 30,
        Roll: 85,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 385e3,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 13186832e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.8,
            Retro: 2.7,
            Strafe: 2.1,
            Up: 2.8,
            Down: 2.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 360,
                BoostSpeedBackward: 140
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 48.125,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 164.835
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3368,
            SCMActive: 4069,
            NAV: 0
        },
        Infrared: {
            Start: 7528
        },
        CrossSection: {
            Front: 2798,
            Side: 5977,
            Top: 6358
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1850,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .68,
        ExpeditedClaimTime: .23,
        ExpeditedCost: 270
    },
    Buy: {
        "New Deal, Lorville": 378e3
    }
}, {
    ClassName: "ARGO_RAFT",
    Name: "Argo RAFT",
    Description: "The Argo RAFT features a hefty 96 SCU cargo hold, and is capable of carrying up to three standardized 32 SCU cargo containers. Perfect for entry-level haulers and old pros alike, the RAFT is an ideal solution for reliable local freight transport.",
    Career: "Industrial",
    Role: "Light Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 96,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.46
    },
    Crew: 2,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 669686,
    ComponentsMass: 7230,
    Dimensions: {
        Length: 39.5,
        Width: 23,
        Height: 12
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .53,
            Energy: 1.05,
            Distortion: 1.05
        },
        SignalMultipliers: {
            Electromagnetic: 1.5,
            Infrared: 1.5,
            CrossSection: 1.5
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Front: 40717.7
            },
            Parts: {
                ARGO_RAFT_FL_LG_MainShaft_Mesh: 250,
                ARGO_RAFT_FR_LG_MainShaft_Mesh: 250,
                Rear_Right: 7500,
                ARGO_RAFT_RR_LG_MainShaft_Mesh: 250,
                ARGO_RAFT_RR_VTOL_Mesh: 1,
                Rear_Left: 7500,
                ARGO_RAFT_RL_LG_MainShaft_Mesh: 250,
                ARGO_RAFT_RL_VTOL_Mesh: 250,
                ARGO_RAFT_FR_VTOL_Mesh: 250,
                ARGO_RAFT_FL_VTOL_Mesh: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right_2: 4500,
                thruster_main_right_1: 4500,
                thruster_main_left_1: 4500,
                thruster_main_left_2: 4500
            },
            Retro: {
                thruster_retro_right: 4500,
                thruster_retro_left: 4500
            },
            Vtol: {
                thruster_VTOL_rear_right: 4500,
                thruster_VTOL_rear_left: 4500,
                thruster_VTOL_front_right: 4500,
                thruster_VTOL_front_left: 4500
            },
            Maneuvering: {
                thruster_bottom_front_right: 4500,
                thruster_bottom_front_left: 4500,
                thruster_top_front_right: 4500,
                thruster_side_front_right: 4500,
                thruster_side_front_left: 4500,
                thruster_top_front_left: 4500,
                thruster_side_rear_right: 4500,
                thruster_bottom_rear_right: 4500,
                thruster_top_rear_right: 4500,
                thruster_side_rear_left: 4500,
                thruster_top_rear_left: 4500,
                thruster_bottom_rear_left: 4500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 140,
        MaxSpeed: 990,
        Pitch: 40,
        Yaw: 40,
        Roll: 117,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1796e4,
            Retro: 996e4,
            Vtol: 596e4,
            Maneuvering: 4296e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.7,
            Retro: 1.5,
            Strafe: 1.1,
            Up: 2,
            Down: 1.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 340,
                BoostSpeedBackward: 150
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.5,
            RampDown: .8,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 225e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2745,
            Retro: 1245,
            Vtol: 745,
            Maneuvering: 5370
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 25416,
            SCMActive: 32589,
            NAV: 48636
        },
        Infrared: {
            Start: 20168
        },
        CrossSection: {
            Front: 9588,
            Side: 20277,
            Top: 24850
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 15300,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 1367,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 14,
        ExpeditedClaimTime: 2,
        ExpeditedCost: 2050
    },
    Buy: {
        "New Deal, Lorville": 3543750
    }
}, {
    ClassName: "ARGO_SRV",
    Name: "Argo SRV",
    Description: "When it comes to getting the job done, Argo doesn’t mess around. From simple freight and cargo towing to harrowing search-and-rescue operations, the SRV handles whatever you can throw at it. The bespoke tractor system utilizes an innovative plate and arm combination, allowing for effortless solo use as well as precision team towing for bigger jobs. Your crew and passengers stay safe too thanks to durable shields and heavy-duty armor that keep the cockpit and components secure when the situation gets hairy.",
    Career: "Support",
    Role: "Recovery",
    Size: 3,
    Cargo: {
        CargoGrid: 12,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 1,
    Mass: 458980,
    ComponentsMass: 3790,
    Dimensions: {
        Length: 28.5,
        Width: 19.5,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1e4
            },
            Parts: {
                VTOL_front_left_lower_mesh: 500,
                VTOL_front_left_upper_mesh: 500,
                VTOL_front_right_lower_mesh: 500,
                VTOL_front_right_upper_mesh: 500,
                Rear: 8500,
                Nacelle_right: 2500,
                VTOL_mid_right_cylinder_mesh: 1e3,
                VTOL_mid_right_upper_mesh: 500,
                VTOL_mid_right_lower_mesh: 500,
                VTOL_rear_right_cylinder_mesh: 1e3,
                VTOL_rear_right_lower_mesh: 500,
                VTOL_rear_right_upper_mesh: 500,
                DEBRIS_MainTractorBeamArm: 1e3,
                Nacelle_left: 2500,
                VTOL_mid_left_cylinder_mesh: 1e3,
                VTOL_mid_left_upper_mesh: 500,
                VTOL_mid_left_lower_mesh: 500,
                VTOL_rear_left_cylinder_mesh: 1e3,
                VTOL_rear_left_lower_mesh: 500,
                VTOL_rear_left_upper_mesh: 500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 21e3,
                thruster_main_left: 21e3
            },
            Retro: {
                thruster_retro_right: 22e3,
                thruster_retro_left: 22e3
            },
            Vtol: {
                thruster_VTOL_FLB: 21e3,
                thruster_VTOL_FLT: 21e3,
                thruster_VTOL_FRB: 21e3,
                thruster_VTOL_FRT: 21e3,
                thruster_VTOL_MR: 21e3,
                thruster_VTOL_RR: 21e3,
                thruster_VTOL_ML: 21e3,
                thruster_VTOL_RL: 21e3
            },
            Maneuvering: {
                thruster_FSR: 21e3,
                thruster_FSL: 21e3,
                thruster_FTR: 21e3,
                thruster_FTL: 21e3,
                thruster_FBR: 21e3,
                thruster_FBL: 21e3,
                thruster_RBR: 21e3,
                thruster_RSR: 21e3,
                thruster_RTR: 21e3,
                thruster_RBL: 21e3,
                thruster_RSL: 21e3,
                thruster_RTL: 21e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1100,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 172e5,
            Retro: 916e4,
            Vtol: 23e5,
            Maneuvering: 3074e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.7,
            Retro: 2,
            Strafe: 1.3,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 460,
                BoostSpeedBackward: 235
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 475e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 31e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 10,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3007.5,
            Retro: 1145,
            Vtol: 287.5,
            Maneuvering: 3842.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3820,
            SCMActive: 5121,
            NAV: 19300
        },
        Infrared: {
            Start: 9902
        },
        CrossSection: {
            Front: 7881,
            Side: 19700,
            Top: 8896
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4430,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 13.22,
        ExpeditedClaimTime: 4.75,
        ExpeditedCost: 6200
    },
    "New Ship": "Argo SRV",
    Buy: {
        "New Deal, Lorville": 3969e3
    }
}, {
    ClassName: "BANU_Defender",
    Name: "Banu Defender",
    Description: "Meet the Banu Defender, a multi-crew fighter whose patchwork design highlights technology from a variety of species. Featuring modest accommodations for its crew and easy access to components, the Defender gets its name from the role it serves: the first line of defense against enemy attacks. That's why the Defender makes the ideal companion to the Merchantman: one to do the heavy hauling and the other to perform the deadly dogfighting.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.42
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 122930,
    ComponentsMass: 3122,
    Dimensions: {
        Length: 25.5,
        Width: 20,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 3500
            },
            Parts: {
                Pod: 4e3,
                Wing_Hull_Left: 3e3,
                Wing_Hull_Right: 3e3,
                Canopy_Left: 50,
                Canopy_Right: 50,
                Body_Panels_02: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 13500,
                thruster_main_right: 13500
            },
            Retro: {
                thruster_retro_right: 12250,
                thruster_retro_left: 12250
            },
            Maneuvering: {
                thruster_rear_left_bottom: 11500,
                thruster_rear_left_side: 11500,
                thruster_rear_left_top: 11500,
                thruster_rear_right_bottom: 11500,
                thruster_rear_right_side: 11500,
                thruster_rear_right_top: 11500,
                thruster_wing_left_bottom: 11500,
                thruster_wing_left_side: 11500,
                thruster_wing_left_top: 11500,
                thruster_wing_right_bottom: 11500,
                thruster_wing_right_side: 11500,
                thruster_wing_right_top: 11500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 222,
        MaxSpeed: 1175,
        Pitch: 60,
        Yaw: 47,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 13658e3,
            Retro: 4964e3,
            Vtol: 0,
            Maneuvering: 34548e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.2,
            Retro: 4,
            Strafe: 7.6,
            Up: 8.3,
            Down: 4.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 255
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 43e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 31e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1707.25,
            Retro: 620.5,
            Vtol: 0,
            Maneuvering: 4318.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 14875,
            SCMActive: 16998,
            NAV: 22408
        },
        Infrared: {
            Start: 8671
        },
        CrossSection: {
            Front: 3063,
            Side: 8493,
            Top: 18100
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 5100,
        PilotBurstDPS: 1276,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 13.61,
        ExpeditedClaimTime: 4.54,
        ExpeditedCost: 6168
    },
    Buy: {
        "Astro Armada, Area 18": 6237e3
    }
}, {
    ClassName: "CNOU_HoverQuad",
    Name: "C.O. HoverQuad",
    Description: "Designed as a companion ground vehicle for the Nomad, the HoverQuad's sleek angular frame utilizes four gravlev pads for maximum maneuverability, making it the perfect transport across all kinds of surfaces.",
    Career: "Personal Transport",
    Role: "Transport",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .6,
        PersonalInventory: .6
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 4850,
    ComponentsMass: 553,
    Dimensions: {
        Length: 4.5,
        Width: 2.5,
        Height: 1.1
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.95,
            Infrared: .12,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 750
            },
            Parts: {
                hardpoint_vehicle_destroyed: 200,
                gravlev_nacelle_r_left: 450,
                gravlev_nacelle_r_right: 450,
                Nose: 750,
                gravlev_nacelle_f_right: 450,
                gravlev_nacelle_f_left: 450
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main: 2750
            },
            Retro: {
                thruster_retro_left: 2500,
                thruster_retro_right: 2500
            },
            Maneuvering: {
                gravlev_center_rear_right: 2750,
                gravlev_center_rear_left: 2750,
                gravlev_rear_left: 2750,
                thruster_mav_rear_left_bottom: 2150,
                thruster_mav_rear_left_top: 2150,
                thruster_mav_rear_left_side: 2150,
                gravlev_rear_right: 2750,
                thruster_mav_rear_right_bottom: 2150,
                thruster_mav_rear_right_side: 2150,
                thruster_mav_rear_right_top: 2150,
                thruster_mav_front_right_side: 2150,
                thruster_mav_front_right_bottom: 2150,
                thruster_mav_front_right_top: 2150,
                gravlev_front_right: 2750,
                thruster_mav_front_left_side: 2150,
                thruster_mav_front_left_bottom: 2150,
                thruster_mav_front_left_top: 2150,
                gravlev_front_left: 2750,
                gravlev_center_right: 2750,
                gravlev_center_left: 2750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        HoverMaxSpeed: 200,
        MaxSpeed: 550,
        Pitch: 70,
        Yaw: 70,
        Roll: 130,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 135e3,
            Retro: 113e3,
            Vtol: 0,
            Maneuvering: 44e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.6,
            Retro: 2.2,
            Strafe: 1.3,
            Up: 2,
            Down: 1.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 280,
                BoostSpeedBackward: 120
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: 1.25,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 3.5,
            RegenerationTime: 16,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 16e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 25
        },
        FuelUsagePerSecond: {
            Main: 16.875,
            Retro: 14.125,
            Vtol: 0,
            Maneuvering: 55
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 233,
            SCMActive: 244,
            NAV: 0
        },
        Infrared: {
            Start: 236
        },
        CrossSection: {
            Front: 148,
            Side: 205,
            Top: 247
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    Buy: {
        "Astro Armada, Area 18": 56700,
        "New Deal, Lorville": 56700
    }
}, {
    ClassName: "CNOU_Mustang_Alpha",
    Name: "C.O. Mustang Alpha",
    Description: "Inspired by Consolidated Outland CEO Silas Koerner’s cutting edge vision, the Mustang Alpha is a sleek, stylish spacecraft that uses ultralight alloys to push power ratios to the limits, albeit sometimes unsafely. And now, with the optional Cargo Carrier, you can have the Alpha’s advantages without sacrificing carrying capacity.",
    Career: "Multi-Role",
    Role: "Starter / Light Freight",
    Size: 2,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: .95,
        PersonalInventory: .95
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 34221,
    ComponentsMass: 4780,
    Dimensions: {
        Length: 21.5,
        Width: 18,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .55,
            Energy: 1.05,
            Distortion: 1.05
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1.3
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1850,
                body: 1850
            },
            Parts: {
                cockpit_glass_frame: 80,
                cockpit_glass_frame_inner: 1,
                nacelle_left: 2e3,
                wing_left: 500,
                wing_left_part02: 500,
                wing_left_part03: 50,
                small_wing_left: 75,
                nacelle_right: 1200,
                wing_right: 500,
                wing_right_part02: 500,
                wing_right_part03: 50,
                small_wing_right: 75
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 9150,
                main_thruster_right: 9150
            },
            Retro: {
                retro_thruster_left: 8900,
                retro_thruster_right: 8900
            },
            Maneuvering: {
                mav_thruster_front_upper_left: 8150,
                mav_thruster_front_bottom: 8150,
                mav_thruster_front_lower_left: 8150,
                mav_thruster_front_lower_right: 8150,
                mav_thruster_front_upper_right: 8150,
                mav_thruster_rear_left_bottom: 8150,
                mav_thruster_rear_left_top: 8150,
                mav_thruster_rear_left_side: 8150,
                mav_thruster_rear_top: 8150,
                mav_thruster_rear_right_bottom: 8150,
                mav_thruster_rear_right_top: 8150,
                mav_thruster_rear_right_side: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 72.3,
        Yaw: 53.7,
        Roll: 205.3,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 4835e3,
            Retro: 1672e3,
            Vtol: 0,
            Maneuvering: 11241e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.9,
            Retro: 4.4,
            Strafe: 10.1,
            Up: 10.1,
            Down: 5.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 6e6,
        FuelIntakeRate: 8,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 604.375,
            Retro: 209,
            Vtol: 0,
            Maneuvering: 1405.125
        },
        IntakeToMainFuelRatio: 1.32,
        TimeForIntakesToFillTank: 75e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9148,
            SCMActive: 10752,
            NAV: 18941
        },
        Infrared: {
            Start: 9510
        },
        CrossSection: {
            Front: 3043,
            Side: 10104,
            Top: 12173
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2800,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .675,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 340
    },
    Buy: {
        "New Deal, Lorville": 655200
    }
}, {
    ClassName: "CNOU_Mustang_Beta",
    Name: "C.O. Mustang Beta",
    Description: "The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.06
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 41113,
    ComponentsMass: 5130,
    Dimensions: {
        Length: 21.5,
        Width: 18,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .55,
            Energy: 1.05,
            Distortion: 1.05
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1.3
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1850,
                body: 1850
            },
            Parts: {
                cockpit_glass_frame: 80,
                cockpit_glass_frame_inner: 1,
                nacelle_left: 2e3,
                wing_left: 500,
                wing_left_part02: 500,
                wing_left_part03: 50,
                small_wing_left: 75,
                nacelle_right: 1200,
                wing_right: 500,
                wing_right_part02: 500,
                wing_right_part03: 50,
                small_wing_right: 75
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 9150,
                main_thruster_right: 9150
            },
            Retro: {
                retro_thruster_left: 8900,
                retro_thruster_right: 8900
            },
            Maneuvering: {
                mav_thruster_front_upper_left: 8150,
                mav_thruster_front_bottom: 8150,
                mav_thruster_front_lower_left: 8150,
                mav_thruster_front_lower_right: 8150,
                mav_thruster_front_upper_right: 8150,
                mav_thruster_rear_left_bottom: 8150,
                mav_thruster_rear_left_top: 8150,
                mav_thruster_rear_left_side: 8150,
                mav_thruster_rear_top: 8150,
                mav_thruster_rear_right_bottom: 8150,
                mav_thruster_rear_right_top: 8150,
                mav_thruster_rear_right_side: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 72.3,
        Yaw: 53.7,
        Roll: 205.3,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5711318,
            Retro: 1975041,
            Vtol: 0,
            Maneuvering: 13281e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.9,
            Retro: 4.4,
            Strafe: 10.1,
            Up: 10.1,
            Down: 5.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 8e6,
        FuelIntakeRate: 4,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 713.915,
            Retro: 246.88,
            Vtol: 0,
            Maneuvering: 1660.125
        },
        IntakeToMainFuelRatio: .56,
        TimeForIntakesToFillTank: 2e6
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9148,
            SCMActive: 10752,
            NAV: 18941
        },
        Infrared: {
            Start: 9510
        },
        CrossSection: {
            Front: 3043,
            Side: 10104,
            Top: 12173
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2800,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 3.71,
        ExpeditedClaimTime: 1.24,
        ExpeditedCost: 1800
    },
    Buy: {
        "New Deal, Lorville": 642600
    }
}, {
    ClassName: "CNOU_Mustang_Delta",
    Name: "C.O. Mustang Delta",
    Description: "While it may not be able to go toe to toe with some of the military specific ships, by reinforcing the Mustang’s already strong hull construction with Consolidated Outland’s own line of Cavalry Class Mass Reduction Armor, the Delta has a reduced cross-sectional signature that evens the playing field.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .95,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 38763,
    ComponentsMass: 5880,
    Dimensions: {
        Length: 21.5,
        Width: 18,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .55,
            Energy: 1.05,
            Distortion: 1.05
        },
        SignalMultipliers: {
            Electromagnetic: 1.05,
            Infrared: 1.05,
            CrossSection: 1.05
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1850,
                body: 1850
            },
            Parts: {
                cockpit_glass_frame: 80,
                cockpit_glass_frame_inner: 1,
                nacelle_left: 2e3,
                wing_left: 500,
                wing_left_part02: 500,
                wing_left_part03: 50,
                small_wing_left: 75,
                nacelle_right: 1200,
                wing_right: 500,
                wing_right_part02: 500,
                wing_right_part03: 50,
                small_wing_right: 75
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 9150,
                main_thruster_right: 9150
            },
            Retro: {
                retro_thruster_left: 8900,
                retro_thruster_right: 8900
            },
            Maneuvering: {
                mav_thruster_front_upper_left: 8150,
                mav_thruster_front_bottom: 8150,
                mav_thruster_front_lower_left: 8150,
                mav_thruster_front_lower_right: 8150,
                mav_thruster_front_upper_right: 8150,
                mav_thruster_rear_left_bottom: 8150,
                mav_thruster_rear_left_top: 8150,
                mav_thruster_rear_left_side: 8150,
                mav_thruster_rear_top: 8150,
                mav_thruster_rear_right_bottom: 8150,
                mav_thruster_rear_right_top: 8150,
                mav_thruster_rear_right_side: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 72.3,
        Yaw: 53.7,
        Roll: 205.3,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5534e3,
            Retro: 1916e3,
            Vtol: 0,
            Maneuvering: 12864e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.9,
            Retro: 4.4,
            Strafe: 10.1,
            Up: 10.1,
            Down: 5.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 75e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 691.75,
            Retro: 239.5,
            Vtol: 0,
            Maneuvering: 1608
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10680,
            SCMActive: 15814,
            NAV: 18590
        },
        Infrared: {
            Start: 8248
        },
        CrossSection: {
            Front: 2163,
            Side: 7181,
            Top: 8652
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3200,
        PilotBurstDPS: 1612,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 4.01,
        ExpeditedClaimTime: 1.34,
        ExpeditedCost: 1920
    },
    Buy: {
        "Astro Armada, Area 18": 1228500
    }
}, {
    ClassName: "CNOU_Mustang_Gamma",
    Name: "C.O. Mustang Gamma",
    Description: "Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
    Career: "Competition",
    Role: "Racing",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .95,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 31565,
    ComponentsMass: 1419,
    Dimensions: {
        Length: 21.5,
        Width: 18,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .63,
            Energy: 1.2,
            Distortion: 1.2
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1700,
                body: 1700
            },
            Parts: {
                cockpit_glass_frame: 80,
                cockpit_glass_frame_inner: 1,
                nacelle_left: 2e3,
                wing_left: 500,
                wing_left_part02: 500,
                wing_left_part03: 50,
                small_wing_left: 75,
                nacelle_right: 1200,
                wing_right: 500,
                wing_right_part02: 500,
                wing_right_part03: 50,
                small_wing_right: 75
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 9150,
                main_thruster_center: 9150,
                main_thruster_right: 9150
            },
            Retro: {
                retro_thruster_left: 8900,
                retro_thruster_right: 8900
            },
            Maneuvering: {
                mav_thruster_front_upper_left: 8150,
                mav_thruster_front_bottom: 8150,
                mav_thruster_front_lower_left: 8150,
                mav_thruster_front_lower_right: 8150,
                mav_thruster_front_upper_right: 8150,
                mav_thruster_rear_left_bottom: 8150,
                mav_thruster_rear_left_top: 8150,
                mav_thruster_rear_left_side: 8150,
                mav_thruster_rear_top: 8150,
                mav_thruster_rear_right_bottom: 8150,
                mav_thruster_rear_right_top: 8150,
                mav_thruster_rear_right_side: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 244,
        MaxSpeed: 1230,
        Pitch: 84,
        Yaw: 65,
        Roll: 234,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 4458e3,
            Retro: 14216308e-1,
            Vtol: 0,
            Maneuvering: 10764e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 14,
            Retro: 4.4,
            Strafe: 11.4,
            Up: 11.1,
            Down: 5.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 533,
                BoostSpeedBackward: 273
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 6e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 557.25,
            Retro: 177.704,
            Vtol: 0,
            Maneuvering: 1345.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10504,
            SCMActive: 12515,
            NAV: 21050
        },
        Infrared: {
            Start: 10882
        },
        CrossSection: {
            Front: 2996,
            Side: 9947,
            Top: 11984
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4200,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.28,
        ExpeditedClaimTime: 2.43,
        ExpeditedCost: 3230
    },
    Buy: {
        "Astro Armada, Area 18": 1178100
    }
}, {
    ClassName: "CNOU_Mustang_Omega",
    Name: "C.O. Mustang Omega",
    Description: "Consolidated Outland teamed up with custom tuning company Accelerated Mass Design to create a limited edition racer that features a ramped up fuel intake for faster recycling of the ship’s already impressive boost system. To cap off the collaboration, AMD enlisted resident underground artist Sektor8 to design the dynamic paint job.",
    Career: "Competition",
    Role: "Racing",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .95,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 31565,
    ComponentsMass: 1419,
    Dimensions: {
        Length: 21.5,
        Width: 18,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .63,
            Energy: 1.2,
            Distortion: 1.2
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1700,
                body: 1700
            },
            Parts: {
                cockpit_glass_frame: 80,
                cockpit_glass_frame_inner: 1,
                nacelle_left: 2e3,
                wing_left: 500,
                wing_left_part02: 500,
                wing_left_part03: 50,
                small_wing_left: 75,
                nacelle_right: 1200,
                wing_right: 500,
                wing_right_part02: 500,
                wing_right_part03: 50,
                small_wing_right: 75
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_left: 9150,
                main_thruster_center: 9150,
                main_thruster_right: 9150
            },
            Retro: {
                retro_thruster_left: 8900,
                retro_thruster_right: 8900
            },
            Maneuvering: {
                mav_thruster_front_upper_left: 8150,
                mav_thruster_front_bottom: 8150,
                mav_thruster_front_lower_left: 8150,
                mav_thruster_front_lower_right: 8150,
                mav_thruster_front_upper_right: 8150,
                mav_thruster_rear_left_bottom: 8150,
                mav_thruster_rear_left_top: 8150,
                mav_thruster_rear_left_side: 8150,
                mav_thruster_rear_top: 8150,
                mav_thruster_rear_right_bottom: 8150,
                mav_thruster_rear_right_top: 8150,
                mav_thruster_rear_right_side: 8150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 244,
        MaxSpeed: 1230,
        Pitch: 84,
        Yaw: 65,
        Roll: 234,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 4458e3,
            Retro: 14216308e-1,
            Vtol: 0,
            Maneuvering: 10764e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 14,
            Retro: 4.4,
            Strafe: 11.4,
            Up: 11.1,
            Down: 5.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 533,
                BoostSpeedBackward: 273
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.3,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 6e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 557.25,
            Retro: 177.704,
            Vtol: 0,
            Maneuvering: 1345.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10504,
            SCMActive: 12515,
            NAV: 21050
        },
        Infrared: {
            Start: 10882
        },
        CrossSection: {
            Front: 2996,
            Side: 9947,
            Top: 11984
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4200,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 7.28,
        ExpeditedClaimTime: 2.43,
        ExpeditedCost: 3230
    }
}, {
    ClassName: "CNOU_Nomad",
    Name: "C.O. Nomad",
    Description: "With the versatility of a medium-sized multi-purpose freighter packed into a stylish, compact frame, the Consolidated Outland Nomad is the model of self-sufficiency, the spirit of the open sky, and the perfect solution for anyone yearning to start a brand-new adventure.",
    Career: "Transporter",
    Role: "Light Freight",
    Size: 2,
    Cargo: {
        CargoGrid: 24,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.23
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 228123,
    ComponentsMass: 3181,
    Dimensions: {
        Length: 27,
        Width: 19,
        Height: 10
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 4e3
            },
            Parts: {
                vertical_stabilizer_right: 200,
                vertical_stabilizer_left: 200,
                nose: 4e3,
                wing_left: 500,
                canopy: 200,
                wing_right: 500,
                vertical_stabilizer_right_bottom: 50,
                vertical_stabilizer_left_bottom: 50,
                vertical_stabilizer_left_top: 50,
                vertical_stabilizer_right_top: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 4500,
                thruster_main_left: 4500
            },
            Retro: {
                thruster_retro_right: 4500,
                thruster_retro_left: 4500
            },
            Maneuvering: {
                thruster_mav_right_mid_top: 7250,
                thruster_mav_right_mid_bot: 7250,
                thruster_mav_right_front_top: 7250,
                thruster_mav_right_front_bot: 7250,
                thruster_mav_left_mid_top: 7250,
                thruster_mav_left_mid_bot: 7250,
                thruster_mav_left_front_top: 7250,
                thruster_mav_left_front_bot: 7250,
                thruster_mav_right_rear_top: 7250,
                thruster_mav_right_rear_bot: 7250,
                thruster_mav_left_rear_top: 7250,
                thruster_mav_left_rear_bot: 7250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 205,
        MaxSpeed: 1100,
        Pitch: 45,
        Yaw: 45,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 23e6,
            Retro: 8e6,
            Vtol: 0,
            Maneuvering: 36e6
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10,
            Retro: 3.5,
            Strafe: 6,
            Up: 7.7,
            Down: 4.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 32799999999999996e-9,
        FuelIntakeRate: 16,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2875,
            Retro: 1e3,
            Vtol: 0,
            Maneuvering: 4500
        },
        IntakeToMainFuelRatio: .56,
        TimeForIntakesToFillTank: 205e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6966,
            SCMActive: 8236,
            NAV: 14592
        },
        Infrared: {
            Start: 7626
        },
        CrossSection: {
            Front: 3302,
            Side: 6604,
            Top: 9712
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4500,
        PilotBurstDPS: 1637,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 16460
    },
    Insurance: {
        StandardClaimTime: 3.95,
        ExpeditedClaimTime: 1.32,
        ExpeditedCost: 2687
    },
    Buy: {
        "New Deal, Lorville": 1512e3
    }
}, {
    ClassName: "CRUS_Intrepid",
    Name: "Crusader Intrepid",
    Description: "For those eager to meet their future head on, the renowned ship engineers at Crusader Industries proudly present the Intrepid. A bold ship ready to tackle any number of jobs and conquer numerous challenges, the Intrepid features efficient cargo space and comfortable living quarters to make the most of your solo journey across the stars.",
    Career: "Starter",
    Role: "Starter",
    Size: 2,
    Cargo: {
        CargoGrid: 8,
        CargoContainers: 0,
        ExternalStorage: 1.5,
        PersonalInventory: 2
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 77653,
    ComponentsMass: 1770.2,
    Dimensions: {
        Length: 23.2,
        Width: 20.3,
        Height: 6.2
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 3300
            },
            Parts: {
                plating_top_central_left: 50,
                plating_top_central_right: 50,
                plating_weapon: 100,
                wing_front_right: 100,
                nose: 3300,
                canopy: 150,
                wing_front_left: 100,
                rear: 3300,
                engines_left: 700,
                engines_right: 700,
                plating_engines_left: 50,
                plating_engines_right: 50,
                rear_fin_left: 50,
                rear_fin_right: 50,
                wing_left: 1e3,
                wing_right: 1e3,
                wing_top_left: 450,
                vtol_left: 200,
                wing_top_right: 450,
                vtol_right: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 1200,
                thruster_main_aux_03_left: 1200,
                thruster_main_aux_02_left: 1200,
                thruster_main_aux_01_left: 1200,
                thruster_main_right: 1200,
                thruster_main_aux_03_right: 1200,
                thruster_main_aux_02_right: 1200,
                thruster_main_aux_01_right: 1200
            },
            Retro: {
                thruster_retro_left: 800,
                thruster_retro_right: 800
            },
            Vtol: {
                thruster_vtol_mav_left: 1200,
                thruster_vtol_mav_right: 1200
            },
            Maneuvering: {
                thruster_mav_bottom_front_right: 800,
                thruster_mav_side_front_right: 800,
                thruster_mav_top_front_right: 800,
                thruster_mav_bottom_front_left: 800,
                thruster_mav_side_front_left: 800,
                thruster_mav_top_front_left: 800,
                thruster_mav_bottom_rear_left: 800,
                thruster_mav_side_rear_left: 800,
                thruster_mav_bottom_rear_right: 800,
                thruster_mav_side_rear_right: 800,
                thruster_mav_top_rear_left: 800,
                thruster_mav_top_rear_right: 800
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 227,
        MaxSpeed: 1225,
        Pitch: 48,
        Yaw: 48,
        Roll: 145,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 4e6,
            Retro: 3e6,
            Vtol: 5e5,
            Maneuvering: 192e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.6,
            Retro: 3.7,
            Strafe: 5.6,
            Up: 6.5,
            Down: 5.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 455,
                BoostSpeedBackward: 255
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 26e6,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 500,
            Retro: 375,
            Vtol: 62.5,
            Maneuvering: 2400
        },
        IntakeToMainFuelRatio: 6,
        TimeForIntakesToFillTank: 866666.67
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1889,
            SCMActive: 2092,
            NAV: 9422
        },
        Infrared: {
            Start: 10141
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 818,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 5.67,
        ExpeditedClaimTime: 1.42,
        ExpeditedCost: 1850
    },
    "New Ship": "Crusader Intrepid"
}, {
    ClassName: "CRUS_Spirit_A1",
    Name: "Crusader A1 Spirit",
    Description: "Crusader Industries brings its usual commitment to excellence directly to the civilian market with the A1 Spirit, a mid-size multi-purpose starship equipped as a light bomber but packing enough versatility to tackle multiple roles and unpredictable jobs.",
    Career: "Combat",
    Role: "Bomber",
    Size: 3,
    Cargo: {
        CargoGrid: 64,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 2,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 314270.5,
    ComponentsMass: 8426,
    Dimensions: {
        Length: 47.5,
        Width: 44,
        Height: 10
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: .95,
            Distortion: .95
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1.3
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 16500,
                wing_base_left: 10400,
                wing_base_right: 10400
            },
            Parts: {
                nose: 13500,
                rear: 11700,
                tail_left: 1200,
                tail_right: 1200,
                wing_left: 1050,
                vtol_geo_left: 150,
                vtol_flap_geo_left: 150,
                wing_right: 1050,
                vtol_geo_right: 150,
                vtol_flap_geo_right: 150
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_01_left: 16500,
                thruster_main_02_left: 16500,
                thruster_main_03_left: 16500,
                thruster_main_04_left: 16500,
                thruster_main_backplate_left: 16500,
                thruster_main_01_right: 16500,
                thruster_main_02_right: 16500,
                thruster_main_03_right: 16500,
                thruster_main_04_right: 16500,
                thruster_main_backplate_right: 16500
            },
            Retro: {
                thruster_retro_left: 15250,
                thruster_retro_right: 15250
            },
            Vtol: {
                thruster_vtol_aux_front_left: 15e3,
                thruster_vtol_aux_front_right: 15e3,
                thruster_vtol_aux_rear_left: 15e3,
                thruster_vtol_aux_rear_right: 15e3,
                thruster_vtol_main_left: 15e3,
                thruster_vtol_main_right: 15e3
            },
            Maneuvering: {
                thruster_front_bottom_left: 14350,
                thruster_front_bottom_right: 14350,
                thruster_front_top_left: 14350,
                thruster_front_side_left: 14350,
                thruster_front_top_right: 14350,
                thruster_front_side_right: 14350,
                thruster_rear_side_left: 14350,
                thruster_rear_side_right: 14350,
                thruster_rear_bottom_left: 14350,
                thruster_rear_top_left: 14350,
                thruster_rear_bottom_right: 14350,
                thruster_rear_top_right: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 203.5,
        MaxSpeed: 1130,
        Pitch: 36,
        Yaw: 36,
        Roll: 101,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 26416e3,
            Retro: 1e7,
            Vtol: 184e5,
            Maneuvering: 204e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.3,
            Retro: 3.1,
            Strafe: 3.1,
            Up: 4.1,
            Down: 3.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 405,
                BoostSpeedBackward: 212
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .7,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 45e6,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 12.5,
            Retro: 2.5,
            Vtol: 7.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3302,
            Retro: 1250,
            Vtol: 2300,
            Maneuvering: 2550
        },
        IntakeToMainFuelRatio: .91,
        TimeForIntakesToFillTank: 15e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9212,
            SCMActive: 10749,
            NAV: 29336
        },
        Infrared: {
            Start: 19871
        },
        CrossSection: {
            Front: 4940,
            Side: 24700,
            Top: 23660
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 2735,
        TurretsBurstDPS: 656,
        TotalMissilesDmg: 477126
    },
    Insurance: {
        StandardClaimTime: 6.75,
        ExpeditedClaimTime: 2.25,
        ExpeditedCost: 3375
    },
    "New Ship": "Crusader A1 Spirit",
    Buy: {
        "Crusader Showroom, Orison": 4961250
    }
}, {
    ClassName: "CRUS_Spirit_C1",
    Name: "Crusader C1 Spirit",
    Description: "Crusader Industries brings its usual commitment to excellence directly to the civilian market with the C1 Spirit, a mid-size multi-purpose starship built for cargo transport and delivery but packing enough versatility to tackle multiple roles and unpredictable jobs.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 64,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.46
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 314270.5,
    ComponentsMass: 5466,
    Dimensions: {
        Length: 47.5,
        Width: 44,
        Height: 10
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: .95,
            Distortion: .95
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1.3
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 16500,
                wing_base_left: 10400,
                wing_base_right: 10400
            },
            Parts: {
                nose: 13500,
                rear: 11700,
                tail_left: 1200,
                tail_right: 1200,
                wing_left: 1050,
                vtol_geo_left: 150,
                vtol_flap_geo_left: 150,
                wing_right: 1050,
                vtol_geo_right: 150,
                vtol_flap_geo_right: 150
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_01_left: 16500,
                thruster_main_02_left: 16500,
                thruster_main_03_left: 16500,
                thruster_main_04_left: 16500,
                thruster_main_backplate_left: 16500,
                thruster_main_01_right: 16500,
                thruster_main_02_right: 16500,
                thruster_main_03_right: 16500,
                thruster_main_04_right: 16500,
                thruster_main_backplate_right: 16500
            },
            Retro: {
                thruster_retro_left: 15250,
                thruster_retro_right: 15250
            },
            Vtol: {
                thruster_vtol_aux_front_left: 15e3,
                thruster_vtol_aux_front_right: 15e3,
                thruster_vtol_aux_rear_left: 15e3,
                thruster_vtol_aux_rear_right: 15e3,
                thruster_vtol_main_left: 15e3,
                thruster_vtol_main_right: 15e3
            },
            Maneuvering: {
                thruster_front_bottom_left: 14350,
                thruster_front_bottom_right: 14350,
                thruster_front_top_left: 14350,
                thruster_front_side_left: 14350,
                thruster_front_top_right: 14350,
                thruster_front_side_right: 14350,
                thruster_rear_side_left: 14350,
                thruster_rear_side_right: 14350,
                thruster_rear_bottom_left: 14350,
                thruster_rear_top_left: 14350,
                thruster_rear_bottom_right: 14350,
                thruster_rear_top_right: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 203.5,
        MaxSpeed: 1130,
        Pitch: 36,
        Yaw: 36,
        Roll: 101,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 26416e3,
            Retro: 1e7,
            Vtol: 184e5,
            Maneuvering: 204e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.3,
            Retro: 3.1,
            Strafe: 3.1,
            Up: 4.1,
            Down: 3.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 405,
                BoostSpeedBackward: 212
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .7,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 45e6,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 12.5,
            Retro: 2.5,
            Vtol: 7.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3302,
            Retro: 1250,
            Vtol: 2300,
            Maneuvering: 2550
        },
        IntakeToMainFuelRatio: .91,
        TimeForIntakesToFillTank: 15e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8231,
            SCMActive: 9971,
            NAV: 28355
        },
        Infrared: {
            Start: 18831
        },
        CrossSection: {
            Front: 4940,
            Side: 24700,
            Top: 23660
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 2735,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 10106
    },
    Insurance: {
        StandardClaimTime: 6.75,
        ExpeditedClaimTime: 2.25,
        ExpeditedCost: 3375
    },
    "New Ship": "Crusader C1 Spirit",
    Buy: {
        "Crusader Showroom, Orison": 3118500
    }
}, {
    ClassName: "CRUS_Starfighter_Inferno",
    Name: "Crusader Ares Star Fighter Inferno",
    Description: "Whether heading up a crew or hunting big ships solo, the Ares Inferno is a force to be reckoned with. This ballistic Gatling-equipped variant tears through gunship armor and turns smaller fighters to dust in seconds.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .86,
        PersonalInventory: .86
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 329001,
    ComponentsMass: 8890,
    Dimensions: {
        Length: 27,
        Width: 30,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 8e3
            },
            Parts: {
                tail: 8e3,
                right_wing: 7e3,
                lower_wing_right: 1e3,
                lower_wing_left: 1e3,
                left_wing: 7e3,
                canopy_translation: 200,
                nacelle_right_debris: 200,
                nacelle_left_debris: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 22200,
                thruster_main_left: 22200
            },
            Retro: {
                retro_thruster_right: 22200,
                retro_thruster_left: 22200
            },
            Maneuvering: {
                thruster_mav_wing_right_bottom: 22200,
                thruster_mav_wing_right: 22200,
                thruster_mav_wing_left: 22200,
                thruster_mav_wing_left_bottom: 22200,
                thruster_mav_tail_top_right: 22200,
                thruster_mav_tail_top_left: 22200,
                thruster_mav_tail_bottom_left: 22200,
                thruster_mav_nose_top_right: 22200,
                thruster_mav_nose_top_left: 22200,
                thruster_mav_nose_bottom_right: 22200,
                thruster_mav_nose_bottom_left: 22200,
                thruster_mav_tail_bottom_right: 22200
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 210,
        MaxSpeed: 1100,
        Pitch: 43,
        Yaw: 38,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2982e4,
            Retro: 116e5,
            Vtol: 0,
            Maneuvering: 26604e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9,
            Retro: 3.5,
            Strafe: 7.5,
            Up: 7,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 220
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 45e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3727.5,
            Retro: 1450,
            Vtol: 0,
            Maneuvering: 3325.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10896,
            SCMActive: 14042,
            NAV: 26376
        },
        Infrared: {
            Start: 8770
        },
        CrossSection: {
            Front: 2303,
            Side: 12794,
            Top: 17608
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 9480,
        PilotBurstDPS: 4270,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 56072
    },
    Insurance: {
        StandardClaimTime: 10.3,
        ExpeditedClaimTime: 3.43,
        ExpeditedCost: 7311
    },
    Buy: {
        "Crusader Showroom, Orison": 4725e3
    }
}, {
    ClassName: "CRUS_Starfighter_Ion",
    Name: "Crusader Ares Star Fighter Ion",
    Description: "Spark fear in the corridors of the most formidable gunships and frigates with the Ares Ion. This laser-equipped variant delivers extremely powerful shots to quickly disable the shields of even the biggest enemy vessels.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .86,
        PersonalInventory: .86
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 329001,
    ComponentsMass: 9030,
    Dimensions: {
        Length: 27,
        Width: 30,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 8e3
            },
            Parts: {
                tail: 8e3,
                right_wing: 7e3,
                lower_wing_right: 1e3,
                lower_wing_left: 1e3,
                left_wing: 7e3,
                canopy_translation: 200,
                nacelle_right_debris: 200,
                nacelle_left_debris: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 22200,
                thruster_main_left: 22200
            },
            Retro: {
                retro_thruster_right: 22200,
                retro_thruster_left: 22200
            },
            Maneuvering: {
                thruster_mav_wing_right_bottom: 22200,
                thruster_mav_wing_right: 22200,
                thruster_mav_wing_left: 22200,
                thruster_mav_wing_left_bottom: 22200,
                thruster_mav_tail_top_right: 22200,
                thruster_mav_tail_top_left: 22200,
                thruster_mav_tail_bottom_left: 22200,
                thruster_mav_nose_top_right: 22200,
                thruster_mav_nose_top_left: 22200,
                thruster_mav_nose_bottom_right: 22200,
                thruster_mav_nose_bottom_left: 22200,
                thruster_mav_tail_bottom_right: 22200
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 210,
        MaxSpeed: 1100,
        Pitch: 43,
        Yaw: 38,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2982e4,
            Retro: 116e5,
            Vtol: 0,
            Maneuvering: 26604e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9,
            Retro: 3.5,
            Strafe: 7.5,
            Up: 7,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 220
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 45e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3727.5,
            Retro: 1450,
            Vtol: 0,
            Maneuvering: 3325.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12076,
            SCMActive: 15294,
            NAV: 27556
        },
        Infrared: {
            Start: 8870
        },
        CrossSection: {
            Front: 2448,
            Side: 13600,
            Top: 12240
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 9480,
        PilotBurstDPS: 1766,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 56072
    },
    Insurance: {
        StandardClaimTime: 10.3,
        ExpeditedClaimTime: 3.43,
        ExpeditedCost: 7311
    },
    Buy: {
        "Crusader Showroom, Orison": 4725e3
    }
}, {
    ClassName: "CRUS_Starlifter_A2",
    Name: "Crusader A2 Hercules Starlifter",
    Description: "The A2 gunship has been used to devastating effect in airborne assaults, search and rescue operations, and landing initiatives. With more than double the firepower of the M2, and a custom bomb bay capable of delivering a staggering payload, the A2 caters to anyone hauling massive amounts of cargo through potentially unfriendly skies.",
    Career: "Combat",
    Role: "Bomber",
    Size: 5,
    Cargo: {
        CargoGrid: 216,
        CargoContainers: 0,
        ExternalStorage: 18,
        PersonalInventory: 9.14
    },
    Crew: 8,
    WeaponCrew: 7,
    OperationsCrew: 0,
    Mass: 313924006e-2,
    ComponentsMass: 25694,
    Dimensions: {
        Length: 94,
        Width: 70,
        Height: 23
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: .8,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 65250
            },
            Parts: {
                Tail_Left: 5220,
                Tail_Right: 5220,
                Wing_Left: 8845,
                Wing_Right: 8845,
                Nose_Mesh: 10150,
                front_door_left: 4500,
                front_door_right: 4500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_smaller_right: 22200,
                thruster_main_smaller_left: 22200,
                thruster_main_small_right: 22200,
                thruster_main_small_left: 22200,
                thruster_main_right_2: 22200,
                thruster_main_right_1: 22200,
                thruster_main_left_2: 22200,
                thruster_main_left_1: 22200
            },
            Retro: {
                thruster_retro_right: 22200,
                thruster_retro_left: 22200
            },
            Vtol: {
                thruster_VTOL_wing_left: 22200,
                thruster_VTOL_wing_right: 22200,
                thruster_VTOL_side_right: 22200,
                thruster_VTOL_side_left: 22200
            },
            Maneuvering: {
                thruster_top_rear_right: 22200,
                thruster_top_rear_left: 22200,
                thruster_top_mid_right: 22200,
                thruster_top_mid_left: 22200,
                thruster_side_rear_right: 22200,
                thruster_side_rear_left: 22200,
                thruster_side_front_right: 22200,
                thruster_side_front_left: 22200,
                thruster_bottom_rear_right: 22200,
                thruster_bottom_rear_left: 22200,
                thruster_bottom_front_left: 22200,
                thruster_top_front_left: 22200,
                thruster_bottom_front_right: 22200,
                thruster_top_front_right: 22200
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 160,
        MaxSpeed: 950,
        Pitch: 20,
        Yaw: 18,
        Roll: 30,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 217148286,
            Retro: 134e5,
            Vtol: 57937750,
            Maneuvering: 195e6
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 2,
            Strafe: 2.5,
            Up: 2.5,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 170
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 132e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 66e5,
        FuelBurnRatePer10KNewton: {
            Main: 10,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 21576.317,
            Retro: 1675,
            Vtol: 7242.219,
            Maneuvering: 24375
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 37672,
            SCMActive: 43417,
            NAV: 53119
        },
        Infrared: {
            Start: 25679
        },
        CrossSection: {
            Front: 8966,
            Side: 27795,
            Top: 37657
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 156600,
        PilotBurstDPS: 3073,
        TurretsBurstDPS: 13726,
        TotalMissilesDmg: 2273188
    },
    Insurance: {
        StandardClaimTime: 39.24,
        ExpeditedClaimTime: 13.08,
        ExpeditedCost: 20200
    },
    Buy: {
        "Crusader Showroom, Orison": 44296876
    }
}, {
    ClassName: "CRUS_Starlifter_C2",
    Name: "Crusader C2 Hercules Starlifter",
    Description: "Utilizing the patented Hercules military-grade spaceframe and expanding cargo capacity, while sacrificing barely any firepower, the C2 has taken the private sector by storm. It has become the industry standard for racing teams, ship dealers and manufacturers, construction orgs, mining corporations, and even large-scale touring entertainment outfits.",
    Career: "Transporter",
    Role: "Courier",
    Size: 5,
    Cargo: {
        CargoGrid: 696,
        CargoContainers: 0,
        ExternalStorage: 9,
        PersonalInventory: 2.89
    },
    Crew: 2,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 313924006e-2,
    ComponentsMass: 20300,
    Dimensions: {
        Length: 94,
        Width: 70,
        Height: 23
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 45e3
            },
            Parts: {
                Tail_Left: 3600,
                Tail_Right: 3600,
                Wing_Left: 6600,
                Wing_Right: 6600,
                Nose_Mesh: 7e3,
                front_door_left: 4500,
                front_door_right: 4500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_smaller_right: 22200,
                thruster_main_smaller_left: 22200,
                thruster_main_small_right: 22200,
                thruster_main_small_left: 22200,
                thruster_main_right_2: 22200,
                thruster_main_right_1: 22200,
                thruster_main_left_2: 22200,
                thruster_main_left_1: 22200
            },
            Retro: {
                thruster_retro_right: 22200,
                thruster_retro_left: 22200
            },
            Vtol: {
                thruster_VTOL_wing_left: 22200,
                thruster_VTOL_wing_right: 22200,
                thruster_VTOL_side_right: 22200,
                thruster_VTOL_side_left: 22200
            },
            Maneuvering: {
                thruster_top_rear_right: 22200,
                thruster_top_rear_left: 22200,
                thruster_top_mid_right: 22200,
                thruster_top_mid_left: 22200,
                thruster_side_rear_right: 22200,
                thruster_side_rear_left: 22200,
                thruster_side_front_right: 22200,
                thruster_side_front_left: 22200,
                thruster_bottom_rear_right: 22200,
                thruster_bottom_rear_left: 22200,
                thruster_bottom_front_left: 22200,
                thruster_top_front_left: 22200,
                thruster_bottom_front_right: 22200,
                thruster_top_front_right: 22200
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 160,
        MaxSpeed: 950,
        Pitch: 20,
        Yaw: 18,
        Roll: 30,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 217148286,
            Retro: 134e5,
            Vtol: 57937750,
            Maneuvering: 195e6
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 2,
            Strafe: 2.5,
            Up: 2.5,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 170
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 132e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 66e5,
        FuelBurnRatePer10KNewton: {
            Main: 10,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 21576.317,
            Retro: 1675,
            Vtol: 7242.219,
            Maneuvering: 24375
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 21452,
            SCMActive: 24853,
            NAV: 36899
        },
        Infrared: {
            Start: 14749
        },
        CrossSection: {
            Front: 5495,
            Side: 17032,
            Top: 23078
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 112200,
        PilotBurstDPS: 3073,
        TurretsBurstDPS: 3687,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 32.7,
        ExpeditedClaimTime: 10.9,
        ExpeditedCost: 17580
    },
    Buy: {
        "Astro Armada, Area 18": 189e5,
        "Crusader Showroom, Orison": 189e5
    }
}, {
    ClassName: "CRUS_Starlifter_M2",
    Name: "Crusader M2 Hercules Starlifter",
    Description: "The M2 Hercules is the UEE's premier tactical starlifter. The large-scale transport's potent combination of capacity, maneuverability, durability, and robust weapons package assures your cargo and crew get to where they’re going in one piece.",
    Career: "Transporter",
    Role: "Courier",
    Size: 5,
    Cargo: {
        CargoGrid: 522,
        CargoContainers: 0,
        ExternalStorage: 18,
        PersonalInventory: 3.43
    },
    Crew: 3,
    WeaponCrew: 3,
    OperationsCrew: 0,
    Mass: 313924006e-2,
    ComponentsMass: 17510,
    Dimensions: {
        Length: 94,
        Width: 70,
        Height: 23
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .45,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 58500
            },
            Parts: {
                Tail_Left: 4680,
                Tail_Right: 4680,
                Wing_Left: 7930,
                Wing_Right: 7930,
                Nose_Mesh: 9100,
                front_door_left: 4500,
                front_door_right: 4500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_smaller_right: 22200,
                thruster_main_smaller_left: 22200,
                thruster_main_small_right: 22200,
                thruster_main_small_left: 22200,
                thruster_main_right_2: 22200,
                thruster_main_right_1: 22200,
                thruster_main_left_2: 22200,
                thruster_main_left_1: 22200
            },
            Retro: {
                thruster_retro_right: 22200,
                thruster_retro_left: 22200
            },
            Vtol: {
                thruster_VTOL_wing_left: 22200,
                thruster_VTOL_wing_right: 22200,
                thruster_VTOL_side_right: 22200,
                thruster_VTOL_side_left: 22200
            },
            Maneuvering: {
                thruster_top_rear_right: 22200,
                thruster_top_rear_left: 22200,
                thruster_top_mid_right: 22200,
                thruster_top_mid_left: 22200,
                thruster_side_rear_right: 22200,
                thruster_side_rear_left: 22200,
                thruster_side_front_right: 22200,
                thruster_side_front_left: 22200,
                thruster_bottom_rear_right: 22200,
                thruster_bottom_rear_left: 22200,
                thruster_bottom_front_left: 22200,
                thruster_top_front_left: 22200,
                thruster_bottom_front_right: 22200,
                thruster_top_front_right: 22200
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 160,
        MaxSpeed: 950,
        Pitch: 20,
        Yaw: 18,
        Roll: 30,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 217148286,
            Retro: 134e5,
            Vtol: 57937750,
            Maneuvering: 195e6
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 2,
            Strafe: 2.5,
            Up: 2.5,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 320,
                BoostSpeedBackward: 170
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 132e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 66e5,
        FuelBurnRatePer10KNewton: {
            Main: 10,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 21576.317,
            Retro: 1675,
            Vtol: 7242.219,
            Maneuvering: 24375
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 27834,
            SCMActive: 32315,
            NAV: 43281
        },
        Infrared: {
            Start: 21579
        },
        CrossSection: {
            Front: 7564,
            Side: 23448,
            Top: 31768
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 104400,
        PilotBurstDPS: 3073,
        TurretsBurstDPS: 5738,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 25,
        ExpeditedClaimTime: 8,
        ExpeditedCost: 1810
    },
    Buy: {
        "Crusader Showroom, Orison": 29484e3,
        "New Deal, Lorville": 29484e3
    }
}, {
    ClassName: "CRUS_Star_Runner",
    Name: "Crusader Mercury Star Runner",
    Description: "If you need it there fast and unscathed, the Mercury checks all the boxes expected of a dependable courier vessel and then some. Built with the same engineering and design principles that have made Crusader Industries the go-to manufacturer for galactic transport on any scale, the Mercury Star Runner will let you stay ahead of schedule, trouble, and the competition.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 4,
    Cargo: {
        CargoGrid: 114,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.93
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 715175,
    ComponentsMass: 12362,
    Dimensions: {
        Length: 56,
        Width: 51,
        Height: 16
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 12e3
            },
            Parts: {
                body: 12e3,
                wing_right: 6600,
                wing_left: 6600,
                body_engine: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_extra_right: 18500,
                thruster_main_extra_left: 18500,
                thruster_main_right: 18500,
                thruster_main_left: 18500
            },
            Retro: {
                thruster_retro_right: 18500,
                thruster_retro_left: 18500
            },
            Vtol: {
                thruster_vtol_rear_bottom_right: 18500,
                thruster_vtol_front_bottom_right: 18500,
                thruster_vtol_rear_bottom_left: 18500,
                thruster_vtol_front_bottom_left: 18500
            },
            Maneuvering: {
                thruster_mav_rear_top_right: 18500,
                thruster_mav_rear_side_right: 18500,
                thruster_mav_front_top_right: 18500,
                thruster_mav_front_side_right: 18500,
                thruster_mav_rear_top_left: 18500,
                thruster_mav_rear_side_left: 18500,
                thruster_mav_front_top_left: 18500,
                thruster_mav_front_side_left: 18500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1200,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 4475e4,
            Retro: 2235e4,
            Vtol: 9854624,
            Maneuvering: 30799640
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 6.3,
            Retro: 3.1,
            Strafe: 2.6,
            Up: 3.1,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 410,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 1e8,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 26e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 5593.75,
            Retro: 2793.75,
            Vtol: 1231.828,
            Maneuvering: 3849.955
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 14551,
            SCMActive: 16953,
            NAV: 30031
        },
        Infrared: {
            Start: 14999
        },
        CrossSection: {
            Front: 5106,
            Side: 16023,
            Top: 17608
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 56100,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 11734
    },
    Insurance: {
        StandardClaimTime: 21,
        ExpeditedClaimTime: 7,
        ExpeditedCost: 9393
    },
    Buy: {
        "Crusader Showroom, Orison": 12285e3
    }
}, {
    ClassName: "DRAK_Buccaneer",
    Name: "Drake Buccaneer",
    Description: "The Buccaneer has been designed from the ground up to fly and fight the way you live. No leather interiors or hyperpillows here: the Bucc is a scrapper designed to maneuver and fight above its weight class. This rough-and-tumble frontier fighter can be maintained in the worst of conditions in order to keep real, working space crews alive.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .25,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 40527,
    ComponentsMass: 3473,
    Dimensions: {
        Length: 15,
        Width: 16,
        Height: 4.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1800,
                Nose: 1800
            },
            Parts: {
                Rear_Landing_Gear_Door_Left: 300,
                Rear_Landing_Gear_Door_Bottom: 300,
                Rear_Landing_Gear_Door_Right: 300,
                Engine_Left: 1e3,
                Wing_Left: 400,
                Engine_Right: 1e3,
                Wing_Right: 400,
                intake_left: 400,
                intake_right: 400,
                tailFlap_left: 40,
                tailFlap_right: 40,
                landing_gear_left_attach: 200,
                landing_gear_right_attach: 200,
                Front_Landing_Gear_Door_Center: 100,
                Front_Landing_Gear_Door_Left: 100,
                Front_Landing_Gear_Door_Right: 100,
                Cockpit_Canopy_Door: 100,
                landing_gear_front_attach: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Left_Main_Thruster: 10750,
                Right_Main_Thruster: 10750
            },
            Retro: {
                Left_Main_Retro: 9850,
                Right_Main_Retro: 9850
            },
            Maneuvering: {
                "Man_Thruster_Left_Main_Front_X-": 9150,
                "Man_Thruster_Left_Main_Front_Z+": 9150,
                "Man_Thruster_Left_Main_Rear_Bot_X-": 9150,
                "Man_Thruster_Left_Main_Rear_Bot_Z+": 9150,
                "Man_Thruster_Left_Main_Rear_Top_X-": 9150,
                "Man_Thruster_Left_Main_Top_Front_Z-": 9150,
                "Man_Thruster_Left_Main_Top_Rear_Z-": 9150,
                "Man_Thruster_Right_Main_Bot_Front_Z+": 9150,
                "Man_Thruster_Right_Main_Bot_Rear_Z+": 9150,
                "Man_Thruster_Right_Main_Front_X+": 9150,
                "Man_Thruster_Right_Main_Rear_Bot_X+": 9150,
                "Man_Thruster_Right_Main_Rear_Top_X+": 9150,
                "Man_Thruster_Right_Main_Top_Front_Z-": 9150,
                "Man_Thruster_Right_Main_Top_Rear_Z-": 9150,
                "Man_Thruster_Left_Intake_Bot_Z+": 9150,
                "Man_Thruster_Left_Intake_Top_Z-": 9150,
                "Man_Thruster_Right_Intake_Bot_Z+": 9150,
                "Man_Thruster_Right_Intake_Top_Z-": 9150,
                "Man_Thruster_Cockpit_Bot_X-": 9150,
                "Man_Thruster_Cockpit_Bot_X+": 9150,
                "Man_Thruster_Cockpit_Bot_Z+": 9150,
                "Man_Thruster_Cockpit_Top_X-": 9150,
                "Man_Thruster_Cockpit_Top_X+": 9150,
                "Man_Thruster_Cockpit_Top_Z-": 9150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 240,
        MaxSpeed: 1400,
        Pitch: 50,
        Yaw: 42,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 624e4,
            Retro: 1456e3,
            Vtol: 0,
            Maneuvering: 8990400
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15,
            Retro: 3.5,
            Strafe: 4.5,
            Up: 6,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 600,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.7,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .4,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 75e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 30
        },
        FuelUsagePerSecond: {
            Main: 780,
            Retro: 182,
            Vtol: 0,
            Maneuvering: 1123.8
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8069,
            SCMActive: 9810,
            NAV: 15602
        },
        Infrared: {
            Start: 9115
        },
        CrossSection: {
            Front: 2439,
            Side: 9145,
            Top: 8535
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 2760,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 8098
    },
    Insurance: {
        StandardClaimTime: 5.4,
        ExpeditedClaimTime: 1.8,
        ExpeditedCost: 2700
    },
    Buy: {
        "New Deal, Lorville": 1663200
    }
}, {
    ClassName: "DRAK_Caterpillar",
    Name: "Drake Caterpillar",
    Description: "First introduced in 2871, Drake Interplanetary's Caterpillar has long proven to be a reliable, cost-effective multi-role vessel, capable of being outfitted for everything from mercantile operations to combat support. Long hailed as a hard-fought alternative to the ubiquitous Hull series, the Caterpillar is a freighter that doesn't skimp on weaponry or customization.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 5,
    Cargo: {
        CargoGrid: 576,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 12.99
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 1660063,
    ComponentsMass: 20300,
    Dimensions: {
        Length: 111.5,
        Width: 39.5,
        Height: 13.4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6e4
            },
            Parts: {
                Engine_Center_Left: 1500,
                Engine_Center_Right: 1500,
                Engine_Right: 1500,
                Engine_Left: 1500,
                Command_Module: 1200,
                Nose: 25500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_center_left: 14500,
                thruster_main_center_right: 14500,
                thruster_main_right: 14500,
                thruster_main_left: 14500
            },
            Retro: {
                thruster_set2_retro_bottom: 13850,
                thruster_set1_retro_bottom: 13850,
                thruster_set1_retro_top_left: 13850,
                thruster_set1_retro_top_right: 13850,
                thruster_set2_retro_top_left: 13850,
                thruster_set2_retro_top_right: 13850
            },
            Maneuvering: {
                thruster_set3_bottom_A: 13670,
                thruster_set3_bottom_B: 13670,
                thruster_set3_bottom_left: 13670,
                thruster_set3_bottom_right: 13670,
                thruster_set3_top: 13670,
                thruster_set3_top_left: 13670,
                thruster_set3_top_right: 13670,
                thruster_set4_top: 13670,
                thruster_set4_top_left: 13670,
                thruster_set4_top_right: 13670,
                thruster_set4_bottom_right: 13670,
                thruster_set4_bottom_B: 13670,
                thruster_set4_bottom_left: 13670,
                thruster_set4_bottom_A: 13670,
                thruster_set1_bottom_A: 13670,
                thruster_set1_bottom_B: 13670,
                thruster_set1_bottom_left: 13670,
                thruster_set1_bottom_right: 13670,
                thruster_set1_top: 13670,
                thruster_set1_top_left: 13670,
                thruster_set1_top_right: 13670,
                thruster_set2_bottom_A: 13670,
                thruster_set2_bottom_B: 13670,
                thruster_set2_bottom_left: 13670,
                thruster_set2_bottom_right: 13670,
                thruster_set2_top: 13670,
                thruster_set2_top_left: 13670,
                thruster_set2_top_right: 13670
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 130,
        MaxSpeed: 900,
        Pitch: 16,
        Yaw: 16,
        Roll: 25,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 588e5,
            Retro: 252e5,
            Vtol: 0,
            Maneuvering: 1092e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.6,
            Retro: 1.5,
            Strafe: 1.5,
            Up: 2,
            Down: 1.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 300,
                BoostSpeedBackward: 120
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.3,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 2505e5,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 86e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 7.5,
            Vtol: 0,
            Maneuvering: 35
        },
        FuelUsagePerSecond: {
            Main: 7350,
            Retro: 3150,
            Vtol: 0,
            Maneuvering: 13650
        },
        IntakeToMainFuelRatio: .68,
        TimeForIntakesToFillTank: 501e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 29871,
            SCMActive: 35325,
            NAV: 45361
        },
        Infrared: {
            Start: 24185
        },
        CrossSection: {
            Front: 5952,
            Side: 12362,
            Top: 45786
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 168300,
        PilotBurstDPS: 2458,
        TurretsBurstDPS: 3272,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 18.63,
        ExpeditedClaimTime: 6.21,
        ExpeditedCost: 7730
    },
    Buy: {
        "New Deal, Lorville": 12474e3
    }
}, {
    ClassName: "DRAK_Corsair",
    Name: "Drake Corsair",
    Description: "Heed the call of uncharted space and harness the spirit of exploration with the Drake Corsair. Utilizing a unique asymmetrical hull design, this versatile explorer can go wherever the winds of adventure may steer you.",
    Career: "Exploration",
    Role: "Expedition",
    Size: 4,
    Cargo: {
        CargoGrid: 72,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.6
    },
    Crew: 4,
    WeaponCrew: 3,
    OperationsCrew: 0,
    Mass: 445456,
    ComponentsMass: 10012,
    Dimensions: {
        Length: 55,
        Width: 56,
        Height: 11
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 15e3
            },
            Parts: {
                landing_gear_door_front_left_a: 300,
                landing_gear_door_front_left_b: 300,
                landing_gear_door_front_right_a: 300,
                landing_gear_door_front_right_b: 300,
                nose: 15e3,
                yaw_mesh_base: 2500,
                pitch_mesh: 300,
                tail: 15e3,
                nacelle_left_mesh: 12500,
                wing_top_hinge_mesh: 2500,
                wing_bottom_hinge_b_mesh: 2500,
                nacelle_right_mesh: 12500,
                right_wing_mesh: 5e3,
                rignt_wing_tip_antenna_mesh: 500,
                right_wing_top_flap_mesh: 500,
                rear_rail_door_mesh: 500,
                front_rail_door_mesh: 500,
                right_wing_bottom_flap_mesh: 500,
                right_wing_rotator_mesh: 2500,
                landing_gear_door_left_rotator_mesh: 500,
                landing_gear_door_left_slider_mesh: 500,
                landing_gear_door_right_rotator_mesh: 500,
                landing_gear_door_right_slider_mesh: 500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_a_left: 24e3,
                main_thruster_c_left: 24e3,
                main_thruster_b_left: 24e3,
                main_thruster_b_right: 24e3,
                main_thruster_a_right: 24e3,
                main_thruster_c_right: 24e3
            },
            Retro: {
                retro_thruster_a_left: 3e4,
                retro_thruster_b_left: 3e4,
                retro_thruster_c_left: 3e4,
                retro_thruster_a_right: 3e4,
                retro_thruster_b_right: 3e4,
                retro_thruster_c_right: 3e4
            },
            Maneuvering: {
                thruster_mav_body_left_bottom: 3e4,
                thruster_mav_body_left_bottom_side: 3e4,
                thruster_mav_body_right_bottom: 3e4,
                thruster_mav_body_right_bottom_side: 3e4,
                thruster_mav_nose_left_bottom: 3e4,
                thruster_mav_nose_left_bottom_side: 3e4,
                thruster_mav_nose_left_top: 3e4,
                thruster_mav_nose_left_top_side: 3e4,
                thruster_mav_nose_right_bottom: 3e4,
                thruster_mav_nose_right_bottom_side: 3e4,
                thruster_mav_nose_right_top: 3e4,
                thruster_mav_nose_right_top_side: 3e4,
                thruster_mav_nacelle_left_bottom: 3e4,
                thruster_mav_nacelle_left_top: 3e4,
                thruster_mav_nacelle_right_bottom: 3e4,
                thruster_mav_nacelle_right_top: 3e4,
                thruster_mav_tail_left_bottom_side: 3e4,
                thruster_mav_tail_left_bottom: 3e4,
                thruster_mav_tail_left_top_side: 3e4,
                thruster_mav_tail_left_top: 3e4,
                thruster_mav_tail_right_top: 3e4,
                thruster_mav_tail_right_top_side: 3e4,
                thruster_mav_tail_right_bottom_side: 3e4,
                thruster_mav_tail_right_bottom: 3e4,
                thruster_mav_body_left_top: 3e4,
                thruster_mav_body_right_top_side: 3e4,
                thruster_mav_body_right_top: 3e4,
                thruster_mav_body_left_top_side: 3e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2319e4,
            Retro: 1158e4,
            Vtol: 0,
            Maneuvering: 4872e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 2.5,
            Strafe: 2.5,
            Up: 3.1,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 116e6,
        FuelIntakeRate: 54,
        QuantumFuelCapacity: 52e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 7.5,
            Vtol: 0,
            Maneuvering: 35
        },
        FuelUsagePerSecond: {
            Main: 2898.75,
            Retro: 1447.5,
            Vtol: 0,
            Maneuvering: 6090
        },
        IntakeToMainFuelRatio: 1.86,
        TimeForIntakesToFillTank: 214814815e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 26205,
            SCMActive: 30387,
            NAV: 41685
        },
        Infrared: {
            Start: 22922
        },
        CrossSection: {
            Front: 3737,
            Side: 12794,
            Top: 29117
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 48800,
        PilotBurstDPS: 8196,
        TurretsBurstDPS: 1968,
        TotalMissilesDmg: 20211
    },
    Insurance: {
        StandardClaimTime: 17.01,
        ExpeditedClaimTime: 5.67,
        ExpeditedCost: 6805
    },
    Dimensions2: {
        Length: 55,
        Width: 27,
        Height: 31
    },
    Buy: {
        "New Deal, Lorville": 6552e3
    }
}, {
    ClassName: "DRAK_Cutlass_Black",
    Name: "Drake Cutlass Black",
    Description: "Drake Interplanetary claims that the Cutlass Black is a low-cost, easy-to-maintain solution for local in-system militia units. The larger-than-average cargo hold, RIO seat and dedicated tractor mount are, the company literature insists, for facilitating search and rescue operations.",
    Career: "Multi-Role",
    Role: "Medium Fighter / Medium Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 46,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 3.68
    },
    Crew: 3,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 246577,
    ComponentsMass: 6780,
    Dimensions: {
        Length: 36,
        Width: 26.5,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6e3,
                Tail: 6e3
            },
            Parts: {
                Wing_Left: 1500,
                Wing_Right: 1500,
                Canopy: 1e3,
                Thruster_Main_Base_Left: 480,
                Thruster_Main_Left: 5e3,
                Thruster_Main_Base_Right: 480,
                Thruster_Main_Right: 5e3,
                Missile_Housing_Right: 900,
                Missile_Housing_Left: 900
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster_Left: 11500,
                Main_Thruster_Right: 11500
            },
            Retro: {
                Main_Retro_Left: 12340,
                Main_Retro_Right: 12340
            },
            Maneuvering: {
                Man_Thruster_Left_Front: 10240,
                Man_Thruster_Right_Front: 10240,
                Man_Thruster_Left_Outer_Bot: 10240,
                Man_Thruster_Left_Outer_Top: 10240,
                Man_Thruster_Left_Wing_Bot: 10240,
                Man_Thruster_Left_Wing_Top: 10240,
                Man_Thruster_Right_Outer_Bot: 10240,
                Man_Thruster_Right_Outer_Top: 10240,
                Man_Thruster_Right_Wing_Bot: 10240,
                Man_Thruster_Right_Wing_Top: 10240,
                Man_Thruster_Right_Rear: 10240,
                Man_Thruster_Right_Center: 10240,
                Man_Thruster_Left_Rear: 10240,
                Man_Thruster_Left_Center: 10240,
                Man_Thruster_Center_Top: 10240,
                Man_Thruster_Center_Bot: 10240,
                Man_Thruster_Left_Front_Bot: 10240,
                Man_Thruster_Left_Front_Top: 10240,
                Man_Thruster_Left_Rear_Bot: 10240,
                Man_Thruster_Left_Rear_Top: 10240,
                Man_Thruster_Right_Front_Bot: 10240,
                Man_Thruster_Right_Front_Top: 10240,
                Man_Thruster_Right_Rear_Bot: 10240,
                Man_Thruster_Right_Rear_Top: 10240,
                Man_Thruster_Left_Tail: 10240,
                Man_Thruster_Right_Tail: 10240
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1125,
        Pitch: 47,
        Yaw: 39,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 13875058,
            Retro: 2077476,
            Vtol: 0,
            Maneuvering: 65788466
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.4,
            Retro: 2.5,
            Strafe: 7.4,
            Up: 6,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 465,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 2800,
            CapacitorRegenPerSec: 100,
            CapacitorIdleCost: 20,
            CapacitorLinearCost: 1,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 28,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 36e6,
        FuelIntakeRate: 20,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 32.5
        },
        FuelUsagePerSecond: {
            Main: 1734.382,
            Retro: 259.684,
            Vtol: 0,
            Maneuvering: 8223.558
        },
        IntakeToMainFuelRatio: 1.15,
        TimeForIntakesToFillTank: 18e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10093,
            SCMActive: 12317,
            NAV: 25573
        },
        Infrared: {
            Start: 10979
        },
        CrossSection: {
            Front: 4690,
            Side: 8886,
            Top: 13713
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4130,
        PilotBurstDPS: 2105,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 33573
    },
    Insurance: {
        StandardClaimTime: 9.99,
        ExpeditedClaimTime: 3.33,
        ExpeditedCost: 6251
    },
    Buy: {
        "New Deal, Lorville": 2116800
    }
}, {
    ClassName: "DRAK_Cutlass_Blue",
    Name: "Drake Cutlass Blue",
    Description: "Sleek, mean, and royal. The Cutlass Blue adds missiles, a more aggressive engine, and Durasteel holding cells in the cargo bay to the standard model. The Cutlass Blue is the outworld militia standard ship of choice for patrols.",
    Career: "Multi-Role",
    Role: "Medium Fighter / Medium Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 12,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.78
    },
    Crew: 3,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 226700,
    ComponentsMass: 8984,
    Dimensions: {
        Length: 36,
        Width: 26.5,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6e3
            },
            Parts: {
                Wing_Right: 1880,
                Wing_Left: 1880,
                Canopy: 6250,
                Tail: 6e3,
                Thruster_Main_Base_Left: 480,
                Thruster_Main_Left: 5e3,
                Thruster_Main_Base_Right: 480,
                Thruster_Main_Right: 5e3,
                Missile_Housing_Left: 900,
                Missile_Housing_Right: 900
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster_Left: 11500,
                Main_Thruster_Right: 11500
            },
            Retro: {
                Main_Retro_Left: 12340,
                Main_Retro_Right: 12340
            },
            Maneuvering: {
                Man_Thruster_Right_Front: 10240,
                Man_Thruster_Left_Front: 10240,
                Man_Thruster_Right_Outer_Bot: 10240,
                Man_Thruster_Right_Wing_Bot: 10240,
                Man_Thruster_Right_Wing_Top: 10240,
                Man_Thruster_Right_Outer_Top: 10240,
                Man_Thruster_Left_Wing_Top: 10240,
                Man_Thruster_Left_Outer_Bot: 10240,
                Man_Thruster_Left_Outer_Top: 10240,
                Man_Thruster_Left_Wing_Bot: 10240,
                Man_Thruster_Right_Tail: 10240,
                Man_Thruster_Left_Tail: 10240,
                Man_Thruster_Left_Rear_Top: 10240,
                Man_Thruster_Left_Rear_Bot: 10240,
                Man_Thruster_Left_Front_Top: 10240,
                Man_Thruster_Left_Front_Bot: 10240,
                Man_Thruster_Right_Rear_Top: 10240,
                Man_Thruster_Right_Rear_Bot: 10240,
                Man_Thruster_Right_Front_Top: 10240,
                Man_Thruster_Right_Front_Bot: 10240,
                Man_Thruster_Center_Top: 10240,
                Man_Thruster_Left_Rear: 10240,
                Man_Thruster_Right_Rear: 10240,
                Man_Thruster_Left_Center: 10240,
                Man_Thruster_Right_Center: 10240,
                Man_Thruster_Center_Bot: 10240
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1125,
        Pitch: 47,
        Yaw: 39,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 16113958,
            Retro: 192e4,
            Vtol: 0,
            Maneuvering: 60825329
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.9,
            Retro: 2.7,
            Strafe: 7.4,
            Up: 7.4,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 465,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 2800,
            CapacitorRegenPerSec: 100,
            CapacitorIdleCost: 20,
            CapacitorLinearCost: 1,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 28,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 36e6,
        FuelIntakeRate: 20,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 32.5
        },
        FuelUsagePerSecond: {
            Main: 2014.245,
            Retro: 240,
            Vtol: 0,
            Maneuvering: 7603.166
        },
        IntakeToMainFuelRatio: .99,
        TimeForIntakesToFillTank: 18e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12800,
            SCMActive: 18208,
            NAV: 28280
        },
        Infrared: {
            Start: 10494
        },
        CrossSection: {
            Front: 5361,
            Side: 10158,
            Top: 15676
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 5100,
        PilotBurstDPS: 1785,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 40086
    },
    Insurance: {
        StandardClaimTime: 9.99,
        ExpeditedClaimTime: 3.33,
        ExpeditedCost: 6643
    },
    Buy: {
        "New Deal, Lorville": 3704400
    }
}, {
    ClassName: "DRAK_Cutlass_Red",
    Name: "Drake Cutlass Red",
    Description: "The Cutlass Red converts the standard cargo hold to a well-equiped medical facility including an Autodoc. This starbound ambulance features the Nav-E7 Echo Transponder, a long range scanner, and a Secure Plus Docking Collar, making it ideal for search and rescue. This model also features a unique Red Crossbones skin.",
    Career: "Multi-Role",
    Role: "Medical",
    Size: 3,
    Cargo: {
        CargoGrid: 12,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 3.43
    },
    Crew: 2,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 226700,
    ComponentsMass: 6570,
    Dimensions: {
        Length: 36,
        Width: 26.5,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6300
            },
            Parts: {
                Wing_Right: 1880,
                Wing_Left: 1880,
                Canopy: 6200,
                Tail: 6300,
                Thruster_Main_Base_Left: 480,
                Thruster_Main_Left: 5200,
                Thruster_Main_Base_Right: 480,
                Thruster_Main_Right: 5200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster_Left: 11500,
                Main_Thruster_Right: 11500
            },
            Retro: {
                Main_Retro_Left: 12340,
                Main_Retro_Right: 12340
            },
            Maneuvering: {
                Man_Thruster_Center_Top: 10240,
                Man_Thruster_Center_Bot: 10240,
                Man_Thruster_Right_Center: 10240,
                Man_Thruster_Left_Center: 10240,
                Man_Thruster_Right_Front: 10240,
                Man_Thruster_Left_Front: 10240,
                Man_Thruster_Right_Rear: 10240,
                Man_Thruster_Left_Rear: 10240,
                Man_Thruster_Right_Outer_Bot: 10240,
                Man_Thruster_Right_Outer_Top: 10240,
                Man_Thruster_Right_Wing_Bot: 10240,
                Man_Thruster_Right_Wing_Top: 10240,
                Man_Thruster_Left_Wing_Top: 10240,
                Man_Thruster_Left_Outer_Bot: 10240,
                Man_Thruster_Left_Outer_Top: 10240,
                Man_Thruster_Left_Wing_Bot: 10240,
                Man_Thruster_Right_Tail: 10240,
                Man_Thruster_Left_Tail: 10240,
                Man_Thruster_Left_Rear_Top: 10240,
                Man_Thruster_Left_Rear_Bot: 10240,
                Man_Thruster_Left_Front_Top: 10240,
                Man_Thruster_Left_Front_Bot: 10240,
                Man_Thruster_Right_Rear_Top: 10240,
                Man_Thruster_Right_Rear_Bot: 10240,
                Man_Thruster_Right_Front_Top: 10240,
                Man_Thruster_Right_Front_Bot: 10240
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1125,
        Pitch: 47,
        Yaw: 39,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 15884038,
            Retro: 18950606e-1,
            Vtol: 0,
            Maneuvering: 60290900
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.9,
            Retro: 2.7,
            Strafe: 7.5,
            Up: 7.5,
            Down: 4.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 465,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 2800,
            CapacitorRegenPerSec: 100,
            CapacitorIdleCost: 20,
            CapacitorLinearCost: 1,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 28,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 36e6,
        FuelIntakeRate: 20,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 32.5
        },
        FuelUsagePerSecond: {
            Main: 1985.505,
            Retro: 236.883,
            Vtol: 0,
            Maneuvering: 7536.362
        },
        IntakeToMainFuelRatio: 1.01,
        TimeForIntakesToFillTank: 18e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8769,
            SCMActive: 10855,
            NAV: 24249
        },
        Infrared: {
            Start: 9279
        },
        CrossSection: {
            Front: 4398,
            Side: 8334,
            Top: 12861
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 5100,
        PilotBurstDPS: 2105,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 14.99,
        ExpeditedClaimTime: 5,
        ExpeditedCost: 6310
    },
    Buy: {
        "New Deal, Lorville": 2857680
    }
}, {
    ClassName: "DRAK_Cutlass_Steel",
    Name: "Drake Cutlass Steel",
    Description: "With the Cutlass Steel, Drake Interplanetary has once again reinvented their classic design to create a next generation combat transport ship through the addition of dedicated jump seats and an expanded arsenal. It’s a dangerous ‘verse out there, and the Cutlass Steel is ready to cut a path through whatever stands in the way of you and your dedicated crew. ",
    Career: "Combat",
    Role: "Drop Ship",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.78
    },
    Crew: 3,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 246577,
    ComponentsMass: 9255.5,
    Dimensions: {
        Length: 36,
        Width: 26.5,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 9400,
                Tail: 6e3
            },
            Parts: {
                Wing_Left: 1500,
                Wing_Right: 1500,
                Canopy: 1e3,
                Thruster_Main_Base_Left: 480,
                Thruster_Main_Left: 5e3,
                Thruster_Main_Base_Right: 480,
                Thruster_Main_Right: 5e3,
                Missile_Housing_Right: 900,
                Missile_Housing_Left: 900
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster_Left: 11500,
                Main_Thruster_Right: 11500
            },
            Retro: {
                Main_Retro_Left: 12340,
                Main_Retro_Right: 12340
            },
            Maneuvering: {
                Man_Thruster_Left_Front: 10240,
                Man_Thruster_Right_Front: 10240,
                Man_Thruster_Left_Outer_Bot: 10240,
                Man_Thruster_Left_Outer_Top: 10240,
                Man_Thruster_Left_Wing_Bot: 10240,
                Man_Thruster_Left_Wing_Top: 10240,
                Man_Thruster_Right_Outer_Bot: 10240,
                Man_Thruster_Right_Outer_Top: 10240,
                Man_Thruster_Right_Wing_Bot: 10240,
                Man_Thruster_Right_Wing_Top: 10240,
                Man_Thruster_Right_Rear: 10240,
                Man_Thruster_Right_Center: 10240,
                Man_Thruster_Left_Rear: 10240,
                Man_Thruster_Left_Center: 10240,
                Man_Thruster_Center_Top: 10240,
                Man_Thruster_Center_Bot: 10240,
                Man_Thruster_Left_Front_Bot: 10240,
                Man_Thruster_Left_Front_Top: 10240,
                Man_Thruster_Left_Rear_Bot: 10240,
                Man_Thruster_Left_Rear_Top: 10240,
                Man_Thruster_Right_Front_Bot: 10240,
                Man_Thruster_Right_Front_Top: 10240,
                Man_Thruster_Right_Rear_Bot: 10240,
                Man_Thruster_Right_Rear_Top: 10240,
                Man_Thruster_Left_Tail: 10240,
                Man_Thruster_Right_Tail: 10240
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1100,
        Pitch: 35,
        Yaw: 30,
        Roll: 100,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 18638648,
            Retro: 2115366,
            Vtol: 0,
            Maneuvering: 44846438
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.9,
            Retro: 2.4,
            Strafe: 3.9,
            Up: 4.4,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 420,
                BoostSpeedBackward: 240
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 36e6,
        FuelIntakeRate: 20,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 32.5
        },
        FuelUsagePerSecond: {
            Main: 2329.831,
            Retro: 264.421,
            Vtol: 0,
            Maneuvering: 5605.804
        },
        IntakeToMainFuelRatio: .86,
        TimeForIntakesToFillTank: 18e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10981,
            SCMActive: 13120,
            NAV: 26461
        },
        Infrared: {
            Start: 10999
        },
        CrossSection: {
            Front: 4919,
            Side: 9320,
            Top: 14383
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 3113,
        TurretsBurstDPS: 1747,
        TotalMissilesDmg: 33573
    },
    Insurance: {
        StandardClaimTime: 11.99,
        ExpeditedClaimTime: 4,
        ExpeditedCost: 7051
    },
    Buy: {
        "New Deal, Lorville": 3997350
    }
}, {
    ClassName: "DRAK_Cutter",
    Name: "Drake Cutter",
    Description: "Designed for hard-working folks of all stripes, the Cutter packs 4 SCU of cargo room and plenty of wallop into a rough and tumble, compact frame. It's a ship that truly embodies the spirit of Drake: that no matter who you are or what you do, you can reach the stars.",
    Career: "Starter",
    Role: "Starter",
    Size: 2,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 86877,
    ComponentsMass: 2195.2,
    Dimensions: {
        Length: 20,
        Width: 13,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 6500
            },
            Parts: {
                body_armour_top: 1500,
                vtol_r_geo: 3e3,
                debrisproxy_spoiler_left: 50,
                debrisproxy_spoiler_right: 50,
                nose: 3e3,
                vtol_l_geo: 3e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_aux_right: 9e3,
                thruster_aux_left: 9e3
            },
            Retro: {
                thruster_auxretro_right: 9e3,
                thruster_auxretro_left: 9e3,
                thruster_retro_right: 9e3,
                thruster_retro_left: 9e3
            },
            Vtol: {
                thruster_main_vtol_right: 9e3,
                thruster_main_vtol_left: 9e3
            },
            Maneuvering: {
                thruster_rear_top_right: 9e3,
                thruster_rear_top_left: 9e3,
                thruster_rear_side_right: 9e3,
                thruster_rear_side_left: 9e3,
                thruster_rear_bottom_right: 9e3,
                thruster_rear_bottom_left: 9e3,
                thruster_front_top_left: 9e3,
                thruster_front_top_right: 9e3,
                thruster_front_side_right: 9e3,
                thruster_front_side_left: 9e3,
                thruster_front_bottom_right: 9e3,
                thruster_front_bottom_left: 9e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 180,
        MaxSpeed: 1010,
        Pitch: 36,
        Yaw: 36,
        Roll: 100,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7446e3,
            Retro: 28e5,
            Vtol: 64e5,
            Maneuvering: 19408e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.2,
            Retro: 3.1,
            Strafe: 6.2,
            Up: 5.1,
            Down: 3.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 380,
                BoostSpeedBackward: 160
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 28e6,
        FuelIntakeRate: 15,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 480.75,
            Retro: 350,
            Vtol: 800,
            Maneuvering: 2426
        },
        IntakeToMainFuelRatio: 3.12,
        TimeForIntakesToFillTank: 186666667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2279,
            SCMActive: 2472,
            NAV: 9812
        },
        Infrared: {
            Start: 8991
        },
        CrossSection: {
            Front: 3777,
            Side: 4460,
            Top: 5983
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4304
    },
    Insurance: {
        StandardClaimTime: 3.37,
        ExpeditedClaimTime: 1.12,
        ExpeditedCost: 2280
    },
    Buy: {
        "New Deal, Lorville": 625040
    }
}, {
    ClassName: "DRAK_Cutter_Rambler",
    Name: "Drake Cutter Rambler",
    Description: "The brass at Drake heard what you had to say, and their answer was the Cutter Rambler. Building upon the original, the Rambler preserves a full 2 SCU of cargo room while adding in requested creature comforts and enough personal storage to make even the longest journey go by in a flash.",
    Career: "Starter",
    Role: "Exploration",
    Size: 2,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 86877,
    ComponentsMass: 2195.2,
    Dimensions: {
        Length: 20,
        Width: 13,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 6500
            },
            Parts: {
                body_armour_top: 1500,
                vtol_r_geo: 3e3,
                debrisproxy_spoiler_left: 50,
                debrisproxy_spoiler_right: 50,
                nose: 3e3,
                vtol_l_geo: 3e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_aux_right: 9e3,
                thruster_aux_left: 9e3
            },
            Retro: {
                thruster_auxretro_right: 9e3,
                thruster_auxretro_left: 9e3,
                thruster_retro_right: 9e3,
                thruster_retro_left: 9e3
            },
            Vtol: {
                thruster_main_vtol_right: 9e3,
                thruster_main_vtol_left: 9e3
            },
            Maneuvering: {
                thruster_rear_top_right: 9e3,
                thruster_rear_top_left: 9e3,
                thruster_rear_side_right: 9e3,
                thruster_rear_side_left: 9e3,
                thruster_rear_bottom_right: 9e3,
                thruster_rear_bottom_left: 9e3,
                thruster_front_top_left: 9e3,
                thruster_front_top_right: 9e3,
                thruster_front_side_right: 9e3,
                thruster_front_side_left: 9e3,
                thruster_front_bottom_right: 9e3,
                thruster_front_bottom_left: 9e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 180,
        MaxSpeed: 1010,
        Pitch: 36,
        Yaw: 36,
        Roll: 100,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7446e3,
            Retro: 28e5,
            Vtol: 64e5,
            Maneuvering: 19408e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.2,
            Retro: 3.1,
            Strafe: 6.2,
            Up: 5.1,
            Down: 3.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 380,
                BoostSpeedBackward: 160
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 56e6,
        FuelIntakeRate: 15,
        QuantumFuelCapacity: 22e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 480.75,
            Retro: 350,
            Vtol: 800,
            Maneuvering: 2426
        },
        IntakeToMainFuelRatio: 3.12,
        TimeForIntakesToFillTank: 373333333e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2279,
            SCMActive: 2472,
            NAV: 9812
        },
        Infrared: {
            Start: 8691
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4304
    },
    Insurance: {
        StandardClaimTime: 1.25,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 480
    },
    "New Ship": "Drake Cutter Rambler",
    Buy: {
        "New Deal, Lorville": 740880
    }
}, {
    ClassName: "DRAK_Cutter_Scout",
    Name: "Drake Cutter Scout",
    Description: "Pairing down the rough and tumble, compact frame of the Cutter to the bare essentials, Drake took an already impressive ship and transformed it into the ideal scouting vessel. Featuring improved radar and scanning capabilities paired with more power and cooling, the Cutter Scout is ready to fly ahead of the pack.",
    Career: "Starter",
    Role: "Scout",
    Size: 2,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 92877,
    ComponentsMass: 3735.2,
    Dimensions: {
        Length: 20,
        Width: 13,
        Height: 6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 6700
            },
            Parts: {
                body_armour_top: 1500,
                vtol_r_geo: 3e3,
                debrisproxy_spoiler_left: 50,
                debrisproxy_spoiler_right: 50,
                nose: 3200,
                vtol_l_geo: 3e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_aux_right: 9e3,
                thruster_aux_left: 9e3
            },
            Retro: {
                thruster_auxretro_right: 9e3,
                thruster_auxretro_left: 9e3,
                thruster_retro_right: 9e3,
                thruster_retro_left: 9e3
            },
            Vtol: {
                thruster_main_vtol_right: 9e3,
                thruster_main_vtol_left: 9e3
            },
            Maneuvering: {
                thruster_rear_top_right: 9e3,
                thruster_rear_top_left: 9e3,
                thruster_rear_side_right: 9e3,
                thruster_rear_side_left: 9e3,
                thruster_rear_bottom_right: 9e3,
                thruster_rear_bottom_left: 9e3,
                thruster_front_top_left: 9e3,
                thruster_front_top_right: 9e3,
                thruster_front_side_right: 9e3,
                thruster_front_side_left: 9e3,
                thruster_front_bottom_right: 9e3,
                thruster_front_bottom_left: 9e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 180,
        MaxSpeed: 1010,
        Pitch: 36,
        Yaw: 36,
        Roll: 100,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7546e3,
            Retro: 28e5,
            Vtol: 65e5,
            Maneuvering: 19408e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.8,
            Retro: 2.9,
            Strafe: 5.8,
            Up: 4.8,
            Down: 3.3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 380,
                BoostSpeedBackward: 160
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 28e6,
        FuelIntakeRate: 15,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 480.75,
            Retro: 350,
            Vtol: 812.5,
            Maneuvering: 2426
        },
        IntakeToMainFuelRatio: 3.12,
        TimeForIntakesToFillTank: 186666667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2339,
            SCMActive: 2524,
            NAV: 9864
        },
        Infrared: {
            Start: 9130
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 3340
    },
    Insurance: {
        StandardClaimTime: 3.87,
        ExpeditedClaimTime: 1.28,
        ExpeditedCost: 2622
    },
    "New Ship": "Drake Cutter Scout",
    Buy: {
        "New Deal, Lorville": 705600
    }
}, {
    ClassName: "DRAK_Dragonfly",
    Name: "Drake Dragonfly",
    Description: "The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger!",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: .39
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 5600,
    ComponentsMass: 853,
    Dimensions: {
        Length: 6,
        Width: 2.5,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .4,
            Infrared: .27,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 880
            },
            Parts: {
                nacelle_front_right_main: 160,
                nacelle_front_left_main: 160,
                body: 50,
                nacelle_rear_left_main: 160,
                nacelle_rear_right_main: 160
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 1300
            },
            Retro: {
                retro_right: 1500,
                retro_left: 1500
            },
            Maneuvering: {
                thruster_front_top_right: 1300,
                thruster_front_bottom_right: 1300,
                gravplate_centre_right: 1600,
                gravplate_front_right: 1600,
                thruster_front_top_left: 1300,
                thruster_front_bottom_left: 1300,
                gravplate_centre_left: 1600,
                gravplate_front_left: 1600,
                gravplate_rear_left: 1600,
                thruster_rear_top_left: 1300,
                thruster_rear_bottom_left: 1300,
                thruster_rear_bottom_right: 1300,
                gravplate_rear_right: 1600,
                thruster_rear_top_right: 1300
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 190,
        HoverMaxSpeed: 190,
        MaxSpeed: 523,
        Pitch: 70,
        Yaw: 70,
        Roll: 130,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 80500,
            Retro: 135e3,
            Vtol: 0,
            Maneuvering: 385400
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.4,
            Retro: 2.2,
            Strafe: 1.5,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 270,
                BoostSpeedBackward: 120
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: 1.25,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 3.5,
            RegenerationTime: 16,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 15e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 10.062,
            Retro: 16.875,
            Vtol: 0,
            Maneuvering: 48.175
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 588,
            SCMActive: 950,
            NAV: 0
        },
        Infrared: {
            Start: 602
        },
        CrossSection: {
            Front: 334,
            Side: 452,
            Top: 564
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 749,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .10125,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 55
    },
    Buy: {
        "New Deal, Lorville": 342720
    }
}, {
    ClassName: "DRAK_Dragonfly_Yellow",
    Name: "Drake Dragonfly Yellowjacket",
    Description: "The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger! This model features a custom Yellowjacket paintjob.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: .39
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 5600,
    ComponentsMass: 853,
    Dimensions: {
        Length: 6,
        Width: 2.5,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .4,
            Infrared: .27,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 880
            },
            Parts: {
                nacelle_front_right_main: 160,
                nacelle_front_left_main: 160,
                body: 50,
                nacelle_rear_left_main: 160,
                nacelle_rear_right_main: 160
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 1300
            },
            Retro: {
                retro_right: 1500,
                retro_left: 1500
            },
            Maneuvering: {
                thruster_front_top_right: 1300,
                thruster_front_bottom_right: 1300,
                gravplate_centre_right: 1600,
                gravplate_front_right: 1600,
                thruster_front_top_left: 1300,
                thruster_front_bottom_left: 1300,
                gravplate_centre_left: 1600,
                gravplate_front_left: 1600,
                gravplate_rear_left: 1600,
                thruster_rear_top_left: 1300,
                thruster_rear_bottom_left: 1300,
                thruster_rear_bottom_right: 1300,
                gravplate_rear_right: 1600,
                thruster_rear_top_right: 1300
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 190,
        HoverMaxSpeed: 190,
        MaxSpeed: 523,
        Pitch: 70,
        Yaw: 70,
        Roll: 130,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 80500,
            Retro: 135e3,
            Vtol: 0,
            Maneuvering: 385400
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.5,
            Retro: 2.2,
            Strafe: 1.6,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 270,
                BoostSpeedBackward: 120
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: 1.25,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 3.5,
            RegenerationTime: 16,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 15e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 10.062,
            Retro: 16.875,
            Vtol: 0,
            Maneuvering: 48.175
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 588,
            SCMActive: 950,
            NAV: 0
        },
        Infrared: {
            Start: 602
        },
        CrossSection: {
            Front: 334,
            Side: 452,
            Top: 564
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 749,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .10125,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 55
    },
    Buy: {
        "New Deal, Lorville": 342720
    }
}, {
    ClassName: "DRAK_Herald",
    Name: "Drake Herald",
    Description: "The Drake Herald is a small, armored ship designed to safely get information from Point A to Point B. Featuring a powerful central engine (for high speed transit and generating the power needed for effective data encryption/containment), advanced encryption software and an armored computer core, the Herald is unique among personal spacecraft in that it is designed to be easily ‘cleaned’ when in danger of capture.",
    Career: "Transporter",
    Role: "Medium Data",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .84
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 65705,
    ComponentsMass: 2082,
    Dimensions: {
        Length: 23.5,
        Width: 12.5,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2880,
                tail: 1400
            },
            Parts: {
                sat_array_lower_right: 100,
                sat_array_upper_right: 100,
                sat_flap_lower: 100,
                sat_array_upper_left: 100,
                sat_flap_right: 100,
                sat_flap_left: 100,
                sat_array_lower_left: 100,
                WingLeft_Detach: 660,
                WingRight_Detach: 660,
                pipe_cover_right: 100,
                pipe_cover_left: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_top: 18500,
                thruster_main_bottom: 18500
            },
            Retro: {
                thruster_front_left_front: 17500,
                thruster_front_right_front: 17500
            },
            Maneuvering: {
                thruster_front_left_bottom: 16500,
                thruster_front_left_side: 16500,
                thruster_front_left_top: 16500,
                thruster_front_right_bottom: 16500,
                thruster_front_right_side: 16500,
                thruster_front_right_top: 16500,
                thruster_back_left_back: 16500,
                thruster_back_left_bottom: 16500,
                thruster_back_left_side: 16500,
                thruster_back_left_top: 16500,
                thruster_back_right_back: 16500,
                thruster_back_right_bottom: 16500,
                thruster_back_right_side: 16500,
                thruster_back_right_top: 16500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 240,
        MaxSpeed: 1400,
        Pitch: 50,
        Yaw: 42,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7565034,
            Retro: 2892150,
            Vtol: 0,
            Maneuvering: 137784116e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 14,
            Retro: 4.4,
            Strafe: 4.5,
            Up: 6,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 600,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.7,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.3,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .4,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 945.629,
            Retro: 361.519,
            Vtol: 0,
            Maneuvering: 1722.302
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6519,
            SCMActive: 7643,
            NAV: 14052
        },
        Infrared: {
            Start: 7901
        },
        CrossSection: {
            Front: 3859,
            Side: 5146,
            Top: 9648
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 1163,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9248
    },
    Insurance: {
        StandardClaimTime: 2.025,
        ExpeditedClaimTime: .675,
        ExpeditedCost: 1015
    },
    Buy: {
        "New Deal, Lorville": 1285200
    }
}, {
    ClassName: "DRAK_Mule",
    Name: "Drake Mule",
    Description: "The six-wheeled Drake Mule is a dependable workhorse for all sorts of loading and hauling jobs. Whether transporting cargo over rough terrain or ferrying it onto larger vessels and cargo decks, the Mule sees even the toughest contracts through to the end. Plain and simple.",
    Career: "Ground",
    Role: "Ground",
    Size: 1,
    Cargo: {
        CargoGrid: 1,
        CargoContainers: 0,
        ExternalStorage: .75,
        PersonalInventory: .73
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 2780,
    ComponentsMass: 264,
    Dimensions: {
        Length: 4.2,
        Width: 3,
        Height: 2.7
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .8,
            Infrared: .9,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2e3
            },
            Parts: {
                hardpoint_wheel_FL: 800,
                hardpoint_wheel_ML: 800,
                hardpoint_wheel_FR: 800,
                hardpoint_wheel_MR: 800,
                hardpoint_wheel_RR: 800,
                hardpoint_wheel_RL: 800,
                Cargo_Arms: 200,
                SHIELD_SDF_01_FT: 200,
                Arm_Hinge: 200,
                Rear: 2e3,
                sidetray_right: 200,
                sidetray_left: 200,
                Entry_Door_Lower: 200,
                Door_Arms: 200,
                Entry_Door_Upper_node: 200,
                Seat_Hatch: 200
            }
        }
    },
    DriveCharacteristics: {
        Acceleration: 8,
        Decceleration: 12,
        TopSpeed: 32,
        ReverseSpeed: 7
    },
    SteerCharacteristics: {
        V0SteerSpeed: 15,
        VMaxSteerSpeed: 20,
        V0SteerMaxAngle: 15,
        SteerSubtractV: 1,
        SteerSubtractAngle: 6,
        SteerRelaxationSpeed: 40
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12,
            SCMActive: 12,
            NAV: 0
        },
        Infrared: {
            Start: 1577
        },
        CrossSection: {
            Front: 1184,
            Side: 1011,
            Top: 505
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 3.04,
        ExpeditedClaimTime: 1.0125,
        ExpeditedCost: 1215
    },
    Buy: {
        "New Deal, Lorville": 68040
    }
}, {
    ClassName: "DRAK_Vulture",
    Name: "Drake Vulture",
    Description: "Answer to no one, cut out the middle man, and throw caution to the wind. Rip wrecks like a pro and carve out your own place in the great big empty behind the stick of this rough, rugged salvage machine from Drake Interplanetary.",
    Career: "Industrial",
    Role: "Light Salvage",
    Size: 2,
    Cargo: {
        CargoGrid: 12,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: 1.14
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 186103,
    ComponentsMass: 3033.2,
    Dimensions: {
        Length: 33,
        Width: 16,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 12e3
            },
            Parts: {
                body_tail: 7e3,
                drone: 200,
                drone_wing_left: 50,
                drone_wing_right: 50,
                front_nacelle_right: 5e3,
                debrisProxy_salvage_arm_right: 4e3,
                front_nacelle_left: 5e3,
                debrisProxy_salvage_arm_left: 4e3,
                tail: 2400,
                main_engine_left: 2e3,
                main_engine_right: 2e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 12340,
                thruster_main_right: 12340
            },
            Retro: {
                thruster_retro_left: 12340,
                thruster_retro_right: 12340
            },
            Vtol: {
                thruster_vtol_front_right: 10240,
                thruster_vtol_front_left: 10240,
                thruster_vtol_rear_left: 10240,
                thruster_vtol_rear_right: 10240
            },
            Maneuvering: {
                thruster_mav_front_top_right: 10240,
                thruster_mav_front_side_right: 10240,
                thruster_mav_front_bottom_right: 10240,
                thruster_mav_front_bottom_left: 10240,
                thruster_mav_front_side_left: 10240,
                thruster_mav_front_top_left: 10240,
                thruster_mav_rear_bottom_left: 10240,
                thruster_mav_rear_top_left: 10240,
                thruster_mav_rear_side_left: 10240,
                thruster_mav_rear_top_right: 10240,
                thruster_mav_rear_side_right: 10240,
                thruster_mav_rear_bottom_right: 10240
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1100,
        Pitch: 55,
        Yaw: 55,
        Roll: 125,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1048e4,
            Retro: 571e4,
            Vtol: 182700,
            Maneuvering: 2858e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.6,
            Retro: 3,
            Strafe: 4,
            Up: 4,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 350,
                BoostSpeedBackward: 240
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 36e6,
        FuelIntakeRate: 20,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1310,
            Retro: 713.75,
            Vtol: 22.838,
            Maneuvering: 3572.5
        },
        IntakeToMainFuelRatio: 1.53,
        TimeForIntakesToFillTank: 18e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 7666,
            SCMActive: 9123,
            NAV: 15199
        },
        Infrared: {
            Start: 9251
        },
        CrossSection: {
            Front: 3339,
            Side: 6009,
            Top: 12520
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 5550,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 9,
        ExpeditedClaimTime: 3,
        ExpeditedCost: 3040
    },
    Buy: {
        "New Deal, Lorville": 2646e3
    }
}, {
    ClassName: "ESPR_Prowler",
    Name: "Esperia Prowler",
    Description: "Named after the UPE military designation, the Prowler is a modernized version of the infamous Tevarin boarding craft from the First Tevarin War. The Prowler’s effectiveness as a rapid personnel deployment vehicle was mainly due to its silence. With the Prowler, you will find the perfect fusion of two cultures: the elegance and effectiveness of the Tevarin war machine combined with the reliability of modern UEE technology.",
    Career: "Combat",
    Role: "Drop Ship",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 171700,
    ComponentsMass: 5190,
    Dimensions: {
        Length: 34,
        Width: 32,
        Height: 15
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .4,
            Infrared: .42,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 8500
            },
            Parts: {
                body: 4e4,
                rear_wing_stabilizer_right: 4e3,
                rear_wing_stabilizer_left: 4e3,
                humerus_base_e_left: 1e3,
                humerus_left: 2e3,
                ulna_left: 8e3,
                phalange_shield_left: 700,
                humerus_base_e_right: 1e3,
                humerus_right: 2e3,
                ulna_right: 8e3,
                phalange_shield_right: 700
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_wing_left: 19500,
                main_thruster_wing_right: 19500
            },
            Retro: {
                retro_thruster_body_right: 18e3,
                retro_thruster_body_left: 18e3,
                retro_thruster_wing_left: 18e3,
                retro_thruster_wing_right: 18e3
            },
            Maneuvering: {
                mav_thruster_nose_left_top: 17e3,
                mav_thruster_nose_left_bot: 17e3,
                mav_thruster_nose_right_top: 17e3,
                mav_thruster_nose_right_bot: 17e3,
                grav_nose_left_rear: 19500,
                mav_thruster_nose_left_mid: 17e3,
                mav_thruster_nose_right_mid: 17e3,
                grav_nose_left_front: 19500,
                grav_nose_right_front: 19500,
                grav_nose_right_rear: 19500,
                mav_thruster_tail_left_mid: 17e3,
                mav_thruster_tail_left_bot: 17e3,
                mav_thruster_tail_left_top: 17e3,
                mav_thruster_tail_right_top: 17e3,
                mav_thruster_tail_right_mid: 17e3,
                mav_thruster_tail_right_bot: 17e3,
                grav_body_right_rear: 19500,
                grav_body_left_rear: 19500,
                grav_body_left_front: 19500,
                grav_body_right_front: 19500,
                mav_thruster_spine_left: 17e3,
                mav_thruster_spine_right: 17e3,
                mav_thruster_wing_left_mid: 17e3,
                mav_thruster_wing_right_mid: 17e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1100,
        Pitch: 35,
        Yaw: 30,
        Roll: 100,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 12541802,
            Retro: 42918164e-1,
            Vtol: 0,
            Maneuvering: 32924823
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 9,
            Retro: 2.5,
            Strafe: 3.9,
            Up: 4.4,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 420,
                BoostSpeedBackward: 240
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 39e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 30
        },
        FuelUsagePerSecond: {
            Main: 1567.725,
            Retro: 536.477,
            Vtol: 0,
            Maneuvering: 4115.603
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9143,
            SCMActive: 11267,
            NAV: 15335
        },
        Infrared: {
            Start: 8521
        },
        CrossSection: {
            Front: 4423,
            Side: 9459,
            Top: 10072
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 10200,
        PilotBurstDPS: 3414,
        TurretsBurstDPS: 923,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 23.22,
        ExpeditedClaimTime: 7.74,
        ExpeditedCost: 9993
    },
    Buy: {
        "Astro Armada, Area 18": 18711e3
    }
}, {
    ClassName: "ESPR_Talon",
    Name: "Esperia Talon",
    Description: `The Talon represents Esperia's continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional "Phalanx" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape.`,
    Career: "Combat",
    Role: "Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 51352.06,
    ComponentsMass: 3022,
    Dimensions: {
        Length: 26,
        Width: 23.3,
        Height: 8.6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2700
            },
            Parts: {
                eject_joint: 80,
                Leg_Right: 1900,
                Leg_Lower_Right: 1500,
                leg_feathers_01_right: 50,
                leg_feathers_02_right: 50,
                leg_feathers_03_right: 50,
                leg_feathers_04_right: 50,
                leg_feathers_05_right: 50,
                wing_small_segment_01_right: 200,
                wings_small_feathers_01_right: 50,
                wings_small_feathers_02_right: 50,
                wings_small_feathers_03_right: 50,
                wings_small_feathers_04_right: 50,
                wings_small_feathers_05_right: 50,
                wings_small_feathers_06_right: 50,
                wings_small_feathers_07_right: 50,
                comp_jumpdrive_door_front: 50,
                comp_jumpdrive_door_mid: 50,
                comp_jumpdrive_door_rear: 50,
                comp_jumpdrive_door_right: 50,
                comp_jumpdrive_door_left: 50,
                radar_scanner_door_right: 50,
                radar_scanner_door_rear: 50,
                radar_scanner_door_mid: 50,
                radar_scanner_door_front: 50,
                radar_scanner_door_left: 50,
                coolers_door_mid: 50,
                coolers_door_rear: 50,
                coolers_door_right: 50,
                coolers_door_front: 50,
                coolers_door_left: 50,
                shieldgen_door_outer_right: 50,
                shieldgen_door_inner_right: 50,
                shieldgen_door_inner_left: 50,
                shieldgen_door_outer_left: 50,
                Leg_Left: 1900,
                Leg_Lower_Left: 1500,
                leg_feathers_05_left: 50,
                leg_feathers_04_left: 50,
                leg_feathers_03_left: 50,
                leg_feathers_02_left: 50,
                leg_feathers_01_left: 50,
                wing_small_segment_01_left: 200,
                wings_small_feathers_01_left: 50,
                wings_small_feathers_02_left: 50,
                wings_small_feathers_03_left: 50,
                wings_small_feathers_04_left: 50,
                wings_small_feathers_05_left: 50,
                wings_small_feathers_06_left: 50,
                wings_small_feathers_07_left: 50,
                Tail_Left: 1650,
                Wing_Left: 1650,
                Wing_Right: 1650,
                Tail_Right: 1650
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_top_left: 5e3,
                main_top_right: 5e3,
                main_bottom_left: 5e3,
                main_bottom_right: 5e3
            },
            Retro: {
                retro_left: 5e3,
                retro_right: 5e3
            },
            Vtol: {
                thruster_bottom_right: 4e3,
                thruster_bottom_left: 4e3
            },
            Maneuvering: {
                mav_BF_left: 4e3,
                mav_BR_left: 4e3,
                mav_SF_left: 4e3,
                mav_SR_left: 4e3,
                mav_TF_left: 4e3,
                mav_TR_left: 4e3,
                mav_BF_right: 4e3,
                mav_BR_right: 4e3,
                mav_SF_right: 4e3,
                mav_SR_right: 4e3,
                mav_TF_right: 4e3,
                mav_TR_right: 4e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 70,
        Yaw: 52,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7548e3,
            Retro: 2614e3,
            Vtol: 0,
            Maneuvering: 21524e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13,
            Retro: 4.5,
            Strafe: 10,
            Up: 10,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.3,
            Y_AccelMultiplicator: 1.25,
            Z_AccelMultiplicator: 1.4
        }
    },
    FuelManagement: {
        FuelCapacity: 8e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 943.5,
            Retro: 326.75,
            Vtol: 0,
            Maneuvering: 2690.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4520,
            SCMActive: 5236,
            NAV: 9040
        },
        Infrared: {
            Start: 6435
        },
        CrossSection: {
            Front: 1534,
            Side: 4167,
            Top: 4630
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 1385,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 6681
    },
    Insurance: {
        StandardClaimTime: 11.34,
        ExpeditedClaimTime: 3.78,
        ExpeditedCost: 5243
    },
    Buy: {
        "Astro Armada, Area 18": 3260250
    }
}, {
    ClassName: "ESPR_Talon_Shrike",
    Name: "Esperia Talon Shrike",
    Description: `The Talon represents Esperia's continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional "Phalanx" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape. The infamous Shrike variant model is armed with additional internal missile racks.`,
    Career: "Combat",
    Role: "Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 51352.06,
    ComponentsMass: 4644,
    Dimensions: {
        Length: 26,
        Width: 23.3,
        Height: 8.6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2700
            },
            Parts: {
                eject_joint: 80,
                Leg_Right: 1900,
                Leg_Lower_Right: 1500,
                leg_feathers_01_right: 50,
                leg_feathers_02_right: 50,
                leg_feathers_03_right: 50,
                leg_feathers_04_right: 50,
                leg_feathers_05_right: 50,
                wing_small_segment_01_right: 200,
                wings_small_feathers_01_right: 50,
                wings_small_feathers_02_right: 50,
                wings_small_feathers_03_right: 50,
                wings_small_feathers_04_right: 50,
                wings_small_feathers_05_right: 50,
                wings_small_feathers_06_right: 50,
                wings_small_feathers_07_right: 50,
                comp_jumpdrive_door_front: 50,
                comp_jumpdrive_door_mid: 50,
                comp_jumpdrive_door_rear: 50,
                comp_jumpdrive_door_right: 50,
                comp_jumpdrive_door_left: 50,
                radar_scanner_door_right: 50,
                radar_scanner_door_rear: 50,
                radar_scanner_door_mid: 50,
                radar_scanner_door_front: 50,
                radar_scanner_door_left: 50,
                coolers_door_mid: 50,
                coolers_door_rear: 50,
                coolers_door_right: 50,
                coolers_door_front: 50,
                coolers_door_left: 50,
                shieldgen_door_outer_right: 50,
                shieldgen_door_inner_right: 50,
                shieldgen_door_inner_left: 50,
                shieldgen_door_outer_left: 50,
                Leg_Left: 1900,
                Leg_Lower_Left: 1500,
                leg_feathers_05_left: 50,
                leg_feathers_04_left: 50,
                leg_feathers_03_left: 50,
                leg_feathers_02_left: 50,
                leg_feathers_01_left: 50,
                wing_small_segment_01_left: 200,
                wings_small_feathers_01_left: 50,
                wings_small_feathers_02_left: 50,
                wings_small_feathers_03_left: 50,
                wings_small_feathers_04_left: 50,
                wings_small_feathers_05_left: 50,
                wings_small_feathers_06_left: 50,
                wings_small_feathers_07_left: 50,
                Tail_Left: 1650,
                Wing_Left: 1650,
                Wing_Right: 1650,
                Tail_Right: 1650
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_top_left: 5e3,
                main_top_right: 5e3,
                main_bottom_left: 5e3,
                main_bottom_right: 5e3
            },
            Retro: {
                retro_left: 5e3,
                retro_right: 5e3
            },
            Vtol: {
                thruster_bottom_right: 4e3,
                thruster_bottom_left: 4e3
            },
            Maneuvering: {
                mav_BF_left: 4e3,
                mav_BR_left: 4e3,
                mav_SF_left: 4e3,
                mav_SR_left: 4e3,
                mav_TF_left: 4e3,
                mav_TR_left: 4e3,
                mav_BF_right: 4e3,
                mav_BR_right: 4e3,
                mav_SF_right: 4e3,
                mav_SR_right: 4e3,
                mav_TF_right: 4e3,
                mav_TR_right: 4e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 70,
        Yaw: 52,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 7548e3,
            Retro: 2614e3,
            Vtol: 0,
            Maneuvering: 21524e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13,
            Retro: 4.5,
            Strafe: 10,
            Up: 10,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.3,
            Y_AccelMultiplicator: 1.25,
            Z_AccelMultiplicator: 1.4
        }
    },
    FuelManagement: {
        FuelCapacity: 8e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 2.5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 943.5,
            Retro: 326.75,
            Vtol: 0,
            Maneuvering: 2690.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4381,
            SCMActive: 5097,
            NAV: 8901
        },
        Infrared: {
            Start: 6405
        },
        CrossSection: {
            Front: 1460,
            Side: 3967,
            Top: 4408
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 617,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 60634
    },
    Insurance: {
        StandardClaimTime: 11.34,
        ExpeditedClaimTime: 3.78,
        ExpeditedCost: 7183
    },
    Buy: {
        "Astro Armada, Area 18": 3260250
    }
}, {
    ClassName: "GAMA_Syulen",
    Name: "Gatac Syulen",
    Description: "The Syulen cargo vessel has been artfully crafted by the renowned House Gatac to be well suited for both Human and Xi’an pilots. With a refined agile frame, the Syulen lends itself to ferrying important deliveries across the universe, or as the ideal ship for those making their transport career debut.",
    Career: "Starter",
    Role: "Starter",
    Size: 3,
    Cargo: {
        CargoGrid: 6,
        CargoContainers: 0,
        ExternalStorage: .25,
        PersonalInventory: 1.06
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 86877,
    ComponentsMass: 3749.2,
    Dimensions: {
        Length: 25,
        Width: 28,
        Height: 16
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2e3
            },
            Parts: {
                Mesh_Front: 500,
                Wing_Small_Bottom: 700,
                Wing_Small_Bottom_Fin_Left: 220,
                Wing_Small_Bottom_Fin_Right: 220,
                Wing_Small_Left: 700,
                Wing_Small_Left_Fin_Left: 220,
                Wing_Small_Left_Fin_Right: 220,
                Wing_Small_Right: 700,
                Wing_Small_Right_Fin_Left: 220,
                Wing_Small_Right_Fin_Right: 220,
                Wing_Large_Left: 1500,
                Wing_Large_Left_Fin_Left: 220,
                Wing_Large_Left_Fin_Right: 220,
                Wing_Large_Top: 1500,
                Wing_Large_Top_Fin_Left: 220,
                Wing_Large_Top_Fin_Right: 220,
                Wing_Large_Right: 1500,
                Wing_Large_Right_Fin_Left: 220,
                Wing_Large_Right_Fin_Right: 220
            }
        },
        ThrustersHealthPoints: {
            Main: {
                wings_small_bottom_thruster_main: 1e3,
                wings_small_left_thruster_main: 1e3,
                wings_small_right_thruster_main: 1e3,
                wings_large_left_thruster_main: 1e3,
                thruster_wings_large_top_thruster_main: 1e3,
                wings_large_right_thruster_main: 1e3
            },
            Retro: {
                body_left_thruster_retro: 1e3,
                body_right_thruster_retro: 1e3,
                body_top_thruster_retro: 1e3
            },
            Maneuvering: {
                body_front_left_bottom_thruster_mav: 1e3,
                body_front_left_mid_thruster_mav: 1e3,
                body_front_left_top_thruster_mav: 1e3,
                body_front_right_bottom_thruster_mav: 1e3,
                body_front_right_mid_thruster_mav: 1e3,
                body_front_right_top_thruster_mav: 1e3,
                body_mid_left_bottom_thruster_mav: 1e3,
                body_mid_left_mid_thruster_mav: 1e3,
                body_mid_left_top_thruster_mav: 1e3,
                body_mid_right_bottom_thruster_mav: 1e3,
                body_mid_right_mid_thruster_mav: 1e3,
                body_mid_right_top_thruster_mav: 1e3,
                body_rear_left_bottom_thruster_mav: 1e3,
                body_rear_left_mid_thruster_mav: 1e3,
                body_rear_left_top_thruster_mav: 1e3,
                body_rear_right_bottom_thruster_mav: 1e3,
                body_rear_right_mid_thruster_mav: 1e3,
                body_rear_right_top_thruster_mav: 1e3,
                wings_large_left_thruster_mav_left: 1e3,
                wings_large_left_thruster_mav_right: 1e3,
                wings_large_top_thruster_mav_right: 1e3,
                wings_large_top_thruster_mav_left: 1e3,
                wings_large_right_thruster_mav_left: 1e3,
                wings_large_right_thruster_mav_right: 1e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1175,
        Pitch: 42,
        Yaw: 42,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8454e3,
            Retro: 3759e3,
            Vtol: 0,
            Maneuvering: 30403e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.8,
            Retro: 4,
            Strafe: 8.8,
            Up: 8.8,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 4e7,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 30
        },
        FuelUsagePerSecond: {
            Main: 1056.75,
            Retro: 469.875,
            Vtol: 0,
            Maneuvering: 3800.375
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3697,
            SCMActive: 4135,
            NAV: 11230
        },
        Infrared: {
            Start: 13662
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 1637,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 28544
    },
    Insurance: {
        StandardClaimTime: 2.95,
        ExpeditedClaimTime: 1.1,
        ExpeditedCost: 2e3
    },
    "New Ship": "Gatac Syulen",
    Dimensions2: {
        Length: 20,
        Width: 22,
        Height: 15
    },
    Buy: {
        "Astro Armada, Area 18": 2778300
    }
}, {
    ClassName: "GRIN_PTV",
    Name: "Greycat PTV",
    Description: "The Greycat PTV is a simple and practical buggy frequently used to reduce long walk distance in large hangers or outpost.",
    Career: "Ground",
    Role: "Ground",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: 2.15
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 1940,
    ComponentsMass: 103,
    Dimensions: {
        Length: 3,
        Width: 2,
        Height: 1.8
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 1200
            },
            Parts: {
                wheel1: 900,
                wheel2: 900,
                wheel4: 900,
                wheel3: 900,
                body_100_debris_wheel3: 1,
                body_100_debris1: 1,
                body_100_debris_wheel4: 1,
                body_100_debris_wheel1: 1,
                body_100_debris2: 1,
                body_100_debris_wheel2: 1,
                body_100_debris3: 1,
                body_100_debris_steering: 1,
                glass: 200,
                glass_100_debris2: 1,
                glass_100_debris1: 1,
                headLightRight: 200,
                headLightRightFlare: 200,
                headLightLeft: 200,
                headLightLeftFlare: 200,
                brakeLightRight: 200,
                brakeLightRightFlare: 200,
                brakeLightLeft: 200,
                brakeLightLeftFlare: 200,
                reverseLightRight: 200,
                reverseLightLeft: 200
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 175,
        VMaxSteerSpeed: 20,
        V0SteerMaxAngle: 45,
        SteerSubtractV: 40,
        SteerSubtractAngle: 14,
        SteerRelaxationSpeed: 150
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 765,
            SCMActive: 765,
            NAV: 0
        },
        Infrared: {
            Start: 379
        },
        CrossSection: {
            Front: 857,
            Side: 814,
            Top: 429
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .28,
        ExpeditedClaimTime: .09,
        ExpeditedCost: 115
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "Astro Armada, Area 18": 29170
    }
}, {
    ClassName: "GRIN_ROC",
    Name: "Greycat ROC",
    Description: "By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC (Remote Ore Collector) to complement the miners who use it. From its precision gimbaled mining arm to its all-terrain wheels, this solo-operated vehicle shows how important it is to have the right tool for the job. ",
    Career: "Ground",
    Role: "Light Mining",
    Size: 1,
    Cargo: {
        CargoGrid: .8,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.08
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 2420,
    ComponentsMass: 345,
    Dimensions: {
        Length: 6,
        Width: 3.9,
        Height: 3.2
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .4,
            Infrared: .4,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                rollcage_main: 2250
            },
            Parts: {
                light_bar: 10,
                roof: 250,
                rear_frame: 250,
                side_panel_right: 50,
                windshield: 200,
                bottom_hatch: 200,
                top_hatch_front: 200,
                hardpoint_wheel_FL: 1500,
                hardpoint_wheel_FR: 1500,
                hardpoint_wheel_RL: 1500,
                hardpoint_wheel_RR: 1500
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 50,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1047,
            SCMActive: 1255,
            NAV: 0
        },
        Infrared: {
            Start: 1114
        },
        CrossSection: {
            Front: 559,
            Side: 720,
            Top: 821
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 3.54,
        ExpeditedClaimTime: 1.11,
        ExpeditedCost: 1460
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 103950
    }
}, {
    ClassName: "GRIN_ROC_DS",
    Name: "Greycat ROC-DS",
    Description: "By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC-DS (Remote Ore Collector Dual Seat) to let mining pairs do more while in the field. The ROC-DS raises the ground-mining game by adding extra cargo capacity and a second seat to operate the precision gimbaled mining arm. Greycat even upgraded the driver's cab with a protective enclosure to allow for longer excursions in harsh conditions. With the ROC-DS, mining duos now have the right tool to comfortably collect more ore. ",
    Career: "Ground",
    Role: "Light Mining",
    Size: 1,
    Cargo: {
        CargoGrid: 3.5,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.15
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 2580,
    ComponentsMass: 305,
    Dimensions: {
        Length: 6.6,
        Width: 5,
        Height: 3.3
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .4,
            Infrared: .4,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                rollcage_main: 2250
            },
            Parts: {
                light_bar: 50,
                roof: 250,
                rear_frame: 250,
                windshield: 200,
                bottom_hatch: 200,
                top_hatch_front: 200,
                hardpoint_wheel_FL: 1500,
                hardpoint_wheel_FL_assembly: 1,
                hardpoint_wheel_FR: 1500,
                hardpoint_wheel_FR_assembly: 1,
                hardpoint_wheel_RL: 1500,
                hardpoint_wheel_RR: 1500,
                hardpoint_wheel_ML: 1500,
                hardpoint_wheel_MR: 1500
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1046,
            SCMActive: 1254,
            NAV: 0
        },
        Infrared: {
            Start: 994
        },
        CrossSection: {
            Front: 793,
            Side: 815,
            Top: 642
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 4.43,
        ExpeditedClaimTime: 1.39,
        ExpeditedCost: 1825
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 141750
    }
}, {
    ClassName: "GRIN_STV",
    Name: "Greycat STV",
    Career: "Ground",
    Role: "Ground",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .125,
        PersonalInventory: 0
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3570,
    ComponentsMass: 128,
    Dimensions: {
        Length: 4.2,
        Width: 2.8,
        Height: 2
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .42,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: .7,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2500
            },
            Parts: {
                AAsus_wheel_FL: 1500,
                AAsus_wheel_FR: 1500,
                AAsus_wheel_RL: 1500,
                AAsus_wheel_RR: 1500,
                mesh_bonnet_plate: 500,
                Bonnet_Arm: 250,
                fender_fr: 250,
                fender_rl: 250,
                fender_rr: 250,
                fender_fl: 250
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 140,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 105
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 15,
            SCMActive: 15,
            NAV: 0
        },
        Infrared: {
            Start: 795
        },
        CrossSection: {
            Front: 319,
            Side: 574,
            Top: 906
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .2,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 75
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "Astro Armada, Area 18": 75600
    }
}, {
    ClassName: "KRIG_P52_Merlin",
    Name: "Kruger P-52 Merlin",
    Description: "Designed in conjunction with RSI, this elegant short-range snub fighter represents the first ship produced under the Kruger Intergalactic brand. Utilizing centuries of manufacturing expertise, the compact precision of the Kruger hull blends perfectly with the trusted RSI thrusters to grant the Merlin exceptional handling and maneuverability while ensuring that it is capable of fulfilling a variety of roles from combat to scouting to scanning. ",
    Career: "Combat",
    Role: "Snub Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 8479,
    ComponentsMass: 1460,
    Dimensions: {
        Length: 12,
        Width: 7.7,
        Height: 2
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1e3
            },
            Parts: {
                Canopy: 80,
                Body2: 1e3,
                wing_left_animation_geo: 200,
                wing_right_animation_geo: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 6500,
                engine_right: 6500
            },
            Retro: {
                thruster_lower_center_retro: 5750,
                thruster_upper_left_retro: 5750,
                thruster_upper_right_retro: 5750
            },
            Maneuvering: {
                thruster_front_bottom: 5e3,
                thruster_front_left: 5e3,
                thruster_front_right: 5e3,
                thruster_front_top: 5e3,
                thruster_wing_right_bottom: 5e3,
                thruster_wing_right_top: 5e3,
                thruster_wing_left_top: 5e3,
                thruster_wing_left_bottom: 5e3,
                thruster_rear_right: 5e3,
                thruster_rear_left: 5e3,
                thruster_rear_bottom: 5e3,
                thruster_rear_top: 5e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 280,
        MaxSpeed: 1450,
        Pitch: 55,
        Yaw: 55,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1957e3,
            Retro: 38e4,
            Vtol: 0,
            Maneuvering: 2880500
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 18.1,
            Retro: 3.5,
            Strafe: 7,
            Up: 8,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 620,
                BoostSpeedBackward: 290
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.4,
            Z_AccelMultiplicator: 1.6
        }
    },
    FuelManagement: {
        FuelCapacity: 7e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 244.625,
            Retro: 47.5,
            Vtol: 0,
            Maneuvering: 360.062
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4006,
            SCMActive: 4789,
            NAV: 0
        },
        Infrared: {
            Start: 7449
        },
        CrossSection: {
            Front: 988,
            Side: 5928,
            Top: 3794
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1600,
        PilotBurstDPS: 888,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.65,
        ExpeditedClaimTime: .88,
        ExpeditedCost: 1375
    },
    Buy: {
        "Astro Armada, Area 18": 283500
    }
}, {
    ClassName: "KRIG_P72_Archimedes",
    Name: "Kruger P-72 Archimedes",
    Description: "Whether for added security, exploring a system or simply the joy of flying, the Kruger Intergalactic’s P-72 Archimedes snub craft was designed to deliver exceptional handling and nimble acceleration in a sleek and stylish package. ",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 8479,
    ComponentsMass: 1821,
    Dimensions: {
        Length: 12,
        Width: 7.7,
        Height: 2
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 800
            },
            Parts: {
                Canopy: 80,
                Body2: 800,
                wing_left_animation_geo: 200,
                wing_right_animation_geo: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 5e3,
                engine_right: 5e3
            },
            Retro: {
                thruster_lower_center_retro: 4e3,
                thruster_upper_left_retro: 4e3,
                thruster_upper_right_retro: 4e3
            },
            Maneuvering: {
                thruster_front_bottom: 3500,
                thruster_front_left: 3500,
                thruster_front_right: 3500,
                thruster_front_top: 3500,
                thruster_wing_right_bottom: 3500,
                thruster_wing_right_top: 3500,
                thruster_wing_left_top: 3500,
                thruster_wing_left_bottom: 3500,
                thruster_rear_right: 3500,
                thruster_rear_left: 3500,
                thruster_rear_bottom: 3500,
                thruster_rear_top: 3500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 300,
        MaxSpeed: 1485,
        Pitch: 50,
        Yaw: 50,
        Roll: 190,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1497e3,
            Retro: 363e3,
            Vtol: 0,
            Maneuvering: 2314e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.6,
            Retro: 4,
            Strafe: 7,
            Up: 7.5,
            Down: 4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 650,
                BoostSpeedBackward: 300
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.4,
            Z_AccelMultiplicator: 1.6
        }
    },
    FuelManagement: {
        FuelCapacity: 7e6,
        FuelIntakeRate: 3.5,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 187.125,
            Retro: 45.375,
            Vtol: 0,
            Maneuvering: 289.25
        },
        IntakeToMainFuelRatio: 1.87,
        TimeForIntakesToFillTank: 2e6
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6515,
            SCMActive: 7677,
            NAV: 0
        },
        Infrared: {
            Start: 7769
        },
        CrossSection: {
            Front: 984,
            Side: 5906,
            Top: 3780
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2240,
        PilotBurstDPS: 875,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.65,
        ExpeditedClaimTime: .88,
        ExpeditedCost: 1375
    },
    Buy: {
        "Astro Armada, Area 18": 449820
    }
}, {
    ClassName: "MISC_Freelancer",
    Name: "MISC Freelancer",
    Description: "Freelancers are used as long haul merchant ships by major corporations, but they are just as frequently repurposed as dedicated exploration vessels by independent captains who want to operate on the fringes of the galaxy.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 66,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4.91
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 231696,
    ComponentsMass: 7233,
    Dimensions: {
        Length: 38,
        Width: 23.5,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 9500,
                Body: 9500,
                Tail: 6200
            },
            Parts: {
                Roof_Scoop: 1200,
                Wing_Left: 1960,
                Wingflap_Left: 640,
                Wing_Right: 1960,
                WingFlap_Right: 640
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 15750,
                engine_right: 15750
            },
            Retro: {
                retro_left_a: 14560,
                retro_left_b: 14560,
                retro_right_a: 14560
            },
            Maneuvering: {
                thruster_front_left_bottom: 13450,
                thruster_front_right_bottom: 13450,
                thruster_front_left_top: 13450,
                thruster_front_right_top: 13450,
                thruster_centre_right_bottom: 13450,
                thruster_centre_left_bottom: 13450,
                thruster_back_left_top: 13450,
                thruster_back_right_top: 13450,
                thruster_centre_rear_left_bottom: 13450,
                thruster_centre_rear_right_bottom: 13450,
                thruster_rear_left_bottom: 13450,
                thruster_rear_right_bottom: 13450
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 197,
        MaxSpeed: 1010,
        Pitch: 32,
        Yaw: 32,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 145e5,
            Retro: 5445e3,
            Vtol: 0,
            Maneuvering: 1814e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.6,
            Retro: 2,
            Strafe: 4.3,
            Up: 4.3,
            Down: 2.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 108e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1812.5,
            Retro: 680.625,
            Vtol: 0,
            Maneuvering: 2267.5
        },
        IntakeToMainFuelRatio: 2.76,
        TimeForIntakesToFillTank: 216e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 15643,
            SCMActive: 19761,
            NAV: 31123
        },
        Infrared: {
            Start: 10019
        },
        CrossSection: {
            Front: 3747,
            Side: 10042,
            Top: 14988
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 13290,
        PilotBurstDPS: 2735,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 19620
    },
    Insurance: {
        StandardClaimTime: 12.99,
        ExpeditedClaimTime: 4.33,
        ExpeditedCost: 6503
    },
    Buy: {
        "New Deal, Lorville": 3118500
    }
}, {
    ClassName: "MISC_Freelancer_DUR",
    Name: "MISC Freelancer DUR",
    Description: "The Freelancer DUR variant specializes in exploration. Sacrificing 25% cargo capacity of the standard Freelancer for an enhanced jump drive, a more advanced scanner, and an expanded fuel tank may seem like a bad call to some, but those who value discovery over profit will find it to be their ship of choice.",
    Career: "Exploration",
    Role: "Expedition",
    Size: 3,
    Cargo: {
        CargoGrid: 36,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.08
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 234718,
    ComponentsMass: 6985,
    Dimensions: {
        Length: 38,
        Width: 23.5,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 5500,
                Body: 6200,
                Tail: 3200
            },
            Parts: {
                Roof_Scoop: 1200,
                Wing_Right: 1960,
                Wingflap_Right: 640,
                Fuel_Tank_Right_Lower: 300,
                Fuel_Tank_Right_Upper: 300,
                Wing_Left: 1960,
                Wingflap_Left: 640,
                Fuel_Tank_Left_Lower: 300,
                Fuel_Tank_Left_Upper: 300
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 15750,
                engine_left: 15750
            },
            Retro: {
                retro_right_a: 14560,
                retro_right_b: 14560,
                retro_left_a: 14560
            },
            Maneuvering: {
                thruster_front_left_bottom: 13450,
                thruster_front_right_bottom: 13450,
                thruster_front_left_top: 13450,
                thruster_front_right_top: 13450,
                thruster_centre_rear_right_bottom: 13450,
                thruster_centre_rear_left_bottom: 13450,
                thruster_rear_right_bottom: 13450,
                thruster_back_right_top: 13450,
                thruster_rear_left_bottom: 13450,
                thruster_back_left_top: 13450,
                thruster_centre_right_bottom: 13450,
                thruster_centre_left_bottom: 13450
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 197,
        MaxSpeed: 1010,
        Pitch: 32,
        Yaw: 32,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 145e5,
            Retro: 5445e3,
            Vtol: 0,
            Maneuvering: 1814e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 6,
            Retro: 2.2,
            Strafe: 4.5,
            Up: 4.5,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 14e7,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 24e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1812.5,
            Retro: 680.625,
            Vtol: 0,
            Maneuvering: 2267.5
        },
        IntakeToMainFuelRatio: 2.76,
        TimeForIntakesToFillTank: 28e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 16027,
            SCMActive: 20345,
            NAV: 31507
        },
        Infrared: {
            Start: 11206
        },
        CrossSection: {
            Front: 4024,
            Side: 10783,
            Top: 16094
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 13290,
        PilotBurstDPS: 3145,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 19707
    },
    Insurance: {
        StandardClaimTime: 12.99,
        ExpeditedClaimTime: 4.33,
        ExpeditedCost: 6035
    },
    Buy: {
        "New Deal, Lorville": 3316950
    }
}, {
    ClassName: "MISC_Freelancer_MAX",
    Name: "MISC Freelancer MAX",
    Description: "Freelancer variant with additional cargo capacity at the expense of weapons. The Freelancer MAX variant sacrifices weaponry for an increased cargo capacity making it ideal for equipment or raw materials transport.",
    Career: "Transporter",
    Role: "Heavy Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 120,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4.91
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 360208,
    ComponentsMass: 7340,
    Dimensions: {
        Length: 38,
        Width: 36,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 5500,
                Body: 6200,
                Tail: 3200
            },
            Parts: {
                Wing_Right: 1960,
                Wingflap_Right: 640,
                Wing_Left: 1960,
                Wingflap_Left: 640,
                Roof_Scoop: 1200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right2: 15750,
                engine_right: 15750,
                engine_left2: 15750,
                engine_left: 15750
            },
            Retro: {
                retro_right_b: 14560,
                retro_right_a: 14560,
                retro_left_b: 14560,
                retro_left_a: 14560
            },
            Maneuvering: {
                thruster_front_right_top: 13450,
                thruster_front_right_bottom: 13450,
                thruster_front_left_top: 13450,
                thruster_front_left_bottom: 13450,
                thruster_centre_right_bottom: 13450,
                thruster_centre_left_bottom: 13450,
                thruster_rear_right_bottom: 13450,
                thruster_rear_left_bottom: 13450,
                thruster_centre_rear_right_bottom: 13450,
                thruster_centre_rear_left_bottom: 13450,
                thruster_back_right_top: 13450,
                thruster_back_left_top: 13450
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 197,
        MaxSpeed: 1010,
        Pitch: 32,
        Yaw: 32,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 29e6,
            Retro: 112e5,
            Vtol: 0,
            Maneuvering: 1814e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8,
            Retro: 3.1,
            Strafe: 3,
            Up: 3,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 585e5,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3625,
            Retro: 1400,
            Vtol: 0,
            Maneuvering: 2267.5
        },
        IntakeToMainFuelRatio: 1.38,
        TimeForIntakesToFillTank: 117e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 18676,
            SCMActive: 23400,
            NAV: 34156
        },
        Infrared: {
            Start: 12964
        },
        CrossSection: {
            Front: 4788,
            Side: 12833,
            Top: 19153
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 13290,
        PilotBurstDPS: 2187,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 22707
    },
    Insurance: {
        StandardClaimTime: 16.46,
        ExpeditedClaimTime: 5.49,
        ExpeditedCost: 8028
    },
    Buy: {
        "New Deal, Lorville": 4252500
    }
}, {
    ClassName: "MISC_Freelancer_MIS",
    Name: "MISC Freelancer MIS",
    Description: "The Freelancer MIS is a limited edition militarized variant of the classic mercantile ship developed by the UEE. These were produced in very small quantity due to some early payload incidents. This version sacrifices the majority of the cargo capacity to make way for missiles.",
    Career: "Combat",
    Role: "Gunship",
    Size: 3,
    Cargo: {
        CargoGrid: 36,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 3.71
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 236353,
    ComponentsMass: 9312,
    Dimensions: {
        Length: 38,
        Width: 23.5,
        Height: 9.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 5500,
                Body: 6200,
                Tail: 3200
            },
            Parts: {
                Roof_Scoop: 1200,
                Wing_Right: 1960,
                WingFlap_Right: 640,
                Wing_Left: 1960,
                WingFlap_Left: 640
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right: 15750,
                engine_left: 15750
            },
            Retro: {
                retro_right_a: 14560,
                retro_right_b: 14560,
                retro_left_a: 14560,
                retro_left_b: 14560
            },
            Maneuvering: {
                thruster_front_left_bottom: 13450,
                thruster_front_right_bottom: 13450,
                thruster_front_left_top: 13450,
                thruster_front_right_top: 13450,
                thruster_centre_rear_right_bottom: 13450,
                thruster_centre_rear_left_bottom: 13450,
                thruster_rear_right_bottom: 13450,
                thruster_back_right_top: 13450,
                thruster_rear_left_bottom: 13450,
                thruster_back_left_top: 13450,
                thruster_centre_right_bottom: 13450,
                thruster_centre_left_bottom: 13450
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 197,
        MaxSpeed: 1010,
        Pitch: 32,
        Yaw: 32,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 145e5,
            Retro: 726e4,
            Vtol: 0,
            Maneuvering: 1814e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 6,
            Retro: 3,
            Strafe: 4.5,
            Up: 4.5,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 58e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1812.5,
            Retro: 907.5,
            Vtol: 0,
            Maneuvering: 2267.5
        },
        IntakeToMainFuelRatio: 2.76,
        TimeForIntakesToFillTank: 116e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 15755,
            SCMActive: 19875,
            NAV: 31235
        },
        Infrared: {
            Start: 10194
        },
        CrossSection: {
            Front: 3814,
            Side: 10222,
            Top: 15257
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 14220,
        PilotBurstDPS: 2735,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 52975
    },
    Insurance: {
        StandardClaimTime: 15.59,
        ExpeditedClaimTime: 5.2,
        ExpeditedCost: 10465
    },
    Buy: {
        "New Deal, Lorville": 4961250
    }
}, {
    ClassName: "MISC_Fury",
    Name: "Mirai Fury",
    Description: "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury snub fighter from Mirai uses its four halo-mounted size 2 laser repeaters to redefine short-range space combat.",
    Career: "Combat",
    Role: "Snub Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .45,
        PersonalInventory: .22
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 15339,
    ComponentsMass: 2705,
    Dimensions: {
        Length: 8,
        Width: 5.4,
        Height: 2.6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1486
            },
            Parts: {
                Body_Top_Plate: 500,
                Front_Lower_Plate: 500,
                Mesh_Wing_Top_Left: 340,
                Mesh_Slide_Top_Left: 340,
                Mesh_Flap_Top_Left: 340,
                Mesh_Wing_Top_Right: 340,
                Mesh_Slide_Top_Right: 340,
                Mesh_Flap_Top_Right: 340,
                Mesh_Wing_Bottom_Left: 340,
                Mesh_Slide_Bottom_Left: 340,
                Mesh_Flap_Bottom_Left: 340,
                Mesh_Wing_Bottom_Right: 340,
                Mesh_Slide_Bottom_Right: 340,
                Mesh_Flap_Bottom_Right: 340
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_top_left: 7500,
                thruster_main_top_right: 7500,
                thruster_main_bottom_left: 7500,
                thruster_main_bottom_right: 7500
            },
            Maneuvering: {
                thruster_front_side_left: 7e3,
                thruster_front_side_right: 7e3,
                thruster_rear_side_left: 7e3,
                thruster_rear_side_right: 7e3,
                thruster_front_top_left: 7e3,
                thruster_rear_top_left: 7e3,
                thruster_front_top_right: 7e3,
                thruster_rear_top_right: 7e3,
                thruster_front_bottom_left: 7e3,
                thruster_rear_bottom_left: 7e3,
                thruster_front_bottom_right: 7e3,
                thruster_rear_bottom_right: 7e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 238,
        MaxSpeed: 1263,
        Pitch: 65,
        Yaw: 65,
        Roll: 215,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2917e3,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 4324e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15.4,
            Retro: 4.4,
            Strafe: 10.4,
            Up: 11.2,
            Down: 5.8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 565,
                BoostSpeedBackward: 275
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 275e4,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 364.625,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 540.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4405,
            SCMActive: 4712,
            NAV: 0
        },
        Infrared: {
            Start: 11790
        },
        CrossSection: {
            Front: 3265,
            Side: 6429,
            Top: 6058
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1190,
        PilotBurstDPS: 1312,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 1.89,
        ExpeditedClaimTime: .63,
        ExpeditedCost: 1483
    },
    "New Ship": "Mirai Fury",
    Dimensions2: {
        Length: 6.13,
        Width: 3.8,
        Height: 3.27
    },
    Buy: {
        "Astro Armada, Area 18": 727650,
        "New Deal, Lorville": 727650
    }
}, {
    ClassName: "MISC_Fury_LX",
    Name: "Mirai Fury LX",
    Description: "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury LX racing ship from Mirai switches out the lithe ship’s offensive capabilities to make room for additional maneuvering thrusters perfect for getting across the finish line.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .45,
        PersonalInventory: .22
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 14232,
    ComponentsMass: 982,
    Dimensions: {
        Length: 7,
        Width: 5.4,
        Height: 2.6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .58,
            Energy: 1.15,
            Distortion: 1.15
        },
        SignalMultipliers: {
            Electromagnetic: 1.5,
            Infrared: 1.5,
            CrossSection: 1.5
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1377
            },
            Parts: {
                Body_Top_Plate: 400,
                Front_Lower_Plate: 400,
                Mesh_Wing_Bottom_Left: 240,
                Mesh_Wing_Bottom_Right: 240,
                Mesh_Wing_Top_Left: 240,
                Mesh_Wing_Top_Right: 240
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_bottom_left: 7500,
                thruster_main_bottom_right: 7500,
                thruster_main_top_left: 7500,
                thruster_main_top_right: 7500
            },
            Maneuvering: {
                thruster_front_side_left: 7e3,
                thruster_front_side_right: 7e3,
                thruster_rear_side_left: 7e3,
                thruster_rear_side_right: 7e3,
                thruster_mid_bottom_left: 7e3,
                thruster_front_bottom_left: 7e3,
                thruster_rear_bottom_left: 7e3,
                thruster_mid_bottom_right: 7e3,
                thruster_front_bottom_right: 7e3,
                thruster_rear_bottom_right: 7e3,
                thruster_mid_top_left: 7e3,
                thruster_front_top_left: 7e3,
                thruster_rear_top_left: 7e3,
                thruster_mid_top_right: 7e3,
                thruster_front_top_right: 7e3,
                thruster_rear_top_right: 7e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 249,
        MaxSpeed: 1281,
        Pitch: 71.5,
        Yaw: 71.5,
        Roll: 232.1,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 262e4,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 4164e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.2,
            Retro: 4.5,
            Strafe: 11.4,
            Up: 11.9,
            Down: 6.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 587,
                BoostSpeedBackward: 284
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.37,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 275e4,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 327.5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 520.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1949,
            SCMActive: 2292,
            NAV: 0
        },
        Infrared: {
            Start: 11882
        },
        CrossSection: {
            Front: 3498,
            Side: 6888,
            Top: 6490
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2100,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 1.8,
        ExpeditedClaimTime: .6,
        ExpeditedCost: 1400
    },
    "New Ship": "Mirai Fury LX",
    Dimensions2: {
        Length: 6.13,
        Width: 3.8,
        Height: 3.27
    },
    Buy: {
        "Astro Armada, Area 18": 824670
    }
}, {
    ClassName: "MISC_Fury_Miru",
    Name: "Mirai Fury MX",
    Description: "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury MX snub bomber from Mirai uses its twenty halo-mounted missiles to devastate targets during short-range space combat.",
    Career: "Combat",
    Role: "Snub Bomber",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .45,
        PersonalInventory: .22
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 15339,
    ComponentsMass: 3377,
    Dimensions: {
        Length: 7,
        Width: 5.4,
        Height: 2.6
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1486
            },
            Parts: {
                Body_Top_Plate: 500,
                Front_Lower_Plate: 500,
                Mesh_Wing_Top_Left: 340,
                Mesh_Slide_Top_Left: 340,
                Mesh_Flap_Top_Left: 340,
                Mesh_Wing_Top_Right: 340,
                Mesh_Slide_Top_Right: 340,
                Mesh_Flap_Top_Right: 340,
                Mesh_Wing_Bottom_Left: 340,
                Mesh_Slide_Bottom_Left: 340,
                Mesh_Flap_Bottom_Left: 340,
                Mesh_Wing_Bottom_Right: 340,
                Mesh_Slide_Bottom_Right: 340,
                Mesh_Flap_Bottom_Right: 340
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_top_left: 7500,
                thruster_main_top_right: 7500,
                thruster_main_bottom_left: 7500,
                thruster_main_bottom_right: 7500
            },
            Maneuvering: {
                thruster_front_side_left: 7e3,
                thruster_front_side_right: 7e3,
                thruster_rear_side_left: 7e3,
                thruster_rear_side_right: 7e3,
                thruster_front_top_left: 7e3,
                thruster_rear_top_left: 7e3,
                thruster_front_top_right: 7e3,
                thruster_rear_top_right: 7e3,
                thruster_front_bottom_left: 7e3,
                thruster_rear_bottom_left: 7e3,
                thruster_front_bottom_right: 7e3,
                thruster_rear_bottom_right: 7e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 238,
        MaxSpeed: 1263,
        Pitch: 65,
        Yaw: 65,
        Roll: 215,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 302e4,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 4476e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15.5,
            Retro: 4.4,
            Strafe: 10.6,
            Up: 11.2,
            Down: 5.8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 565,
                BoostSpeedBackward: 275
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 275e4,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 377.5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 559.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2801,
            SCMActive: 3107,
            NAV: 0
        },
        Infrared: {
            Start: 9830
        },
        CrossSection: {
            Front: 3265,
            Side: 6429,
            Top: 6058
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1190,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 37665
    },
    Insurance: {
        StandardClaimTime: 1.89,
        ExpeditedClaimTime: .63,
        ExpeditedCost: 2299
    },
    "New Ship": "Mirai Fury MX",
    Dimensions2: {
        Length: 6.13,
        Width: 3.8,
        Height: 3.27
    },
    Buy: {
        "New Deal, Lorville": 727650
    }
}, {
    ClassName: "MISC_Hull_A",
    Name: "MISC Hull A",
    Description: "The smallest, most affordable Hull. The Hull A is great for those just striking out in the galaxy on their own. The Hull A is most similar to the Aurora and Mustang, but lacks the ‘jack of all trades’ nature. Where the others trade cargo capacity for firepower or speed, the Hull A is 100% on-mission transport.",
    Career: "Transporter",
    Role: "Light Freight",
    Size: 2,
    Cargo: {
        CargoGrid: 64,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.01
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 122650,
    ComponentsMass: 2535,
    Dimensions: {
        Length: 17,
        Width: 4,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e4,
                tail_geo: 3e3,
                nose: 2e4
            },
            Parts: {
                winglet_right: 150,
                winglet_left: 150,
                spindle_connector_rear_geo: 400,
                hydraulic_arm_front_geo_left: 1e3,
                hydraulic_arm_connector_geo_left: 1e3,
                hydraulic_cargoplates_mount_geo_left: 1e3,
                DEBRIS_cargoplate_top_left: 2e3,
                SHIELD_SDF_01_LT: 4e3,
                SHIELD_SDF_02_LT: 4e3,
                SHIELD_SDF_03_LT: 4e3,
                SHIELD_SDF_04_LT: 4e3,
                DEBRIS_cargoplate_bot_left: 2e3,
                SHIELD_SDF_01_LB: 4e3,
                SHIELD_SDF_02_LB: 4e3,
                SHIELD_SDF_03_LB: 4e3,
                SHIELD_SDF_04_LB: 4e3,
                hydraulic_arm_front_geo_right: 1e3,
                hydraulic_arm_connector_geo_right: 1e3,
                hydraulic_cargoplates_mount_geo_right: 1e3,
                DEBRIS_cargoplate_top_right: 2e3,
                SHIELD_SDF_01_RT: 4e3,
                SHIELD_SDF_02_RT: 4e3,
                SHIELD_SDF_03_RT: 4e3,
                SHIELD_SDF_04_RT: 4e3,
                DEBRIS_cargoplate_bot_right: 2e3,
                SHIELD_SDF_01_RB: 4e3,
                SHIELD_SDF_02_RB: 4e3,
                SHIELD_SDF_03_RB: 4e3,
                SHIELD_SDF_04_RB: 4e3,
                piston_01_geo: 400,
                piston_02_tube: 400,
                piston_02_geo: 400,
                door_02_geo_rear_right: 100,
                door_lock_geo_rear_right: 100,
                door_01_geo_rear_right: 100,
                tail_geo_spinner: 400,
                tail_geo_bot: 1500,
                tail_geo_top: 1500,
                hydraulic_arm_back_geo_left: 400,
                hydraulic_arm_back_geo_right: 400,
                door_02_geo_centre_left: 400,
                door_lock_geo_centre_left: 400,
                door_01_geo_centre_left: 400,
                door_02_geo_centre_right: 400,
                door_01_geo_centre_right: 400,
                door_geo_front_right: 400,
                door_geo_front_left: 400
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_aux_left: 11400,
                thruster_aux_right: 11400,
                thruster_main: 11400
            },
            Retro: {
                thruster_retro_right: 10500,
                thruster_retro_left: 10500
            },
            Vtol: {
                thruster_vtol_rear_left: 10500,
                thruster_vtol_rear_right: 10500,
                thruster_vtol_front_right: 10500,
                thruster_vtol_front_left: 10500
            },
            Maneuvering: {
                thruster_mav_rear_bottom_left: 1e4,
                thruster_mav_rear_bottom_right: 1e4,
                thruster_mav_rear_side_left: 1e4,
                thruster_mav_rear_side_right: 1e4,
                thruster_mav_rear_top_left: 1e4,
                thruster_mav_rear_top_right: 1e4,
                thruster_mav_front_top_right: 1e4,
                thruster_mav_front_top_left: 1e4,
                thruster_mav_front_side_right: 1e4,
                thruster_mav_front_side_left: 1e4,
                thruster_mav_front_bottom_right: 1e4,
                thruster_mav_front_bottom_left: 1e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 140,
        MaxSpeed: 950,
        Pitch: 35,
        Yaw: 35,
        Roll: 100,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 633e4,
            Retro: 508e4,
            Vtol: 3804e3,
            Maneuvering: 6336e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.1,
            Retro: 4.1,
            Strafe: 2.5,
            Up: 4,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 340,
                BoostSpeedBackward: 150
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .7,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 16399999999999998e-9,
        FuelIntakeRate: 7,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 791.25,
            Retro: 635,
            Vtol: 475.5,
            Maneuvering: 792
        },
        IntakeToMainFuelRatio: .88,
        TimeForIntakesToFillTank: 234285714e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 11233,
            SCMActive: 13910,
            NAV: 18766
        },
        Infrared: {
            Start: 11176
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 5.95,
        ExpeditedClaimTime: 1.98,
        ExpeditedCost: 2700
    },
    Dimensions2: {
        Length: 22,
        Width: 8,
        Height: 4
    },
    Buy: {
        "New Deal, Lorville": 1701e3
    }
}, {
    ClassName: "MISC_Hull_C",
    Name: "MISC Hull C",
    Description: "Often called the most common ship in the galaxy, the Hull C is the most-produced of the range and is considered by many to be the most versatile. Intended to hit the ‘sweet spot’ between the smaller single-person transports and the massive superfreighters that make up the rest of the range, the Hull C offers the expansive modularity of the larger ships while still retaining a modicum of the maneuverability allowed the low end of the range.",
    Career: "Transporter",
    Role: "Heavy Freight",
    Size: 5,
    Cargo: {
        CargoGrid: 4608,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 6.79
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 886930,
    ComponentsMass: 24482.8,
    Dimensions: {
        Length: 90,
        Width: 35.5,
        Height: 25
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6e4
            },
            Parts: {
                Nose: 3e4,
                Vtol_Door_L_Geo: 8e3,
                Vtol_Door_R_Geo: 8e3,
                Tunnel_Front: 1e4,
                Center_1_ph_geo: 8e3,
                FoldingSection001_geo: 8e3,
                DEBRIS_Strut_Inner005: 8e3,
                DEBRIS_Strut_Outer005: 8e3,
                DEBRIS_Strut_Inner006: 8e3,
                DEBRIS_Strut_Outer006: 8e3,
                DEBRIS_Strut_Inner007: 8e3,
                DEBRIS_Strut_Outer007: 8e3,
                DEBRIS_Strut_Inner008: 8e3,
                DEBRIS_Strut_Outer008: 8e3,
                DEBRIS_Strut_Inner001: 8e3,
                DEBRIS_Strut_Outer001: 8e3,
                DEBRIS_Strut_Inner004: 8e3,
                DEBRIS_Strut_Outer004: 8e3,
                DEBRIS_Strut_Inner003: 8e3,
                DEBRIS_Strut_Outer003: 8e3,
                DEBRIS_Strut_Inner002: 8e3,
                DEBRIS_Strut_Outer002: 8e3,
                Rear: 20500,
                Engine_Left: 8e3,
                EngineTop_Left: 8e3,
                EngineDebris: 1e3,
                Engine_Right: 8e3,
                EngineTop_Right: 8e3,
                EngineDebris001: 1e3,
                Center: 9e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_bottom_middle: 15e3,
                thruster_main_top_middle: 15e3,
                thruster_main_top_left: 15e3,
                thruster_main_bottom_left: 15e3,
                thruster_main_top_right: 15e3,
                thruster_main_bottom_right: 15e3
            },
            Retro: {
                thruster_retro_top_left: 15e3,
                thruster_retro_top_right: 15e3,
                thruster_retro_bottom_left: 15e3,
                thruster_retro_bottom_right: 15e3
            },
            Vtol: {
                thruster_vtol_outer_front_right: 15e3,
                thruster_vtol_outer_front_left: 15e3,
                thruster_vtol_inner_front_right: 15e3,
                thruster_vtol_inner_front_left: 15e3,
                thruster_vtol_outer_rear_left: 15e3,
                thruster_vtol_inner_rear_left: 15e3,
                thruster_vtol_outer_rear_right: 15e3,
                thruster_vtol_inner_rear_right: 15e3
            },
            Maneuvering: {
                thruster_bottom_front_right: 15e3,
                thruster_bottom_front_left: 15e3,
                thruster_top_front_left: 15e3,
                thruster_side_front_left: 15e3,
                thruster_top_front_right: 15e3,
                thruster_side_front_right: 15e3,
                thruster_top_rear_left: 15e3,
                thruster_side_rear_left: 15e3,
                thruster_bottom_rear_left: 15e3,
                thruster_side_rear_right: 15e3,
                thruster_top_rear_right: 15e3,
                thruster_bottom_rear_right: 15e3,
                thruster_bottom_mid_left: 15e3,
                thruster_top_mid_left: 15e3,
                thruster_top_mid_right: 15e3,
                thruster_bottom_mid_right: 15e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 110,
        MaxSpeed: 890,
        Pitch: 16,
        Yaw: 16,
        Roll: 25,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 276e5,
            Retro: 201e5,
            Vtol: 28e5,
            Maneuvering: 5564e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.8,
            Retro: 2,
            Strafe: .7,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 290,
                BoostSpeedBackward: 100
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 877e6,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 86e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 5,
            Vtol: 10,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 3450,
            Retro: 2512.5,
            Vtol: 350,
            Maneuvering: 6955
        },
        IntakeToMainFuelRatio: 1.45,
        TimeForIntakesToFillTank: 1754e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 33778,
            SCMActive: 40563,
            NAV: 49313
        },
        Infrared: {
            Start: 25332
        },
        CrossSection: {
            Front: 15791,
            Side: 15791,
            Top: 32871
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 224400,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 45,
        ExpeditedClaimTime: 15,
        ExpeditedCost: 22500
    },
    "New Ship": "MISC Hull C",
    Dimensions2: {
        Length: 125,
        Width: 60,
        Height: 60
    },
    Buy: {
        "New Deal, Lorville": 16537500
    }
}, {
    ClassName: "MISC_Prospector",
    Name: "MISC Prospector",
    Description: "For years, the Prospector has been the universe’s preferred mining vessel for solo operators. Featuring MISC’s sleek design sensibility and a bevy of upgraded high-tech mining tools, the 2947 Prospector perfectly balances form and functionality. ",
    Career: "Industrial",
    Role: "Light Mining",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 32,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 137396,
    ComponentsMass: 3471,
    Dimensions: {
        Length: 26.5,
        Width: 16.5,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1.05,
            Distortion: 1.05
        },
        SignalMultipliers: {
            Electromagnetic: 1.5,
            Infrared: 1.5,
            CrossSection: 1.5
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 8198,
                Rear: 8198
            },
            Parts: {
                Coupling_FR: 1e3,
                Basket_R: 1e3,
                Coupling_FL: 1e3,
                Basket_L: 1e3,
                Nose_Pipes: 400,
                hardpoint_landinggear_front: 200,
                Coupling_RL: 100,
                Coupling_RR: 100,
                Rear_Pipes: 400,
                hardpoint_landinggear_left: 200,
                hardpoint_landinggear_right: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_rear_middle: 11400,
                thruster_main_rear_right: 11400,
                thruster_main_rear_left: 11400
            },
            Retro: {
                thruster_retro_left: 10500,
                thruster_retro_right: 10500,
                thruster_retro_top: 10500
            },
            Maneuvering: {
                thruster_front_left_bottom: 1e4,
                thruster_front_right_bottom: 1e4,
                thruster_front_right_side: 1e4,
                thruster_front_left_side: 1e4,
                thruster_front_left_top: 1e4,
                thruster_front_right_top: 1e4,
                thruster_rear_left_top: 1e4,
                thruster_rear_right_top: 1e4,
                thruster_rear_right_bottom: 1e4,
                thruster_rear_left_bottom: 1e4,
                thruster_rear_left_side: 1e4,
                thruster_rear_right_side: 1e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 156,
        MaxSpeed: 994,
        Pitch: 32,
        Yaw: 32,
        Roll: 75,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 76e5,
            Retro: 53e5,
            Vtol: 0,
            Maneuvering: 1854e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.5,
            Retro: 3.8,
            Strafe: 3.2,
            Up: 3.5,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 371,
                BoostSpeedBackward: 160
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.1,
            RampDown: .7,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 21e6,
        FuelIntakeRate: 13,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 3.75,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 950,
            Retro: 662.5,
            Vtol: 0,
            Maneuvering: 2317.5
        },
        IntakeToMainFuelRatio: 1.37,
        TimeForIntakesToFillTank: 161538462e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 22563,
            SCMActive: 27029,
            NAV: 33850
        },
        Infrared: {
            Start: 13549
        },
        CrossSection: {
            Front: 4800,
            Side: 10200,
            Top: 16500
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 5550,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 9,
        ExpeditedClaimTime: 3,
        ExpeditedCost: 3040
    },
    Buy: {
        "New Deal, Lorville": 2929500
    }
}, {
    ClassName: "MISC_Razor",
    Name: "Mirai Razor",
    Description: "This advanced racer features an advanced composite spaceframe that puts pure speed ahead of everything else... it's the ship for pilots who want to leave the competition in the dust.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 11701,
    ComponentsMass: 1535,
    Dimensions: {
        Length: 11.5,
        Width: 8.2,
        Height: 2.7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                hull_front: 800,
                hull_rear: 1700
            },
            Parts: {
                wing_front_left: 600,
                wing_front_right: 600,
                wing_bridge_left: 400,
                wing_bridge_right: 400,
                wing_rear_left: 600,
                wing_rear_right: 600,
                wing_top: 400,
                canopy_front: 550,
                canopy_top: 550,
                canopy_left: 550,
                canopy_right: 550
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 5670,
                engine_right: 5670
            },
            Retro: {
                thruster_retro_left: 5e3,
                thruster_retro_right: 5e3
            },
            Maneuvering: {
                thruster_RR_top: 4560,
                thruster_RR_side: 4560,
                thruster_RR_bottom: 4560,
                thruster_RL_bottom: 4560,
                thruster_RL_side: 4560,
                thruster_RL_top: 4560,
                thruster_FR_top: 4560,
                thruster_FR_side: 4560,
                thruster_FR_bottom: 4560,
                thruster_FL_bottom: 4560,
                thruster_FL_side: 4560,
                thruster_FL_top: 4560
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 280,
        MaxSpeed: 1450,
        Pitch: 55,
        Yaw: 55,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 232e4,
            Retro: 451400,
            Vtol: 0,
            Maneuvering: 2475634
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 18,
            Retro: 3.5,
            Strafe: 4.4,
            Up: 5.9,
            Down: 4.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 620,
                BoostSpeedBackward: 290
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 1e6,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 290,
            Retro: 56.425,
            Vtol: 0,
            Maneuvering: 309.454
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2235,
            SCMActive: 2447,
            NAV: 9768
        },
        Infrared: {
            Start: 7346
        },
        CrossSection: {
            Front: 1513,
            Side: 4190,
            Top: 6402
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2240,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 6.075,
        ExpeditedClaimTime: 2.025,
        ExpeditedCost: 3040
    },
    Buy: {
        "New Deal, Lorville": 1863540
    }
}, {
    ClassName: "MISC_Razor_EX",
    Name: "Mirai Razor EX",
    Description: "Outfitted with signature-reducing materials, the Razor EX was a specialty build for the UEE Advocacy for use in surveillance and extraction operations. Although the EX was ultimately rejected for widespread use, a variation of the model was released for members of the public looking to keep a lower profile.",
    Career: "Combat",
    Role: "Stealth Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 11700,
    ComponentsMass: 1559,
    Dimensions: {
        Length: 11.5,
        Width: 8.2,
        Height: 2.7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .6,
            CrossSection: .6
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                hull_front: 800,
                hull_rear: 1700
            },
            Parts: {
                wing_front_left: 600,
                wing_front_right: 600,
                wing_bridge_left: 400,
                wing_bridge_right: 400,
                wing_rear_left: 600,
                wing_rear_right: 600,
                wing_top: 400,
                canopy_front: 550,
                canopy_top: 550,
                canopy_left: 550,
                canopy_right: 550
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 5670,
                engine_right: 5670
            },
            Retro: {
                thruster_retro_left: 5e3,
                thruster_retro_right: 5e3
            },
            Maneuvering: {
                thruster_RR_top: 4560,
                thruster_RR_side: 4560,
                thruster_RR_bottom: 4560,
                thruster_RL_bottom: 4560,
                thruster_RL_side: 4560,
                thruster_RL_top: 4560,
                thruster_FR_top: 4560,
                thruster_FR_side: 4560,
                thruster_FR_bottom: 4560,
                thruster_FL_bottom: 4560,
                thruster_FL_side: 4560,
                thruster_FL_top: 4560
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 280,
        MaxSpeed: 1450,
        Pitch: 55,
        Yaw: 55,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 232e4,
            Retro: 451400,
            Vtol: 0,
            Maneuvering: 2368e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 18.1,
            Retro: 3.5,
            Strafe: 4.5,
            Up: 6,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 620,
                BoostSpeedBackward: 290
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 1e6,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 290,
            Retro: 56.425,
            Vtol: 0,
            Maneuvering: 296
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2949,
            SCMActive: 3512,
            NAV: 7469
        },
        Infrared: {
            Start: 5427
        },
        CrossSection: {
            Front: 1223,
            Side: 3386,
            Top: 5173
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1280,
        PilotBurstDPS: 1120,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2152
    },
    Insurance: {
        StandardClaimTime: 5.91,
        ExpeditedClaimTime: 1.97,
        ExpeditedCost: 2740
    },
    Buy: {
        "Astro Armada, Area 18": 1757700,
        "New Deal, Lorville": 1757700
    }
}, {
    ClassName: "MISC_Razor_LX",
    Name: "Mirai Razor LX",
    Description: "The Razor gets supercharged. The LX features an overclocked engine to unleash blazing top speeds. This power comes at a cost with reduced maneuverability and armaments making it ideal for straight-shot racing. But who needs weapons when you’re leaving your competition in the dust.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: .43
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 11701,
    ComponentsMass: 1383,
    Dimensions: {
        Length: 11.5,
        Width: 8.2,
        Height: 2.7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                hull_front: 900,
                hull_rear: 700
            },
            Parts: {
                wing_front_left: 100,
                wing_front_right: 100,
                wing_bridge_left: 100,
                wing_bridge_right: 100,
                wing_rear_left: 100,
                wing_rear_right: 100,
                wing_top: 100,
                canopy_front: 150,
                canopy_top: 150,
                canopy_left: 150,
                canopy_right: 150
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 5670,
                engine_right: 5670
            },
            Retro: {
                thruster_retro_left: 5e3,
                thruster_retro_right: 5e3
            },
            Maneuvering: {
                thruster_RR_top: 4560,
                thruster_RR_side: 4560,
                thruster_RR_bottom: 4560,
                thruster_RL_bottom: 4560,
                thruster_RL_side: 4560,
                thruster_RL_top: 4560,
                thruster_FR_top: 4560,
                thruster_FR_side: 4560,
                thruster_FR_bottom: 4560,
                thruster_FL_bottom: 4560,
                thruster_FL_side: 4560,
                thruster_FL_top: 4560
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 275,
        MaxSpeed: 1400,
        Pitch: 55,
        Yaw: 55,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 228e4,
            Retro: 451400,
            Vtol: 0,
            Maneuvering: 2472e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 17.9,
            Retro: 3.5,
            Strafe: 4.4,
            Up: 5.9,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 620,
                BoostSpeedBackward: 290
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 1e6,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 285,
            Retro: 56.425,
            Vtol: 0,
            Maneuvering: 309
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 5509,
            SCMActive: 6402,
            NAV: 13042
        },
        Infrared: {
            Start: 8755
        },
        CrossSection: {
            Front: 2208,
            Side: 6116,
            Top: 9343
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2240,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 6.075,
        ExpeditedClaimTime: 2.025,
        ExpeditedCost: 3040
    },
    Buy: {
        "Astro Armada, Area 18": 1927800,
        "New Deal, Lorville": 1927800
    }
}, {
    ClassName: "MISC_Reliant",
    Name: "MISC Reliant Kore",
    Description: "With the Reliant Kore, MISC adds to its already impressive lineup of ships, a smaller introductory-class spacecraft. Utilizing advanced Xi’An designs, the Reliant features broad, sleek wings, omni-directional thrusters and a fully-articulated two-seat cockpit that supports horizontal and vertical flight modes. All of this combines with a larger carrying capacity than many ships in its class to make the Kore a natural choice for short-range hauling, or with the simple addition of a few optional components, this can-do ship can do anything you dream of.",
    Career: "Multi-Role",
    Role: "Starter / Light Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 6,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.03
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 39353,
    ComponentsMass: 3504,
    Dimensions: {
        Length: 14.5,
        Width: 28.5,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 3e3,
                Body: 3500
            },
            Parts: {
                Wing_Left: 3500,
                Vertical_Stabilizer_Wing_Top_Left: 25,
                Vertical_Stabilizer_Wing_Bottom_Left: 25,
                Wing_Right: 3e3,
                Vertical_Stabilizer_Wing_Top_Right: 25,
                Vertical_Stabilizer_Wing_Bottom_Right: 25,
                Engine_Left: 1180,
                Engine_Right: 1180
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 8500,
                thruster_main_right: 8500
            },
            Retro: {
                Thruster_LRF: 6250,
                Thruster_LLF: 6250,
                Thruster_ULF: 6250,
                Thruster_URF: 6250
            },
            Maneuvering: {
                Thruster_LLS: 6250,
                Thruster_LRS: 6250,
                Thruster_LRR: 6250,
                Thruster_LRB: 6250,
                Thruster_LLL: 6250,
                Thruster_LLB: 6250,
                Thruster_ULB: 6250,
                Thruster_ULL: 6250,
                Thruster_URB: 6250,
                Thruster_URR: 6250,
                Thruster_ULS: 6250,
                Thruster_URS: 6250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2e6,
            Retro: 2128e3,
            Vtol: 0,
            Maneuvering: 15472e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.6,
            Retro: 5.3,
            Strafe: 7.9,
            Up: 7.9,
            Down: 7.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.33,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.33,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 8,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 250,
            Retro: 266,
            Vtol: 0,
            Maneuvering: 1934
        },
        IntakeToMainFuelRatio: 3.2,
        TimeForIntakesToFillTank: 1312500
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4287,
            SCMActive: 4928,
            NAV: 11820
        },
        Infrared: {
            Start: 9106
        },
        CrossSection: {
            Front: 11438,
            Side: 1601,
            Top: 5719
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 1312,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: .675,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 340
    },
    Buy: {
        "New Deal, Lorville": 1719900
    }
}, {
    ClassName: "MISC_Reliant_Mako",
    Name: "MISC Reliant Mako",
    Description: "The Empire depends on up-to-the-second information, which is why reporters need to be able to go where the news is happening: wherever, whenever. Enter the Mako, all the flexibility and dependability of a MISC Reliant combined with a state-of-the-art Cernan camera package to capture every moment as it happens with the clarity and accuracy that makes headlines. ",
    Career: "Multi-Role",
    Role: "Reporting",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.68
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 39353,
    ComponentsMass: 2464,
    Dimensions: {
        Length: 14.5,
        Width: 28.5,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 3e3,
                Body: 3500
            },
            Parts: {
                Wing_Left: 3500,
                Vertical_Stabilizer_Wing_Top_Left: 25,
                Vertical_Stabilizer_Wing_Bottom_Left: 25,
                Wing_Right: 3e3,
                Vertical_Stabilizer_Wing_Top_Right: 25,
                Vertical_Stabilizer_Wing_Bottom_Right: 25,
                Engine_Left: 1180,
                Engine_Right: 1180
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 8500,
                thruster_main_right: 8500
            },
            Retro: {
                Thruster_LRF: 6250,
                Thruster_LLF: 6250,
                Thruster_ULF: 6250,
                Thruster_URF: 6250
            },
            Maneuvering: {
                Thruster_LLS: 6250,
                Thruster_LRS: 6250,
                Thruster_LRR: 6250,
                Thruster_LRB: 6250,
                Thruster_LLL: 6250,
                Thruster_LLB: 6250,
                Thruster_ULB: 6250,
                Thruster_ULL: 6250,
                Thruster_URB: 6250,
                Thruster_URR: 6250,
                Thruster_ULS: 6250,
                Thruster_URS: 6250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2e6,
            Retro: 2128e3,
            Vtol: 0,
            Maneuvering: 15472e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.7,
            Retro: 5.3,
            Strafe: 8,
            Up: 8,
            Down: 8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.33,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.33,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 4,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 250,
            Retro: 266,
            Vtol: 0,
            Maneuvering: 1934
        },
        IntakeToMainFuelRatio: 1.6,
        TimeForIntakesToFillTank: 2625e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3402,
            SCMActive: 3875,
            NAV: 10935
        },
        Infrared: {
            Start: 9321
        },
        CrossSection: {
            Front: 10371,
            Side: 1452,
            Top: 5186
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 5.36,
        ExpeditedClaimTime: 1.79,
        ExpeditedCost: 2868
    },
    Buy: {
        "New Deal, Lorville": 2513700
    }
}, {
    ClassName: "MISC_Reliant_Sen",
    Name: "MISC Reliant Sen",
    Description: "Magellan, Pierce, Croshaw, names that echo through history thanks to their adventurous spirit, a curious nature, and a reliable ship. The Reliant Sen is a versatile mobile science platform; outfitted with long range capabilities to take you further, longer, and the advanced Samos sensor suite. Perfect for the aspiring explorer who wants to whisper their name into the halls of history.",
    Career: "Multi-Role",
    Role: "Light Science",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.85
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 39353,
    ComponentsMass: 3524,
    Dimensions: {
        Length: 14.5,
        Width: 28.5,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 3e3,
                Body: 3500
            },
            Parts: {
                Wing_Left: 3500,
                Vertical_Stabilizer_Wing_Top_Left: 25,
                Vertical_Stabilizer_Wing_Bottom_Left: 25,
                Wing_Right: 3e3,
                Vertical_Stabilizer_Wing_Top_Right: 25,
                Vertical_Stabilizer_Wing_Bottom_Right: 25,
                Engine_Left: 1180,
                Engine_Right: 1180
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 8500,
                thruster_main_right: 8500
            },
            Retro: {
                Thruster_LRF: 6250,
                Thruster_LLF: 6250,
                Thruster_ULF: 6250,
                Thruster_URF: 6250
            },
            Maneuvering: {
                Thruster_LLS: 6250,
                Thruster_LRS: 6250,
                Thruster_LRR: 6250,
                Thruster_LRB: 6250,
                Thruster_LLL: 6250,
                Thruster_LLB: 6250,
                Thruster_ULB: 6250,
                Thruster_ULL: 6250,
                Thruster_URB: 6250,
                Thruster_URR: 6250,
                Thruster_ULS: 6250,
                Thruster_URS: 6250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2e6,
            Retro: 2128e3,
            Vtol: 0,
            Maneuvering: 15472e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.7,
            Retro: 5.4,
            Strafe: 8,
            Up: 8,
            Down: 8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.33,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.33,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 4,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 250,
            Retro: 266,
            Vtol: 0,
            Maneuvering: 1934
        },
        IntakeToMainFuelRatio: 1.6,
        TimeForIntakesToFillTank: 2625e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3398,
            SCMActive: 3875,
            NAV: 10932
        },
        Infrared: {
            Start: 9321
        },
        CrossSection: {
            Front: 10371,
            Side: 1452,
            Top: 5186
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9515
    },
    Insurance: {
        StandardClaimTime: 4.82,
        ExpeditedClaimTime: 1.61,
        ExpeditedCost: 2653
    },
    Buy: {
        "New Deal, Lorville": 2249100
    }
}, {
    ClassName: "MISC_Reliant_Tana",
    Name: "MISC Reliant Tana",
    Description: "With Humanity ever-expanding through the universe, the need for a versatile lightweight fighter has expanded with it. Easy to maintain with a rugged construction, the Reliant Tana makes for an ideal choice for frontier and outpost defense thanks to its custom high-yield power plant, stronger shields, and additional weapon mounts.",
    Career: "Multi-Role",
    Role: "Light Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 1,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.42
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 39168,
    ComponentsMass: 4354,
    Dimensions: {
        Length: 14.5,
        Width: 28.5,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 3500,
                Body: 3500
            },
            Parts: {
                Wing_Left: 2700,
                Vertical_Stabilizer_Wing_Top_Left: 25,
                Vertical_Stabilizer_Wing_Bottom_Left: 25,
                Wing_Right: 2700,
                Vertical_Stabilizer_Wing_Top_Right: 25,
                Vertical_Stabilizer_Wing_Bottom_Right: 25,
                Engine_Left: 1180,
                Engine_Right: 1180
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 8500,
                thruster_main_right: 8500
            },
            Retro: {
                Thruster_LRF: 6250,
                Thruster_LLF: 6250,
                Thruster_ULF: 6250,
                Thruster_URF: 6250
            },
            Maneuvering: {
                Thruster_LLS: 6250,
                Thruster_LRS: 6250,
                Thruster_LRR: 6250,
                Thruster_LRB: 6250,
                Thruster_LLL: 6250,
                Thruster_LLB: 6250,
                Thruster_ULB: 6250,
                Thruster_ULL: 6250,
                Thruster_URB: 6250,
                Thruster_URR: 6250,
                Thruster_ULS: 6250,
                Thruster_URS: 6250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2e6,
            Retro: 2128e3,
            Vtol: 0,
            Maneuvering: 15472e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.8,
            Retro: 5.3,
            Strafe: 8,
            Up: 8,
            Down: 8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 250
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.33,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.33,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 75e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 250,
            Retro: 266,
            Vtol: 0,
            Maneuvering: 1934
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4445,
            SCMActive: 4922,
            NAV: 11978
        },
        Infrared: {
            Start: 9544
        },
        CrossSection: {
            Front: 11662,
            Side: 1633,
            Top: 5831
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 1747,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 42435
    },
    Insurance: {
        StandardClaimTime: 4.82,
        ExpeditedClaimTime: 1.61,
        ExpeditedCost: 3829
    },
    Buy: {
        "New Deal, Lorville": 1984500
    }
}, {
    ClassName: "MISC_Starfarer",
    Name: "MISC Starfarer",
    Description: "The Starfarer differs from traditional bulk freighters in one key way: it is a dedicated fuel platform. The Starfarer is designed not only to load, store and protect fuel stasis units, it is designed to take in spaceborne gases and refine them for use without landing. And while it excels at this, the Starfarer can also be used to ferry traditional bulk cargo pods.",
    Career: "Support",
    Role: "Heavy Refuelling",
    Size: 5,
    Cargo: {
        CargoGrid: 291,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 9.14
    },
    Crew: 1,
    WeaponCrew: 3,
    OperationsCrew: 0,
    Mass: 3555606,
    ComponentsMass: 22435,
    Dimensions: {
        Length: 101,
        Width: 46.5,
        Height: 23.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .55,
            Energy: 1.1,
            Distortion: 1.1
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 31500,
                body: 31500
            },
            Parts: {
                wing_back_right: 3600,
                spoiler_mid: 1200,
                leg_right: 2200,
                wing_back_left: 3600,
                leg_left: 2200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_main: 21e3,
                engine_right: 22500,
                engine_left: 22500
            },
            Retro: {
                thruster_retro_right: 21178,
                thruster_retro_left: 21178
            },
            Vtol: {
                thruster_VTOL_RR: 21e3,
                thruster_VTOL_RL: 21e3,
                thruster_VTOL_FL: 21e3,
                thruster_VTOL_FR: 21e3
            },
            Maneuvering: {
                thruster_side_FL: 21e3,
                thruster_side_FR: 21e3,
                thruster_top_FL: 21e3,
                thruster_top_FR: 21e3,
                thruster_bottom_FL: 21e3,
                thruster_bottom_FR: 21e3,
                thruster_top_RR: 21e3,
                thruster_bottom_RR: 21e3,
                thruster_side_RR: 21e3,
                thruster_bottom_RL: 21e3,
                thruster_side_RL: 21e3,
                thruster_top_RL: 21e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 106,
        MaxSpeed: 845,
        Pitch: 23,
        Yaw: 23,
        Roll: 45,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 915e5,
            Retro: 5e7,
            Vtol: 64e6,
            Maneuvering: 8e7
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.6,
            Retro: 1.4,
            Strafe: 1.6,
            Up: 2.1,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 295,
                BoostSpeedBackward: 106
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.1,
            RampDown: .7,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 6522e5,
        FuelIntakeRate: 220,
        QuantumFuelCapacity: 86e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 11437.5,
            Retro: 6250,
            Vtol: 8e3,
            Maneuvering: 1e4
        },
        IntakeToMainFuelRatio: 1.92,
        TimeForIntakesToFillTank: 296454545e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 37219,
            SCMActive: 43289,
            NAV: 58845
        },
        Infrared: {
            Start: 22983
        },
        CrossSection: {
            Front: 8170,
            Side: 18812,
            Top: 34203
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 168300,
        PilotBurstDPS: 4102,
        TurretsBurstDPS: 3818,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 18,
        ExpeditedClaimTime: 6,
        ExpeditedCost: 9e3
    },
    Buy: {
        "New Deal, Lorville": 1323e4
    }
}, {
    ClassName: "MISC_Starfarer_Gemini",
    Name: "MISC Starfarer Gemini",
    Description: "The United Empire of Earth military uses an adapted ‘rough and tumble’ variant of the Starfarer for their front line operations. The G2M Gemini, more commonly the Starfarer Gemini or ‘Star G,’ trades some cargo capacity and maneuverability in exchange for reinforced armor, increased shielding, more powerful engines and stronger versions of the three manned turrets.",
    Career: "Support",
    Role: "Heavy Refuelling",
    Size: 5,
    Cargo: {
        CargoGrid: 291,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 9.14
    },
    Crew: 2,
    WeaponCrew: 3,
    OperationsCrew: 0,
    Mass: 3583690,
    ComponentsMass: 21886,
    Dimensions: {
        Length: 101,
        Width: 46.5,
        Height: 23.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: .95,
            Distortion: .95
        },
        SignalMultipliers: {
            Electromagnetic: 1.4,
            Infrared: 1.4,
            CrossSection: 1.4
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 33059.25,
                body: 31500
            },
            Parts: {
                wing_back_right: 3600,
                spoiler_mid: 1200,
                leg_right: 2200,
                wing_back_left: 3600,
                leg_left: 2200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_main: 21e3,
                engine_right: 22500,
                engine_left: 22500
            },
            Retro: {
                thruster_retro_right: 21178,
                thruster_retro_left: 21178
            },
            Vtol: {
                thruster_VTOL_RR: 21e3,
                thruster_VTOL_RL: 21e3,
                thruster_VTOL_FL: 21e3,
                thruster_VTOL_FR: 21e3
            },
            Maneuvering: {
                thruster_side_FL: 21e3,
                thruster_side_FR: 21e3,
                thruster_top_FL: 21e3,
                thruster_top_FR: 21e3,
                thruster_bottom_FL: 21e3,
                thruster_bottom_FR: 21e3,
                thruster_top_RR: 21e3,
                thruster_bottom_RR: 21e3,
                thruster_side_RR: 21e3,
                thruster_bottom_RL: 21e3,
                thruster_side_RL: 21e3,
                thruster_top_RL: 21e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 106,
        MaxSpeed: 845,
        Pitch: 23,
        Yaw: 23,
        Roll: 45,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 91e6,
            Retro: 5e7,
            Vtol: 64e6,
            Maneuvering: 8e7
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.6,
            Retro: 1.4,
            Strafe: 1.5,
            Up: 2,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 295,
                BoostSpeedBackward: 106
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.1,
            RampDown: .7,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 6522e5,
        FuelIntakeRate: 100,
        QuantumFuelCapacity: 86e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 11375,
            Retro: 6250,
            Vtol: 8e3,
            Maneuvering: 1e4
        },
        IntakeToMainFuelRatio: .88,
        TimeForIntakesToFillTank: 6522e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 33440,
            SCMActive: 38389,
            NAV: 55065
        },
        Infrared: {
            Start: 18830
        },
        CrossSection: {
            Front: 6735,
            Side: 15506,
            Top: 28193
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 168300,
        PilotBurstDPS: 4102,
        TurretsBurstDPS: 4637,
        TotalMissilesDmg: 22738
    },
    Insurance: {
        StandardClaimTime: 35.34,
        ExpeditedClaimTime: 11.78,
        ExpeditedCost: 15995
    },
    Buy: {
        "New Deal, Lorville": 14994e3
    }
}, {
    ClassName: "MISC_Starlancer_Max",
    Name: "MISC Starlancer MAX",
    Description: "For those looking to expand their hauling operations, the engineers at MISC have upgraded the Starlancer MAX with an extra spacious hold ready to transport cargo and vehicles. Paired with comfortable accommodations for longer trips and a full defensive package for when you go off the beaten path, it’s easy to see why the Starlancer MAX is the hauler of choice for industrious pilots across the ‘verse.",
    Career: "Exploration",
    Role: "Industrial",
    Size: 5,
    Cargo: {
        CargoGrid: 224,
        CargoContainers: 0,
        ExternalStorage: 2.6,
        PersonalInventory: 8
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 814270.5,
    ComponentsMass: 9709,
    Dimensions: {
        Length: 83,
        Width: 52,
        Height: 16
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 35e3
            },
            Parts: {
                nacelle_left: 7e3,
                nacelle_left_rear: 2e3,
                wing_plate_left: 1e3,
                wing_left: 2e3,
                wing_left_rear: 1e3,
                wing_aileron_left: 1e3,
                nacelle_right: 7e3,
                nacelle_right_rear: 2e3,
                wing_plate_right: 1e3,
                wing_right: 2e3,
                wing_right_rear: 1e3,
                wing_aileron_right: 1e3,
                spoiler_connection_left: 200,
                rear_spoiler_left: 200,
                spoiler_connection_right: 200,
                rear_spoiler_right: 200,
                top_spoiler_left: 200,
                top_spoiler_right: 200,
                nose: 2e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 7e3,
                thruster_main_left_aux_bottom: 3500,
                thruster_main_left_aux_top: 3500,
                thruster_main_centre: 17e3,
                thruster_main_right: 7e3,
                thruster_main_right_aux_bottom: 3500,
                thruster_main_right_aux_top: 3500
            },
            Retro: {
                thruster_retro_left: 5500,
                thruster_retro_right: 5500
            },
            Vtol: {
                thruster_vtol_RR: 2e3,
                thruster_vtol_RL: 2e3,
                thruster_vtol_SL: 2e3,
                thruster_vtol_SR: 2e3,
                thruster_vtol_FL: 2e3,
                thruster_vtol_FR: 2e3
            },
            Maneuvering: {
                thruster_mav_RSL: 2e3,
                thruster_mav_RTL: 2e3,
                thruster_mav_RTR: 2e3,
                thruster_mav_MBR: 2e3,
                thruster_mav_MBL: 2e3,
                thruster_mav_RBR: 2e3,
                thruster_mav_RBL: 2e3,
                thruster_mav_RSR: 2e3,
                thruster_mav_FBL: 2e3,
                thruster_mav_FBR: 2e3,
                thruster_mav_MTL: 2e3,
                thruster_mav_MTR: 2e3,
                thruster_mav_FSL: 2e3,
                thruster_mav_FSR: 2e3,
                thruster_mav_FTL: 2e3,
                thruster_mav_FTR: 2e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 115,
        MaxSpeed: 950,
        Pitch: 31,
        Yaw: 31,
        Roll: 65,
        IsVtolAssisted: !0,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 335e5,
            Retro: 15e6,
            Vtol: 7e6,
            Maneuvering: 732e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.2,
            Retro: 1.7,
            Strafe: 2,
            Up: 2.4,
            Down: 2.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 315,
                BoostSpeedBackward: 115
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.35,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 3,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 5e7,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 36e5,
        FuelBurnRatePer10KNewton: {
            Main: 8.75,
            Retro: 2.5,
            Vtol: 7.5,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 5187.5,
            Retro: 1875,
            Vtol: 875,
            Maneuvering: 9150
        },
        IntakeToMainFuelRatio: .96,
        TimeForIntakesToFillTank: 1e6
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 10656,
            SCMActive: 11904,
            NAV: 26136
        },
        Infrared: {
            Start: 16623
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 56100,
        PilotBurstDPS: 4102,
        TurretsBurstDPS: 3272,
        TotalMissilesDmg: 52422
    },
    Insurance: {
        StandardClaimTime: 40,
        ExpeditedClaimTime: 15,
        ExpeditedCost: 15e3
    },
    "New Ship": "MISC Starlancer MAX"
}, {
    ClassName: "MRAI_Guardian",
    Name: "Mirai Guardian",
    Description: "Taking the adage that the best defense is a good offense, Mirai engineers have brought their expertise in performance and maneuverability to the Guardian long range fighter.  Fly circles around your opponents with the Mirai Guardian while establishing your space superiority. ",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.1,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 117500,
    ComponentsMass: 6032.2,
    Dimensions: {
        Length: 25,
        Width: 16.5,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1.05,
            Distortion: 1.1
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                geo_body: 7350
            },
            Parts: {
                geo_wing_left_top_middle: 4e3,
                geo_wing_left_top_back: 2500,
                geo_wing_left_top_front: 3e3,
                geo_wing_arm_left_rear_top_a: 300,
                geo_wing_right_top_middle: 4e3,
                geo_wing_right_top_back: 2500,
                geo_wing_right_top_front: 3e3,
                geo_wing_arm_right_rear_top_a: 300,
                geo_wing_bottom_left_middle: 4e3,
                geo_wing_bottom_left_back: 2500,
                geo_wing_bottom_left_front: 3e3,
                geo_wing_bottom_right_middle: 4e3,
                geo_wing_bottom_right_back: 2500,
                geo_wing_bottom_right_front: 3e3,
                geo_thruster_arm_left_b: 5e3,
                geo_thruster_arm_left_c: 5e3,
                geo_thruster_arm_right_b: 5e3,
                geo_thruster_arm_right_c: 5e3,
                geo_body_top_front_b: 300
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 5e3,
                thruster_main_right: 5e3
            },
            Retro: {
                thruster_retro_top_left: 1e3,
                thruster_retro_top_right: 1e3,
                thruster_retro_bottom_left: 1e3,
                thruster_retro_bottom_right: 1e3
            },
            Maneuvering: {
                thruster_wing_top_left_mid: 1e3,
                thruster_wing_top_left_rear: 1e3,
                thruster_wing_top_left_front_lateral: 1e3,
                thruster_wing_top_left_front: 1e3,
                thruster_wing_top_right_mid: 1e3,
                thruster_wing_top_right_rear: 1e3,
                thruster_wing_top_right_front_lateral: 1e3,
                thruster_wing_top_right_front: 1e3,
                thruster_wing_bot_left_mid: 1e3,
                thruster_wing_bot_left_rear: 1e3,
                thruster_wing_bot_left_front_lateral: 1e3,
                thruster_wing_bot_left_front: 1e3,
                thruster_wing_bot_right_mid: 1e3,
                thruster_wing_bot_right_rear: 1e3,
                thruster_wing_bot_right_front: 1e3,
                thruster_wing_bot_right_front_lateral: 1e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 213,
        MaxSpeed: 1125,
        Pitch: 37.5,
        Yaw: 37.5,
        Roll: 130,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 471e4,
            Retro: 47e5,
            Vtol: 0,
            Maneuvering: 3172e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.3,
            Retro: 3.8,
            Strafe: 8.2,
            Up: 8.2,
            Down: 8.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 465,
                BoostSpeedBackward: 225
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 588.75,
            Retro: 587.5,
            Vtol: 0,
            Maneuvering: 3965
        },
        IntakeToMainFuelRatio: 5.1,
        TimeForIntakesToFillTank: 3e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8163,
            SCMActive: 10163,
            NAV: 28396
        },
        Infrared: {
            Start: 13105
        },
        CrossSection: {
            Front: 3333,
            Side: 6e3,
            Top: 9e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 3073,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 38059
    },
    Insurance: {
        StandardClaimTime: 13.33,
        ExpeditedClaimTime: 3.33,
        ExpeditedCost: 6460
    },
    "New Ship": "Mirai Guardian"
}, {
    ClassName: "MRAI_Guardian_QI",
    Name: "Mirai Guardian QI",
    Description: "Taking the adage that the best defense is a good offense, Mirai engineers have brought their expertise in performance and maneuverability to the Guardian long range fighter.  Fly circles around your opponents with the Mirai Guardian while establishing your space superiority. ",
    Career: "Combat",
    Role: "Interdiction",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.1,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 117500,
    ComponentsMass: 5475.2,
    Dimensions: {
        Length: 25,
        Width: 16.5,
        Height: 9
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1.05,
            Distortion: 1.1
        },
        SignalMultipliers: {
            Electromagnetic: 1.3,
            Infrared: 1.3,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                geo_body: 7350
            },
            Parts: {
                geo_wing_left_top_middle: 4e3,
                geo_wing_left_top_back: 2500,
                geo_wing_left_top_front: 3e3,
                geo_wing_arm_left_rear_top_a: 300,
                geo_wing_right_top_middle: 4e3,
                geo_wing_right_top_back: 2500,
                geo_wing_right_top_front: 3e3,
                geo_wing_arm_right_rear_top_a: 300,
                geo_wing_bottom_left_middle: 4e3,
                geo_wing_bottom_left_back: 2500,
                geo_wing_bottom_left_front: 3e3,
                geo_wing_bottom_right_middle: 4e3,
                geo_wing_bottom_right_back: 2500,
                geo_wing_bottom_right_front: 3e3,
                geo_thruster_arm_left_b: 5e3,
                geo_thruster_arm_left_c: 5e3,
                geo_thruster_arm_right_b: 5e3,
                geo_thruster_arm_right_c: 5e3,
                geo_body_top_front_b: 300
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 5e3,
                thruster_main_right: 5e3
            },
            Retro: {
                thruster_retro_top_left: 1e3,
                thruster_retro_top_right: 1e3,
                thruster_retro_bottom_left: 1e3,
                thruster_retro_bottom_right: 1e3
            },
            Maneuvering: {
                thruster_wing_top_left_mid: 1e3,
                thruster_wing_top_left_rear: 1e3,
                thruster_wing_top_left_front_lateral: 1e3,
                thruster_wing_top_left_front: 1e3,
                thruster_wing_top_right_mid: 1e3,
                thruster_wing_top_right_rear: 1e3,
                thruster_wing_top_right_front_lateral: 1e3,
                thruster_wing_top_right_front: 1e3,
                thruster_wing_bot_left_mid: 1e3,
                thruster_wing_bot_left_rear: 1e3,
                thruster_wing_bot_left_front_lateral: 1e3,
                thruster_wing_bot_left_front: 1e3,
                thruster_wing_bot_right_mid: 1e3,
                thruster_wing_bot_right_rear: 1e3,
                thruster_wing_bot_right_front: 1e3,
                thruster_wing_bot_right_front_lateral: 1e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 210,
        MaxSpeed: 1100,
        Pitch: 35,
        Yaw: 35,
        Roll: 120,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 471e4,
            Retro: 47e5,
            Vtol: 0,
            Maneuvering: 3172e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.3,
            Retro: 3.8,
            Strafe: 8.2,
            Up: 8.2,
            Down: 8.2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 460,
                BoostSpeedBackward: 225
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .7,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 5,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 588.75,
            Retro: 587.5,
            Vtol: 0,
            Maneuvering: 3965
        },
        IntakeToMainFuelRatio: 5.1,
        TimeForIntakesToFillTank: 3e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 11825,
            SCMActive: 18220,
            NAV: 32058
        },
        Infrared: {
            Start: 13255
        },
        CrossSection: {
            Front: 3333,
            Side: 6e3,
            Top: 9e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 3073,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 20211
    },
    Insurance: {
        StandardClaimTime: 13.33,
        ExpeditedClaimTime: 3.33,
        ExpeditedCost: 6460
    },
    "New Ship": "Mirai Guardian QI"
}, {
    ClassName: "MRAI_Pulse",
    Name: "Mirai Pulse",
    Description: "The engineers at Mirai set out to craft an open-canopy bike capable of more. A more intimate connection between pilot and performance with a form-fitting silhouette. A more intuitive way to tame formidable landscapes with a responsive grav-lev system. A more intelligent combat experience with a custom weapon fully integrated into the spirit of the vehicle. The end result? The Mirai Pulse.",
    Career: "Ground",
    Role: "Combat",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .6,
        PersonalInventory: .25
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 2140,
    ComponentsMass: 468,
    Dimensions: {
        Length: 3.15,
        Width: .9,
        Height: 1
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: .35,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 700
            },
            Parts: {
                arm_front_left_debris_a: 50,
                arm_front_left_debris_a_panel: 50,
                arm_front_right_debris_a: 50,
                arm_front_right_debris_a_panel: 50,
                body_panel_back_left_debris: 50,
                body_panel_back_right_debris: 50,
                body_spoiler_upper_right_mesh: 50,
                hardpoint_vehicle_destroyed: 400,
                component_housing_mesh: 50,
                body_spoiler_upper_left_mesh: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main: 2750
            },
            Retro: {
                thruster_retro_right: 2500,
                thruster_retro_left: 2500
            },
            Maneuvering: {
                thruster_mav_front_left_bottom: 2150,
                gravlev_front_left: 2750,
                thruster_mav_front_left_side: 2150,
                thruster_mav_front_left_top: 2150,
                thruster_mav_front_right_bottom: 2150,
                thruster_mav_front_right_side: 2150,
                thruster_mav_front_right_top: 2150,
                gravlev_front_right: 2750,
                thruster_mav_rear_left_top: 2150,
                thruster_mav_rear_right_top: 2150,
                gravlev_rear_left: 2750,
                gravlev_rear_right: 2750,
                thruster_mav_rear_right_bottom: 2150,
                thruster_mav_rear_left_bottom: 2150,
                thruster_mav_rear_left_side: 2150,
                thruster_mav_rear_right_side: 2150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 204,
        HoverMaxSpeed: 204,
        MaxSpeed: 561,
        Pitch: 84,
        Yaw: 84,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 68800,
            Retro: 59600,
            Vtol: 0,
            Maneuvering: 223e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.8,
            Retro: 2.5,
            Strafe: 1.4,
            Up: 1.9,
            Down: 1.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 284,
                BoostSpeedBackward: 124
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.3,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.3,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 15,
            CapacitorRegenPerSec: 2,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 2,
            RegenerationTime: 7.5,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 65e4,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 8.6,
            Retro: 7.45,
            Vtol: 0,
            Maneuvering: 27.875
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 509,
            SCMActive: 634,
            NAV: 0
        },
        Infrared: {
            Start: 740
        },
        CrossSection: {
            Front: 253,
            Side: 401,
            Top: 506
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 314,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    "New Ship": "Mirai Pulse",
    Buy: {
        "Astro Armada, Area 18": 185220
    }
}, {
    ClassName: "MRAI_Pulse_LX",
    Name: "Mirai Pulse LX",
    Description: "Seamlessly pairing pilot and pure speed, the Mirai Pulse LX grav-lev bike soars over terrain like no open-canopy racer before. Feel your heartrate quicken as you experience first-hand the Pulse’s ground-breaking responsiveness and form-fitting silhouette.",
    Career: "Ground",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .6,
        PersonalInventory: .25
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 2140,
    ComponentsMass: 248,
    Dimensions: {
        Length: 3.15,
        Width: .9,
        Height: 1
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 2.75,
            Infrared: .31,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 700
            },
            Parts: {
                arm_front_left_debris_a: 50,
                arm_front_left_debris_a_panel: 50,
                arm_front_right_debris_a: 50,
                arm_front_right_debris_a_panel: 50,
                body_panel_back_left_debris: 50,
                body_panel_back_right_debris: 50,
                body_spoiler_upper_right_mesh: 50,
                hardpoint_vehicle_destroyed: 400,
                component_housing_mesh: 50,
                body_spoiler_upper_left_mesh: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_aux: 2750,
                thruster_main: 2750
            },
            Retro: {
                thruster_retro_right: 2500,
                thruster_retro_left: 2500
            },
            Maneuvering: {
                thruster_mav_front_left_bottom: 2150,
                gravlev_front_left: 2750,
                thruster_mav_front_left_side: 2150,
                thruster_mav_front_left_top: 2150,
                thruster_mav_front_right_bottom: 2150,
                thruster_mav_front_right_side: 2150,
                thruster_mav_front_right_top: 2150,
                gravlev_front_right: 2750,
                thruster_mav_rear_left_top: 2150,
                thruster_mav_rear_right_top: 2150,
                gravlev_rear_left: 2750,
                gravlev_rear_right: 2750,
                thruster_mav_rear_right_bottom: 2150,
                thruster_mav_rear_left_bottom: 2150,
                thruster_mav_rear_left_side: 2150,
                thruster_mav_rear_right_side: 2150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 218,
        HoverMaxSpeed: 218,
        MaxSpeed: 600,
        Pitch: 97,
        Yaw: 97,
        Roll: 145,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 67500,
            Retro: 58200,
            Vtol: 0,
            Maneuvering: 225400
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.2,
            Retro: 2.8,
            Strafe: 1.6,
            Up: 2.5,
            Down: 2.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 298,
                BoostSpeedBackward: 138
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.8,
                    Y: 2.3,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.8,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 10,
            CapacitorRegenPerSec: 4,
            CapacitorIdleCost: 4,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1,
            RegenerationTime: 2.5,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 65e4,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 8.438,
            Retro: 7.275,
            Vtol: 0,
            Maneuvering: 28.175
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 543,
            SCMActive: 887,
            NAV: 0
        },
        Infrared: {
            Start: 626
        },
        CrossSection: {
            Front: 253,
            Side: 401,
            Top: 506
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    "New Ship": "Mirai Pulse"
}, {
    ClassName: "ORIG_100i",
    Name: "Origin 100i",
    Description: "Tour the universe with the perfect coupling of luxury and performance. The 100i features Origin Jumpworks' patented AIR fuel system, making it the most efficient and eco-friendly ship on the market. Capable of long distance flights that most ships of its size aren't equipped for, the 100i is perfect for solo pilots looking to turn heads without sacrificing functionality or reliability.",
    Career: "Exploration",
    Role: "Starter / Pathfinder",
    Size: 1,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 2014,
    Dimensions: {
        Length: 19,
        Width: 11,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1650
            },
            Parts: {
                Spoiler: 650,
                Wing_Right: 800,
                Wing_Left: 800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 1200,
                thruster_main_left: 1200
            },
            Retro: {
                thruster_retro_right: 2150,
                thruster_retro_left: 2150
            },
            Maneuvering: {
                thruster_front_top_left: 1500,
                thruster_front_side_left: 1500,
                thruster_front_bottom_right: 1500,
                thruster_front_side_right: 1500,
                thruster_front_top_right: 1500,
                thruster_front_bottom_left: 1500,
                thruster_rear_bottom_right: 1500,
                thruster_rear_top_right: 1500,
                thruster_rear_side_right: 1500,
                thruster_rear_bottom_left: 1500,
                thruster_rear_top_left: 1500,
                thruster_rear_side_left: 1500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 50,
        Yaw: 50,
        Roll: 195,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8192e3,
            Retro: 17400296e-1,
            Vtol: 0,
            Maneuvering: 97168338e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.4,
            Retro: 3.4,
            Strafe: 4.4,
            Up: 5.9,
            Down: 3.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 305
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 65e5,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1024,
            Retro: 217.504,
            Vtol: 0,
            Maneuvering: 1214.604
        },
        IntakeToMainFuelRatio: 2.93,
        TimeForIntakesToFillTank: 216666.67
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6421,
            SCMActive: 7474,
            NAV: 13954
        },
        Infrared: {
            Start: 7472
        },
        CrossSection: {
            Front: 1906,
            Side: 5117,
            Top: 9030
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1500,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4115
    },
    Insurance: {
        StandardClaimTime: 3.36,
        ExpeditedClaimTime: 1.12,
        ExpeditedCost: 1858
    },
    Buy: {
        "Astro Armada, Area 18": 1146600,
        "New Deal, Lorville": 1146600
    }
}, {
    ClassName: "ORIG_125a",
    Name: "Origin 125a",
    Description: "Risks were meant to be taken, but why risk running out of fuel in the heat of battle? With the AIR fuel system, a souped-up weapons package, and all the luxury and refinement you've come to expect from Origin Jumpworks, the 125a has been designed for the discerning maverick.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 1,
    Cargo: {
        CargoGrid: 2,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 2592,
    Dimensions: {
        Length: 19,
        Width: 11,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1650
            },
            Parts: {
                Spoiler: 650,
                Wing_Right: 800,
                Wing_Left: 800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 1200,
                thruster_main_left: 1200
            },
            Retro: {
                thruster_retro_right: 2150,
                thruster_retro_left: 2150
            },
            Maneuvering: {
                thruster_front_top_left: 1500,
                thruster_front_side_left: 1500,
                thruster_front_bottom_right: 1500,
                thruster_front_side_right: 1500,
                thruster_front_top_right: 1500,
                thruster_front_bottom_left: 1500,
                thruster_rear_bottom_right: 1500,
                thruster_rear_top_right: 1500,
                thruster_rear_side_right: 1500,
                thruster_rear_bottom_left: 1500,
                thruster_rear_top_left: 1500,
                thruster_rear_side_left: 1500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 70,
        Yaw: 52,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8192e3,
            Retro: 17400296e-1,
            Vtol: 0,
            Maneuvering: 97168338e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.4,
            Retro: 3.4,
            Strafe: 4.4,
            Up: 5.9,
            Down: 3.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 305
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 65e5,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1024,
            Retro: 217.504,
            Vtol: 0,
            Maneuvering: 1214.604
        },
        IntakeToMainFuelRatio: 2.93,
        TimeForIntakesToFillTank: 216666.67
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6484,
            SCMActive: 7536,
            NAV: 14017
        },
        Infrared: {
            Start: 7537
        },
        CrossSection: {
            Front: 2253,
            Side: 6048,
            Top: 10672
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1730,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 12345
    },
    Insurance: {
        StandardClaimTime: 4.54,
        ExpeditedClaimTime: 1.51,
        ExpeditedCost: 2526
    },
    Buy: {
        "New Deal, Lorville": 1587600
    }
}, {
    ClassName: "ORIG_135c",
    Name: "Origin 135c",
    Description: "With a deceptive amount of storage space in its sleek, stylish frame, and Origin's patented AIR fuel system, the 135c model is the obvious choice for musicians, couriers, and anyone trying to get the party started. Get it there fast, and look good while you're doing it.",
    Career: "Exploration",
    Role: "Light Freight",
    Size: 1,
    Cargo: {
        CargoGrid: 6,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 48143,
    ComponentsMass: 2454,
    Dimensions: {
        Length: 19,
        Width: 11,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1650
            },
            Parts: {
                Spoiler: 650,
                Wing_Right: 800,
                Wing_Left: 800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 1200,
                thruster_main_left: 1200
            },
            Retro: {
                thruster_retro_right: 2150,
                thruster_retro_left: 2150
            },
            Maneuvering: {
                thruster_front_top_left: 1500,
                thruster_front_side_left: 1500,
                thruster_front_bottom_right: 1500,
                thruster_front_side_right: 1500,
                thruster_front_top_right: 1500,
                thruster_front_bottom_left: 1500,
                thruster_rear_bottom_right: 1500,
                thruster_rear_top_right: 1500,
                thruster_rear_side_right: 1500,
                thruster_rear_bottom_left: 1500,
                thruster_rear_top_left: 1500,
                thruster_rear_side_left: 1500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 53,
        Yaw: 53,
        Roll: 212,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 8192e3,
            Retro: 17400296e-1,
            Vtol: 0,
            Maneuvering: 97168338e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.4,
            Retro: 3.4,
            Strafe: 4.4,
            Up: 5.9,
            Down: 3.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 305
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 65e5,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1024,
            Retro: 217.504,
            Vtol: 0,
            Maneuvering: 1214.604
        },
        IntakeToMainFuelRatio: 2.93,
        TimeForIntakesToFillTank: 216666.67
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6421,
            SCMActive: 7474,
            NAV: 13954
        },
        Infrared: {
            Start: 7604
        },
        CrossSection: {
            Front: 2254,
            Side: 6050,
            Top: 10676
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1850,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4115
    },
    Insurance: {
        StandardClaimTime: 3.78,
        ExpeditedClaimTime: 1.26,
        ExpeditedCost: 1830
    },
    Buy: {
        "Astro Armada, Area 18": 1149580
    }
}, {
    ClassName: "ORIG_300i",
    Name: "Origin 300i",
    Description: "If you're going to travel the stars... why not do it in style? The 300i is Origin Jumpworks' premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its particle cannons.",
    Career: "Exploration",
    Role: "Luxury",
    Size: 2,
    Cargo: {
        CargoGrid: 8,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.01
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 79677,
    ComponentsMass: 2364,
    Dimensions: {
        Length: 27,
        Width: 17,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1650,
                tail: 1650
            },
            Parts: {
                glass_canopy_front: 1500,
                wing_left_bottom: 800,
                wing_b_left: 500,
                wing_left_top: 200,
                wing_flap_left: 200,
                wing_right_bottom: 800,
                wing_b_right: 500,
                wing_right_top: 200,
                wing_flap_right: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster: 8700
            },
            Retro: {
                thruster_retro_left: 8100,
                thruster_retro_right: 8100
            },
            Maneuvering: {
                mav_thruster_nose_top_left: 7250,
                mav_thruster_nose_bottom_left: 7250,
                mav_thruster_nose_top_right: 7250,
                mav_thruster_nose_bottom_right: 7250,
                mav_thruster_nose_middle_left: 7250,
                mav_thruster_nose_middle_right: 7250,
                mav_thruster_tail_top_left: 7250,
                mav_thruster_tail_bottom_left: 7250,
                mav_thruster_tail_top_right: 7250,
                mav_thruster_tail_bottom_right: 7250,
                mav_thruster_tail_middle_left: 7250,
                mav_thruster_tail_middle_right: 7250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52,
        Yaw: 48,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1342e4,
            Retro: 285e4,
            Vtol: 0,
            Maneuvering: 1566e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.8,
            Retro: 3.5,
            Strafe: 4.6,
            Up: 6.1,
            Down: 4.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 105e5,
        FuelIntakeRate: 12,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1677.5,
            Retro: 356.25,
            Vtol: 0,
            Maneuvering: 1957.5
        },
        IntakeToMainFuelRatio: .72,
        TimeForIntakesToFillTank: 875e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6315,
            SCMActive: 7388,
            NAV: 13848
        },
        Infrared: {
            Start: 6820
        },
        CrossSection: {
            Front: 2687,
            Side: 5631,
            Top: 8318
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3e3,
        PilotBurstDPS: 1766,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4115
    },
    Insurance: {
        StandardClaimTime: 7.76,
        ExpeditedClaimTime: 2.59,
        ExpeditedCost: 3618
    },
    Buy: {
        "Astro Armada, Area 18": 1375920
    }
}, {
    ClassName: "ORIG_315p",
    Name: "Origin 315p",
    Description: "Exploration is man's highest calling. Prepare to chart distant horizons with man's most sophisticated piece of technology, the Origin 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 12,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 80592,
    ComponentsMass: 2094,
    Dimensions: {
        Length: 27,
        Width: 17,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1650,
                tail: 1650
            },
            Parts: {
                glass_canopy_front: 1500,
                wing_left_bottom: 800,
                wing_b_left: 500,
                wing_left_top: 200,
                wing_flap_left: 200,
                wing_right_bottom: 800,
                wing_b_right: 500,
                wing_right_top: 200,
                wing_flap_right: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster: 8700
            },
            Retro: {
                thruster_retro_left: 8100,
                thruster_retro_right: 8100
            },
            Maneuvering: {
                mav_thruster_nose_top_left: 7250,
                mav_thruster_nose_bottom_left: 7250,
                mav_thruster_nose_top_right: 7250,
                mav_thruster_nose_bottom_right: 7250,
                mav_thruster_nose_middle_left: 7250,
                mav_thruster_nose_middle_right: 7250,
                mav_thruster_tail_top_left: 7250,
                mav_thruster_tail_bottom_left: 7250,
                mav_thruster_tail_top_right: 7250,
                mav_thruster_tail_bottom_right: 7250,
                mav_thruster_tail_middle_left: 7250,
                mav_thruster_tail_middle_right: 7250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52,
        Yaw: 48,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1342e4,
            Retro: 285e4,
            Vtol: 0,
            Maneuvering: 1566e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.7,
            Retro: 3.5,
            Strafe: 4.5,
            Up: 6,
            Down: 4.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 18e6,
        FuelIntakeRate: 12,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1677.5,
            Retro: 356.25,
            Vtol: 0,
            Maneuvering: 1957.5
        },
        IntakeToMainFuelRatio: .72,
        TimeForIntakesToFillTank: 15e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6269,
            SCMActive: 7454,
            NAV: 13895
        },
        Infrared: {
            Start: 6913
        },
        CrossSection: {
            Front: 2663,
            Side: 5579,
            Top: 8241
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2560,
        PilotBurstDPS: 1091,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 3340
    },
    Insurance: {
        StandardClaimTime: 5.18,
        ExpeditedClaimTime: 1.73,
        ExpeditedCost: 2579
    },
    Buy: {
        "Astro Armada, Area 18": 1490580
    }
}, {
    ClassName: "ORIG_325a",
    Name: "Origin 325a",
    Description: "Just because it's a rough galaxy doesn't mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.",
    Career: "Combat",
    Role: "Interceptor",
    Size: 2,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 79324,
    ComponentsMass: 3720,
    Dimensions: {
        Length: 27,
        Width: 17,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 1650,
                tail: 1650
            },
            Parts: {
                glass_canopy_front: 1500,
                wing_left_bottom: 800,
                wing_b_left: 500,
                wing_left_top: 200,
                wing_flap_left: 200,
                wing_right_bottom: 800,
                wing_b_right: 500,
                wing_right_top: 200,
                wing_flap_right: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster: 8700
            },
            Retro: {
                thruster_retro_left: 8100,
                thruster_retro_right: 8100
            },
            Maneuvering: {
                mav_thruster_nose_top_left: 7250,
                mav_thruster_nose_bottom_left: 7250,
                mav_thruster_nose_top_right: 7250,
                mav_thruster_nose_bottom_right: 7250,
                mav_thruster_nose_middle_left: 7250,
                mav_thruster_nose_middle_right: 7250,
                mav_thruster_tail_top_left: 7250,
                mav_thruster_tail_bottom_left: 7250,
                mav_thruster_tail_top_right: 7250,
                mav_thruster_tail_bottom_right: 7250,
                mav_thruster_tail_middle_left: 7250,
                mav_thruster_tail_middle_right: 7250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52,
        Yaw: 48,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1342e4,
            Retro: 285e4,
            Vtol: 0,
            Maneuvering: 1566e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 16.9,
            Retro: 3.5,
            Strafe: 4.6,
            Up: 6.1,
            Down: 4.1
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 18e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1677.5,
            Retro: 356.25,
            Vtol: 0,
            Maneuvering: 1957.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6433,
            SCMActive: 7860,
            NAV: 13967
        },
        Infrared: {
            Start: 6975
        },
        CrossSection: {
            Front: 2829,
            Side: 5928,
            Top: 8757
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2357,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 19707
    },
    Insurance: {
        StandardClaimTime: 6.21,
        ExpeditedClaimTime: 2.07,
        ExpeditedCost: 3900
    },
    Buy: {
        "Astro Armada, Area 18": 1852200
    }
}, {
    ClassName: "ORIG_350r",
    Name: "Origin 350r",
    Description: "Origin Jumpwork's 300 series is the ultimate fusion of elegance and astroengineering. Every component is individually calibrated to ensure your ship stays in perfect harmony. By far the fastest member of the family, the 350r refocus the 300's power and translates it into pure speed. ",
    Career: "Competition",
    Role: "Racing",
    Size: 2,
    Cargo: {
        CargoGrid: 4,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 88107,
    ComponentsMass: 2047,
    Dimensions: {
        Length: 27,
        Width: 17,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 850,
                tail: 1200
            },
            Parts: {
                glass_canopy_front: 250,
                wing_left_bottom: 100,
                wing_b_left: 50,
                wing_left_top: 100,
                wing_flap_left: 100,
                wing_right_bottom: 100,
                wing_b_right: 100,
                wing_right_top: 100,
                wing_flap_right: 100
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster: 8700
            },
            Retro: {
                thruster_retro_left: 8100,
                thruster_retro_right: 8100
            },
            Maneuvering: {
                mav_thruster_nose_top_left: 7250,
                mav_thruster_nose_bottom_left: 7250,
                mav_thruster_nose_top_right: 7250,
                mav_thruster_nose_bottom_right: 7250,
                mav_thruster_nose_middle_left: 7250,
                mav_thruster_nose_middle_right: 7250,
                mav_thruster_tail_top_left: 7250,
                mav_thruster_tail_bottom_left: 7250,
                mav_thruster_tail_top_right: 7250,
                mav_thruster_tail_bottom_right: 7250,
                mav_thruster_tail_middle_left: 7250,
                mav_thruster_tail_middle_right: 7250
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 260,
        MaxSpeed: 1425,
        Pitch: 52,
        Yaw: 48,
        Roll: 180,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1342e4,
            Retro: 285e4,
            Vtol: 0,
            Maneuvering: 1566e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15.3,
            Retro: 3.2,
            Strafe: 4.1,
            Up: 5.5,
            Down: 3.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 610,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 2.25,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 27e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 1677.5,
            Retro: 356.25,
            Vtol: 0,
            Maneuvering: 1957.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6314,
            SCMActive: 7388,
            NAV: 13847
        },
        Infrared: {
            Start: 6520
        },
        CrossSection: {
            Front: 2687,
            Side: 5631,
            Top: 8318
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4480,
        PilotBurstDPS: 1766,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4115
    },
    Insurance: {
        StandardClaimTime: 10.14,
        ExpeditedClaimTime: 3.38,
        ExpeditedCost: 4573
    },
    Buy: {
        "Astro Armada, Area 18": 3748500
    }
}, {
    ClassName: "ORIG_400i",
    Name: "Origin 400i",
    Description: "To explore the stars is a most noble endeavor, and Origin Jumpworks has risen to the occasion in crafting the 400i high-performance pathfinder. With class-leading range, substantial defensive capabilities, and a factory-equipped scanning array, the 400i is ready to take on the harshest corners of the galaxy while maintaining the comfort and elegance Origin is known for. ",
    Career: "Exploration",
    Role: "Luxury",
    Size: 4,
    Cargo: {
        CargoGrid: 42,
        CargoContainers: 0,
        ExternalStorage: 1.95,
        PersonalInventory: 3.81
    },
    Crew: 3,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 430057.06,
    ComponentsMass: 8493,
    Dimensions: {
        Length: 56,
        Width: 32,
        Height: 12.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 2e4,
                Bridge: 15e3
            },
            Parts: {
                Nose: 17500,
                WingLeft: 14e3,
                WingRight: 14e3
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_sub_right: 18450,
                thruster_sub_left: 18450,
                thruster_main: 18450
            },
            Retro: {
                thruster_retro_right: 18450,
                thruster_retro_left: 18450
            },
            Vtol: {
                thruster_bottom_front_left: 16e3,
                thruster_bottom_front_right: 16e3,
                thruster_bottom_rear_left: 16e3,
                thruster_bottom_rear_right: 16e3
            },
            Maneuvering: {
                thruster_top_front_right: 16e3,
                thruster_top_front_left: 16e3,
                thruster_nose_bottom: 16e3,
                thruster_nose_top: 16e3,
                thruster_side_front_left: 16e3,
                thruster_side_front_right: 16e3,
                thruster_side_rear_left: 16e3,
                thruster_top_rear_left: 16e3,
                thruster_side_rear_right: 16e3,
                thruster_top_rear_right: 16e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 215,
        MaxSpeed: 1150,
        Pitch: 35,
        Yaw: 35,
        Roll: 70,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 24665060,
            Retro: 121e5,
            Vtol: 11314548,
            Maneuvering: 3774e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.6,
            Retro: 2.7,
            Strafe: 2.4,
            Up: 3.2,
            Down: 2.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 210
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 6e7,
        FuelIntakeRate: 50,
        QuantumFuelCapacity: 36e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 2.5,
            Vtol: 5,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 3083.132,
            Retro: 1512.5,
            Vtol: 1414.318,
            Maneuvering: 4717.5
        },
        IntakeToMainFuelRatio: 1.62,
        TimeForIntakesToFillTank: 12e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12720,
            SCMActive: 14792,
            NAV: 28200
        },
        Infrared: {
            Start: 10026
        },
        CrossSection: {
            Front: 4153,
            Side: 10481,
            Top: 19775
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 45400,
        PilotBurstDPS: 1636,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 51163
    },
    Insurance: {
        StandardClaimTime: 22.5,
        ExpeditedClaimTime: 7.5,
        ExpeditedCost: 12027
    },
    Buy: {
        "Astro Armada, Area 18": 11466e3,
        "New Deal, Lorville": 11466e3
    }
}, {
    ClassName: "ORIG_600i",
    Name: "Origin 600i",
    Description: "This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.",
    Career: "Exploration",
    Role: "Luxury",
    Size: 5,
    Cargo: {
        CargoGrid: 44,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4.46
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 1622067,
    ComponentsMass: 15324,
    Dimensions: {
        Length: 91.5,
        Width: 52,
        Height: 17
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 55e3,
                Nose: 18600,
                Front: 21e3
            },
            Parts: {
                Wing_Left: 8625,
                Wing_Right: 8625,
                Tail: 4e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_upper_left: 21e3,
                main_upper_right: 21e3,
                main_lower_right: 21e3,
                main_lower_left: 21e3
            },
            Retro: {
                thruster_retro_left: 19500,
                thruster_retro_right: 19500
            },
            Maneuvering: {
                thruster_mav_rear_top_left: 18500,
                thruster_mav_rear_side_left: 18500,
                thruster_mav_rear_top_right: 18500,
                thruster_mav_rear_side_right: 18500,
                thruster_mav_rear_bottom_left: 18500,
                thruster_mav_rear_bottom_right: 18500,
                thruster_mav_rear_bottom_back: 18500,
                thruster_mav_front_top_left: 18500,
                thruster_mav_front_top_right: 18500,
                thruster_mav_front_bottom_left: 18500,
                thruster_mav_front_bottom_right: 18500,
                thruster_mav_front_side_right: 18500,
                thruster_mav_front_side_left: 18500,
                thruster_mav_rear_bottom_front: 18500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 165,
        MaxSpeed: 975,
        Pitch: 19,
        Yaw: 19,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 662e5,
            Retro: 331e5,
            Vtol: 0,
            Maneuvering: 1572e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 4.1,
            Retro: 2,
            Strafe: 2,
            Up: 3.6,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 325,
                BoostSpeedBackward: 185
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 18e7,
        FuelIntakeRate: 150,
        QuantumFuelCapacity: 51e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 8275,
            Retro: 4137.5,
            Vtol: 0,
            Maneuvering: 19650
        },
        IntakeToMainFuelRatio: 1.81,
        TimeForIntakesToFillTank: 12e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 20494,
            SCMActive: 24236,
            NAV: 35576
        },
        Infrared: {
            Start: 14847
        },
        CrossSection: {
            Front: 4576,
            Side: 14099,
            Top: 24735
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 112200,
        PilotBurstDPS: 4609,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 40423
    },
    Insurance: {
        StandardClaimTime: 35.1,
        ExpeditedClaimTime: 11.7,
        ExpeditedCost: 17550
    },
    Buy: {
        "Astro Armada, Area 18": 27231750
    }
}, {
    ClassName: "ORIG_600i_Touring",
    Name: "Origin 600i Touring",
    Description: "This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.",
    Career: "Exploration",
    Role: "Luxury",
    Size: 5,
    Cargo: {
        CargoGrid: 20,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 4.46
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 1613414,
    ComponentsMass: 15324,
    Dimensions: {
        Length: 91.5,
        Width: 52,
        Height: 17
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 55e3,
                Nose: 18600,
                Front: 21e3
            },
            Parts: {
                Wing_Left: 8625,
                Wing_Right: 8625,
                Tail: 4e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_upper_left: 21e3,
                main_upper_right: 21e3,
                main_lower_right: 21e3,
                main_lower_left: 21e3
            },
            Retro: {
                thruster_retro_left: 19500,
                thruster_retro_right: 19500
            },
            Maneuvering: {
                thruster_mav_rear_top_left: 18500,
                thruster_mav_rear_side_left: 18500,
                thruster_mav_rear_top_right: 18500,
                thruster_mav_rear_side_right: 18500,
                thruster_mav_rear_bottom_left: 18500,
                thruster_mav_rear_bottom_right: 18500,
                thruster_mav_rear_bottom_back: 18500,
                thruster_mav_front_top_left: 18500,
                thruster_mav_front_top_right: 18500,
                thruster_mav_front_bottom_left: 18500,
                thruster_mav_front_bottom_right: 18500,
                thruster_mav_front_side_right: 18500,
                thruster_mav_front_side_left: 18500,
                thruster_mav_rear_bottom_front: 18500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 165,
        MaxSpeed: 975,
        Pitch: 19,
        Yaw: 19,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 662e5,
            Retro: 331e5,
            Vtol: 0,
            Maneuvering: 1572e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 4.1,
            Retro: 2,
            Strafe: 2,
            Up: 3.6,
            Down: 2
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 325,
                BoostSpeedBackward: 185
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: 1.1,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 18e7,
        FuelIntakeRate: 150,
        QuantumFuelCapacity: 51e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 8275,
            Retro: 4137.5,
            Vtol: 0,
            Maneuvering: 19650
        },
        IntakeToMainFuelRatio: 1.81,
        TimeForIntakesToFillTank: 12e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 20493,
            SCMActive: 24235,
            NAV: 35575
        },
        Infrared: {
            Start: 14590
        },
        CrossSection: {
            Front: 4576,
            Side: 14099,
            Top: 24735
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 112200,
        PilotBurstDPS: 4609,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 40423
    },
    Insurance: {
        StandardClaimTime: 35.1,
        ExpeditedClaimTime: 11.7,
        ExpeditedCost: 17550
    },
    Buy: {
        "Astro Armada, Area 18": 24938550
    }
}, {
    ClassName: "ORIG_85X",
    Name: "Origin 85X Limited",
    Description: "Elegantly styled and meticulously constructed, the 85X is a versatile and comprehensive away-vessel that features precision control in and out of atmosphere. Utilizing much of the same thruster technology as the 300 series, it has the power of a racer with the reliability of a touring ship. Whether descending down to the planet surface or taking in the sights of your system, this runabout continues Origin’s proud tradition of turning heads.",
    Career: "Exploration",
    Role: "Luxury",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.47,
        PersonalInventory: 1.47
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 19833.5,
    ComponentsMass: 4802,
    Dimensions: {
        Length: 13,
        Width: 10,
        Height: 2
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 1600
            },
            Parts: {
                wing_left: 600,
                wing_right: 600
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 6e3,
                thruster_main_right: 6e3
            },
            Retro: {
                thruster_retro_left: 5500,
                thruster_retro_right: 5500
            },
            Maneuvering: {
                thruster_rear_left_top: 5100,
                thruster_rear_left_bottom: 5100,
                thruster_rear_right_top: 5100,
                thruster_rear_right_bottom: 5100,
                thruster_rear_right_side: 5100,
                thruster_rear_left_side: 5100,
                thruster_front_left_bottom: 5100,
                thruster_front_left_side: 5100,
                thruster_front_left_top: 5100,
                thruster_front_right_bottom: 5100,
                thruster_front_right_side: 5100,
                thruster_front_right_top: 5100
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 230,
        MaxSpeed: 1250,
        Pitch: 65,
        Yaw: 65,
        Roll: 215,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2892112,
            Retro: 11795128e-1,
            Vtol: 0,
            Maneuvering: 52240684e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15.1,
            Retro: 4.5,
            Strafe: 10.5,
            Up: 10.5,
            Down: 5.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 550,
                BoostSpeedBackward: 270
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.6,
            Y_AccelMultiplicator: 1.6,
            Z_AccelMultiplicator: 1.6
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 1e6,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 361.514,
            Retro: 147.439,
            Vtol: 0,
            Maneuvering: 653.008
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 6200,
            SCMActive: 7173,
            NAV: 13734
        },
        Infrared: {
            Start: 8360
        },
        CrossSection: {
            Front: 1479,
            Side: 7279,
            Top: 9495
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2240,
        PilotBurstDPS: 1094,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 1.0125,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 510
    },
    Buy: {
        "New Deal, Lorville": 573300
    }
}, {
    ClassName: "ORIG_890Jump",
    Name: "Origin 890 Jump",
    Description: "With an elegant, sleek exterior that belies its spacious interior, the 890 Jump is a true engineering marvel. Crafted to impress from every angle by combining a unique, innovative design with the finest materials and the most advanced technology. The result is a vessel that is in a class all of its own, a masterpiece worthy of the name Origin.",
    Career: "Exploration",
    Role: "Luxury",
    Size: 6,
    Cargo: {
        CargoGrid: 388,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 7.65
    },
    Crew: 1,
    WeaponCrew: 8,
    OperationsCrew: 0,
    Mass: 44237159,
    ComponentsMass: 85353,
    Dimensions: {
        Length: 210,
        Width: 80,
        Height: 45
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body_Front: 1e5
            },
            Parts: {
                Front: 1e4,
                Nose: 1e4,
                MissileLauncher_hatchDoorA_TL: 200,
                MissileLauncher_hatchDoorA_TR: 200,
                MissileLauncher_hatchDoorB_TL: 200,
                MissileLauncher_hatchDoorB_TR: 200,
                Body: 1e4,
                Body_Top: 1e4,
                Glass_Left_Atrium: 200,
                Glass_Rear: 200,
                Glass_Right_Atrium: 200,
                Glass_Top: 200,
                Body_Front_Top: 1e4,
                Glass_Bridge: 200,
                Glass_Dining: 200,
                Glass_Left: 200,
                Glass_Left_Bar: 200,
                Glass_Left_Bridge: 200,
                Glass_Right: 200,
                Glass_Right_Bar: 200,
                Glass_Right_Bridge: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_lower_left: 45e3,
                main_lower_right: 45e3,
                main_upper_left: 45e3,
                main_upper_right: 45e3
            },
            Retro: {
                thruster_retro_left: 44e3,
                thruster_retro_right: 44e3
            },
            Vtol: {
                thruster_vtol_front_left: 42500,
                thruster_vtol_front_right: 42500,
                thruster_vtol_nose: 42500
            },
            Maneuvering: {
                thruster_mav_mid_side_left: 42500,
                thruster_mav_mid_side_right: 42500,
                thruster_mav_mid_top_left: 42500,
                thruster_mav_mid_top_right: 42500,
                thruster_mav_front_side_left: 42500,
                thruster_mav_front_side_right: 42500,
                thruster_mav_front_top_left: 42500,
                thruster_mav_front_top_right: 42500,
                thruster_mav_mid_bottom_left: 42500,
                thruster_mav_mid_bottom_right: 42500,
                thruster_mav_rear_bottom_left: 42500,
                thruster_mav_rear_bottom_right: 42500,
                thruster_mav_rear_side_left: 42500,
                thruster_mav_rear_side_right: 42500,
                thruster_mav_rear_top_left: 42500,
                thruster_mav_rear_top_right: 42500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 125,
        MaxSpeed: 915,
        Pitch: 16,
        Yaw: 16,
        Roll: 30,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 142e7,
            Retro: 655e6,
            Vtol: 375e6,
            Maneuvering: 2031e6
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.2,
            Retro: 1.5,
            Strafe: 1,
            Up: 2,
            Down: 1.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 9,
            ScmMode: {
                BoostSpeedForward: 300,
                BoostSpeedBackward: 105
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 2.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.5,
                Yaw: 1.5,
                Roll: 2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: 4,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 12e8,
        FuelIntakeRate: 600,
        QuantumFuelCapacity: 146e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 3.75,
            Maneuvering: 20
        },
        FuelUsagePerSecond: {
            Main: 177500,
            Retro: 81875,
            Vtol: 46875,
            Maneuvering: 253875
        },
        IntakeToMainFuelRatio: .34,
        TimeForIntakesToFillTank: 2e6
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 25659,
            SCMActive: 36789,
            NAV: 57895
        },
        Infrared: {
            Start: 24492
        },
        CrossSection: {
            Front: 7746,
            Side: 13506,
            Top: 39724
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 908e3,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 8617,
        TotalMissilesDmg: 96329
    },
    Insurance: {
        StandardClaimTime: 67.5,
        ExpeditedClaimTime: 22.5,
        ExpeditedCost: 33750
    },
    Buy: {
        "Astro Armada, Area 18": 65356200,
        "New Deal, Lorville": 65356200
    }
}, {
    ClassName: "ORIG_m50",
    Name: "Origin M50 Interceptor",
    Description: "If you want to get from point A to point B as quickly as possible and with as much style as possible then Origin's M50 is for you. Featuring supercharged engines that counter a tiny weapons loadout, the M50 is a ship for going FAST.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .43,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 10552,
    ComponentsMass: 1525,
    Dimensions: {
        Length: 11.5,
        Width: 11,
        Height: 3
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 800
            },
            Parts: {
                PowerplantHousingRight: 200,
                Tail: 840,
                WingLeft: 200,
                WingRight: 200,
                PowerplantHousingLeft: 200,
                Nose: 800,
                Canopy: 80,
                LadderHatch: 1,
                WingFrontRight: 50,
                WingFrontLeft: 50,
                EngineCover: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right_attach: 7250,
                engine_left_attach: 7250
            },
            Retro: {
                thruster_intake_right_retro: 7150,
                thruster_intake_left_retro: 7150
            },
            Maneuvering: {
                thruster_rear_right_bottom: 6e3,
                thruster_rear_right_side: 6e3,
                thruster_rear_left_bottom: 6e3,
                thruster_rear_left_side: 6e3,
                thruster_front_left_bottom: 6e3,
                thruster_front_left_side: 6e3,
                thruster_front_left_top: 6e3,
                thruster_front_right_bottom: 6e3,
                thruster_front_right_side: 6e3,
                thruster_front_right_top: 6e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 280,
        MaxSpeed: 1450,
        Pitch: 55,
        Yaw: 55,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 1968e3,
            Retro: 383e3,
            Vtol: 0,
            Maneuvering: 23832748e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 18.1,
            Retro: 3.5,
            Strafe: 7,
            Up: 8,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 620,
                BoostSpeedBackward: 290
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 25,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .2,
            RegenerationTime: 33.3,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 3e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 1e6,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 12.5
        },
        FuelUsagePerSecond: {
            Main: 246,
            Retro: 47.875,
            Vtol: 0,
            Maneuvering: 297.909
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 2610,
            SCMActive: 2897,
            NAV: 10143
        },
        Infrared: {
            Start: 6026
        },
        CrossSection: {
            Front: 1609,
            Side: 5365,
            Top: 5365
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2240,
        PilotBurstDPS: 656,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 6.075,
        ExpeditedClaimTime: 2.025,
        ExpeditedCost: 3040
    },
    Buy: {
        "Astro Armada, Area 18": 1499400,
        "New Deal, Lorville": 1499400
    }
}, {
    ClassName: "ORIG_X1",
    Name: "Origin X1",
    Description: "Welcome to the next level with the X1, Origin Jumpworks' high performance open-canopy vehicle. Built from lightweight polymers, the X1 takes speed and agility to the next level thanks to seamlessly integrated engine technology and joint vector thruster placement. Innovative design and high-quality engineering weave together to create a flight experience like no other.",
    Career: "Personal Transport",
    Role: "Transport",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: .25
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 4730,
    ComponentsMass: 693,
    Dimensions: {
        Length: 5.5,
        Width: 1.25,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 3,
            Infrared: .3,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 530
            },
            Parts: {
                door_body_top: 50,
                door_body_left_bottom: 50,
                door_body_left_top: 50,
                door_body_leg_bottom_left: 50,
                door_body_leg_top_left: 50,
                door_body_right_bottom: 50,
                door_body_right_top: 50,
                door_body_leg_bottom_right: 50,
                door_body_leg_top_right: 50,
                nose: 450,
                door_body_inner_right: 50,
                foot_glass_right_top: 50,
                door_nose_right: 50,
                foot_glass_left_top: 50,
                door_nose_left: 50,
                tail: 340,
                rear_glass: 50,
                tail_wing_left: 200,
                tail_component_door_left: 50,
                tail_component_door_left_break: 50,
                tail_wing_left_cap: 50,
                tail_wing_left_break: 50,
                tail_wing_right: 200,
                tail_component_door_right: 50,
                tail_component_door_right_break: 50,
                tail_wing_right_break: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 1e3,
                thruster_main_left: 1e3
            },
            Retro: {
                thruster_retro_left: 2500,
                thruster_retro_right: 2500
            },
            Maneuvering: {
                gravlev_front_right: 1e3,
                gravlev_front_left: 1e3,
                gravlev_rear_left: 1e3,
                gravlev_rear_right: 1e3,
                gravlev_center_left: 1e3,
                gravlev_center_right: 1e3,
                thruster_mav_front_bottom_right: 2150,
                thruster_mav_front_bottom_right_side: 2150,
                thruster_mav_front_top_right: 2150,
                thruster_mav_front_top_right_side: 2150,
                thruster_mav_front_bottom_left: 2150,
                thruster_mav_front_bottom_left_side: 2150,
                thruster_mav_front_top_left: 2150,
                thruster_mav_front_top_left_side: 2150,
                thruster_mav_rear_bottom_right: 2150,
                thruster_mav_rear_bottom_right_side: 2150,
                thruster_mav_rear_bottom_left: 2150,
                thruster_mav_rear_bottom_left_side: 2150,
                thruster_mav_rear_top_left: 2150,
                thruster_mav_rear_top_left_side: 2150,
                thruster_mav_rear_top_right: 2150,
                thruster_mav_rear_top_right_side: 2150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 207,
        HoverMaxSpeed: 207,
        MaxSpeed: 569,
        Pitch: 80,
        Yaw: 80,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 121500,
            Retro: 135e3,
            Vtol: 0,
            Maneuvering: 305800
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.7,
            Retro: 2.6,
            Strafe: 1.3,
            Up: 1.9,
            Down: 1.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 287,
                BoostSpeedBackward: 127
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.35,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.35,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 15,
            CapacitorRegenPerSec: 2,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 2,
            RegenerationTime: 7.5,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 27.5
        },
        FuelUsagePerSecond: {
            Main: 15.188,
            Retro: 16.875,
            Vtol: 0,
            Maneuvering: 38.225
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 613,
            SCMActive: 631,
            NAV: 0
        },
        Infrared: {
            Start: 606
        },
        CrossSection: {
            Front: 333,
            Side: 457,
            Top: 560
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 304,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    "New Ship": "Origin X1",
    Buy: {
        "Astro Armada, Area 18": 105840,
        "New Deal, Lorville": 105840
    }
}, {
    ClassName: "ORIG_X1_Force",
    Name: "Origin X1 Force",
    Description: "Built to endure tougher environments and look good doing it, the X1 Force is a modified version of the base X1 model featuring additional defensive elements to toughen up this speedy and agile open-canopy bike, allowing it to serve in a variety of roles, from exploring worlds to potential security infiltration ops.",
    Career: "Personal Transport",
    Role: "Transport",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: .25
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 4730,
    ComponentsMass: 728,
    Dimensions: {
        Length: 5.5,
        Width: 1.25,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 3,
            Infrared: .3,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 530
            },
            Parts: {
                door_body_top: 50,
                door_body_left_bottom: 50,
                door_body_left_top: 50,
                door_body_leg_bottom_left: 50,
                door_body_leg_top_left: 50,
                door_body_right_bottom: 50,
                door_body_right_top: 50,
                door_body_leg_bottom_right: 50,
                door_body_leg_top_right: 50,
                nose: 450,
                door_body_inner_right: 50,
                foot_glass_right_top: 50,
                door_nose_right: 50,
                foot_glass_left_top: 50,
                door_nose_left: 50,
                tail: 340,
                rear_glass: 50,
                tail_wing_left: 200,
                tail_component_door_left: 50,
                tail_component_door_left_break: 50,
                tail_wing_left_cap: 50,
                tail_wing_left_break: 50,
                tail_wing_right: 200,
                tail_component_door_right: 50,
                tail_component_door_right_break: 50,
                tail_wing_right_break: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right: 1e3,
                thruster_main_left: 1e3
            },
            Retro: {
                thruster_retro_left: 2500,
                thruster_retro_right: 2500
            },
            Maneuvering: {
                gravlev_front_right: 1e3,
                gravlev_front_left: 1e3,
                gravlev_rear_left: 1e3,
                gravlev_rear_right: 1e3,
                gravlev_center_left: 1e3,
                gravlev_center_right: 1e3,
                thruster_mav_front_bottom_right: 2150,
                thruster_mav_front_bottom_right_side: 2150,
                thruster_mav_front_top_right: 2150,
                thruster_mav_front_top_right_side: 2150,
                thruster_mav_front_bottom_left: 2150,
                thruster_mav_front_bottom_left_side: 2150,
                thruster_mav_front_top_left: 2150,
                thruster_mav_front_top_left_side: 2150,
                thruster_mav_rear_bottom_right: 2150,
                thruster_mav_rear_bottom_right_side: 2150,
                thruster_mav_rear_bottom_left: 2150,
                thruster_mav_rear_bottom_left_side: 2150,
                thruster_mav_rear_top_left: 2150,
                thruster_mav_rear_top_left_side: 2150,
                thruster_mav_rear_top_right: 2150,
                thruster_mav_rear_top_right_side: 2150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 207,
        HoverMaxSpeed: 207,
        MaxSpeed: 569,
        Pitch: 80,
        Yaw: 80,
        Roll: 135,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 121500,
            Retro: 135e3,
            Vtol: 0,
            Maneuvering: 305800
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 2.7,
            Retro: 2.6,
            Strafe: 1.3,
            Up: 1.9,
            Down: 1.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 287,
                BoostSpeedBackward: 127
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.35,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.35,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 15,
            CapacitorRegenPerSec: 2,
            CapacitorIdleCost: 2,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 2,
            RegenerationTime: 7.5,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 27.5
        },
        FuelUsagePerSecond: {
            Main: 15.188,
            Retro: 16.875,
            Vtol: 0,
            Maneuvering: 38.225
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 488,
            SCMActive: 1857,
            NAV: 0
        },
        Infrared: {
            Start: 600
        },
        CrossSection: {
            Front: 333,
            Side: 457,
            Top: 560
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 219,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    "New Ship": "Origin X1 Force",
    Buy: {
        "Astro Armada, Area 18": 132300,
        "New Deal, Lorville": 132300
    }
}, {
    ClassName: "ORIG_X1_Velocity",
    Name: "Origin X1 Velocity",
    Description: "How do you make fast go faster? Origin Jumpworks' X1 Velocity dares to push the boundaries of speed by stripping down the base X1 to its core elements; eliminating the weapon mount and incorporating new Syntek composites to create a lighter chassis for overall weight loss.",
    Career: "Personal Transport",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .39,
        PersonalInventory: .25
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 4730,
    ComponentsMass: 573,
    Dimensions: {
        Length: 5.5,
        Width: 1.25,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 3,
            Infrared: .3,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 530
            },
            Parts: {
                door_body_top: 50,
                door_body_left_bottom: 50,
                door_body_left_top: 50,
                door_body_leg_bottom_left: 50,
                door_body_leg_top_left: 50,
                door_body_right_bottom: 50,
                door_body_right_top: 50,
                door_body_leg_bottom_right: 50,
                door_body_leg_top_right: 50,
                nose: 450,
                door_body_inner_right: 50,
                foot_glass_right_top: 50,
                door_nose_right: 50,
                foot_glass_left_top: 50,
                door_nose_left: 50,
                tail: 340,
                rear_glass: 50,
                tail_wing_left: 200,
                tail_component_door_left: 50,
                tail_component_door_left_break: 50,
                tail_wing_left_cap: 50,
                tail_wing_left_break: 50,
                tail_wing_right: 200,
                tail_component_door_right: 50,
                tail_component_door_right_break: 50,
                tail_wing_right_break: 50
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_velocity: 1e3
            },
            Retro: {
                thruster_retro_left: 2500,
                thruster_retro_right: 2500
            },
            Maneuvering: {
                gravlev_front_right: 1e3,
                gravlev_front_left: 1e3,
                gravlev_rear_left: 1e3,
                gravlev_rear_right: 1e3,
                gravlev_center_left: 1e3,
                gravlev_center_right: 1e3,
                thruster_mav_front_bottom_right: 2150,
                thruster_mav_front_bottom_right_side: 2150,
                thruster_mav_front_top_right: 2150,
                thruster_mav_front_top_right_side: 2150,
                thruster_mav_front_bottom_left: 2150,
                thruster_mav_front_bottom_left_side: 2150,
                thruster_mav_front_top_left: 2150,
                thruster_mav_front_top_left_side: 2150,
                thruster_mav_rear_bottom_right: 2150,
                thruster_mav_rear_bottom_right_side: 2150,
                thruster_mav_rear_bottom_left: 2150,
                thruster_mav_rear_bottom_left_side: 2150,
                thruster_mav_rear_top_left: 2150,
                thruster_mav_rear_top_left_side: 2150,
                thruster_mav_rear_top_right: 2150,
                thruster_mav_rear_top_right_side: 2150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 222,
        HoverMaxSpeed: 222,
        MaxSpeed: 611,
        Pitch: 93,
        Yaw: 93,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 133500,
            Retro: 147e3,
            Vtol: 0,
            Maneuvering: 329800
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.1,
            Retro: 2.9,
            Strafe: 1.5,
            Up: 2.4,
            Down: 2.4
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 302,
                BoostSpeedBackward: 142
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 2,
                    Y: 2.3,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 2,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 11,
            CapacitorRegenPerSec: 4,
            CapacitorIdleCost: 4,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 2,
            RegenerationTime: 2.8,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 27.5
        },
        FuelUsagePerSecond: {
            Main: 16.688,
            Retro: 18.375,
            Vtol: 0,
            Maneuvering: 41.225
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 361,
            SCMActive: 379,
            NAV: 0
        },
        Infrared: {
            Start: 596
        },
        CrossSection: {
            Front: 333,
            Side: 457,
            Top: 560
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .15,
        ExpeditedClaimTime: .05,
        ExpeditedCost: 75
    },
    "New Ship": "Origin X1 Velocity",
    Buy: {
        "Astro Armada, Area 18": 119070,
        "New Deal, Lorville": 119070
    }
}, {
    ClassName: "RSI_Aurora_CL",
    Name: "RSI Aurora CL",
    Description: "Customized for mercantile and trading excursions, the Aurora Clipper is the perfect vessel for aspiring entrepreneurs and seasoned traders alike. Swapping a smaller power plant and armor capabilities for an expanded cargo capacity, the Clipper ups the ante for personal merchant craft.",
    Career: "Transporter",
    Role: "Light Freight",
    Size: 2,
    Cargo: {
        CargoGrid: 6,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 26422,
    ComponentsMass: 2355,
    Dimensions: {
        Length: 18,
        Width: 8,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1940,
                Body: 1880
            },
            Parts: {
                Wing_Bottom_Left: 480,
                Wing_Top_Left: 480,
                Wing_Bottom_Right: 480,
                Wing_Top_Right: 480
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster: 8750
            },
            Retro: {
                Retro_Thruster_Left: 8e3,
                Retro_Thruster_Right: 8e3
            },
            Maneuvering: {
                Mav_Thruster_FT: 7150,
                Mav_Thruster_FB: 7150,
                Mav_Thruster_FL: 7150,
                Mav_Thruster_FR: 7150,
                Mav_Thruster_RT: 7150,
                Mav_Thruster_RL: 7150,
                Mav_Thruster_RR: 7150,
                Mav_Thruster_RB: 7150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 46,
        Yaw: 46,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2933877,
            Retro: 933685.6,
            Vtol: 0,
            Maneuvering: 17774552e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.9,
            Retro: 3.4,
            Strafe: 4.9,
            Up: 5.9,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.2,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 5,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 366.735,
            Retro: 116.711,
            Vtol: 0,
            Maneuvering: 222.182
        },
        IntakeToMainFuelRatio: 1.36,
        TimeForIntakesToFillTank: 9e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4097,
            SCMActive: 4843,
            NAV: 11630
        },
        Infrared: {
            Start: 4641
        },
        CrossSection: {
            Front: 1515,
            Side: 3367,
            Top: 6888
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2312
    },
    Insurance: {
        StandardClaimTime: 2.43,
        ExpeditedClaimTime: .81,
        ExpeditedCost: 1408
    },
    Buy: {
        "New Deal, Lorville": 1020600
    }
}, {
    ClassName: "RSI_Aurora_ES",
    Name: "RSI Aurora ES",
    Description: "The Aurora is the modern day descendant of the Roberts Space Industries X-7 spacecraft which tested the very first jump engines. Utilitarian to a T, the Aurora is the perfect beginner's ship: what it lacks in style it makes up for in ample room for upgrade modules.",
    Career: "Multi-Role",
    Role: "Starter / Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 3,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .93
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 26486,
    ComponentsMass: 1825,
    Dimensions: {
        Length: 18,
        Width: 8,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1940,
                Body: 1880
            },
            Parts: {
                Wing_Bottom_Left: 480,
                Wing_Top_Left: 480,
                Wing_Bottom_Right: 480,
                Wing_Top_Right: 480
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster: 8750
            },
            Retro: {
                Retro_Thruster_Left: 8e3,
                Retro_Thruster_Right: 8e3
            },
            Maneuvering: {
                Mav_Thruster_FT: 7150,
                Mav_Thruster_FB: 7150,
                Mav_Thruster_FL: 7150,
                Mav_Thruster_FR: 7150,
                Mav_Thruster_RT: 7150,
                Mav_Thruster_RL: 7150,
                Mav_Thruster_RR: 7150,
                Mav_Thruster_RB: 7150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 46,
        Yaw: 46,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2938602,
            Retro: 936461.4,
            Vtol: 0,
            Maneuvering: 17805616e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.9,
            Retro: 3.4,
            Strafe: 4.9,
            Up: 5.9,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.2,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 5,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 367.325,
            Retro: 117.058,
            Vtol: 0,
            Maneuvering: 222.57
        },
        IntakeToMainFuelRatio: 1.36,
        TimeForIntakesToFillTank: 9e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3886,
            SCMActive: 4667,
            NAV: 11419
        },
        Infrared: {
            Start: 4631
        },
        CrossSection: {
            Front: 1980,
            Side: 4400,
            Top: 9e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 2800,
        PilotBurstDPS: 405,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2312
    },
    Insurance: {
        StandardClaimTime: 2.16,
        ExpeditedClaimTime: .72,
        ExpeditedCost: 1298
    },
    Buy: {
        "New Deal, Lorville": 423360
    }
}, {
    ClassName: "RSI_Aurora_LN",
    Name: "RSI Aurora LN",
    Description: "With a more robust shield generator and a pair of additional weapon hard points, the Legionnaire is a dedicated combat fighter, built to handle any obstacle the universe can throw at you.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 3,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 28714,
    ComponentsMass: 2839,
    Dimensions: {
        Length: 18,
        Width: 8,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1940,
                Body: 1880
            },
            Parts: {
                Wing_Bottom_Left: 480,
                Wing_Top_Left: 480,
                Wing_Bottom_Right: 480,
                Wing_Top_Right: 480
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster: 8750
            },
            Retro: {
                Retro_Thruster_Left: 8e3,
                Retro_Thruster_Right: 8e3
            },
            Maneuvering: {
                Mav_Thruster_FT: 7150,
                Mav_Thruster_FB: 7150,
                Mav_Thruster_FL: 7150,
                Mav_Thruster_FR: 7150,
                Mav_Thruster_RT: 7150,
                Mav_Thruster_RL: 7150,
                Mav_Thruster_RR: 7150,
                Mav_Thruster_RB: 7150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 46,
        Yaw: 46,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3269697,
            Retro: 10402858e-1,
            Vtol: 0,
            Maneuvering: 19812472e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.2,
            Retro: 3.5,
            Strafe: 5,
            Up: 6.1,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.2,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 408.712,
            Retro: 130.036,
            Vtol: 0,
            Maneuvering: 247.656
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3871,
            SCMActive: 4517,
            NAV: 11404
        },
        Infrared: {
            Start: 3891
        },
        CrossSection: {
            Front: 1349,
            Side: 2998,
            Top: 6133
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3200,
        PilotBurstDPS: 875,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9602
    },
    Insurance: {
        StandardClaimTime: 2.92,
        ExpeditedClaimTime: .97,
        ExpeditedCost: 2005
    },
    Buy: {
        "New Deal, Lorville": 907200
    }
}, {
    ClassName: "RSI_Aurora_LX",
    Name: "RSI Aurora LX",
    Description: "Be proud of your roots with the brand-new Aurora Deluxe, built for the discerning pilot who never forgets where he or she came from. The LX features patent leather interior to guarantee comfort for those long stretches in the deep black.",
    Career: "Exploration",
    Role: "Pathfinder",
    Size: 2,
    Cargo: {
        CargoGrid: 3,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 1.01
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 26736,
    ComponentsMass: 1652,
    Dimensions: {
        Length: 18,
        Width: 8,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1940,
                Body: 1880
            },
            Parts: {
                Wing_Bottom_Left: 480,
                Wing_Top_Left: 480,
                Wing_Bottom_Right: 480,
                Wing_Top_Right: 480
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster: 8750
            },
            Retro: {
                Retro_Thruster_Left: 8e3,
                Retro_Thruster_Right: 8e3
            },
            Maneuvering: {
                Mav_Thruster_FT: 7150,
                Mav_Thruster_FB: 7150,
                Mav_Thruster_FL: 7150,
                Mav_Thruster_FR: 7150,
                Mav_Thruster_RT: 7150,
                Mav_Thruster_RL: 7150,
                Mav_Thruster_RR: 7150,
                Mav_Thruster_RB: 7150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 46,
        Yaw: 46,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3517894,
            Retro: 12186466e-1,
            Vtol: 0,
            Maneuvering: 13225616e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.9,
            Retro: 4.4,
            Strafe: 3.6,
            Up: 3.6,
            Down: 1.8
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.2,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 5,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 439.737,
            Retro: 152.331,
            Vtol: 0,
            Maneuvering: 165.32
        },
        IntakeToMainFuelRatio: 1.14,
        TimeForIntakesToFillTank: 9e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4103,
            SCMActive: 4843,
            NAV: 11636
        },
        Infrared: {
            Start: 4641
        },
        CrossSection: {
            Front: 1178,
            Side: 2618,
            Top: 5355
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4480,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 4115
    },
    Insurance: {
        StandardClaimTime: 2.7,
        ExpeditedClaimTime: .9,
        ExpeditedCost: 1513
    },
    Buy: {
        "New Deal, Lorville": 687960
    }
}, {
    ClassName: "RSI_Aurora_MR",
    Name: "RSI Aurora MR",
    Description: "Perhaps you're looking for something that offers carrying capacity but has combat capabilities too? The Aurora Marque comes with a pair of Behring-quality lasers and a high quality gun cooler system.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 3,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 27893,
    ComponentsMass: 2417,
    Dimensions: {
        Length: 18,
        Width: 8,
        Height: 4
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1940,
                Body: 1880
            },
            Parts: {
                Wing_Bottom_Left: 480,
                Wing_Top_Left: 480,
                Wing_Bottom_Right: 480,
                Wing_Top_Right: 480
            }
        },
        ThrustersHealthPoints: {
            Main: {
                Main_Thruster: 8750
            },
            Retro: {
                Retro_Thruster_Left: 8e3,
                Retro_Thruster_Right: 8e3
            },
            Maneuvering: {
                Mav_Thruster_FT: 7150,
                Mav_Thruster_FB: 7150,
                Mav_Thruster_FL: 7150,
                Mav_Thruster_FR: 7150,
                Mav_Thruster_RT: 7150,
                Mav_Thruster_RL: 7150,
                Mav_Thruster_RR: 7150,
                Mav_Thruster_RB: 7150
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 46,
        Yaw: 46,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3098507,
            Retro: 986840.8,
            Vtol: 0,
            Maneuvering: 18790944e-1
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11,
            Retro: 3.5,
            Strafe: 5,
            Up: 6,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 450,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.2,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 45e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 387.313,
            Retro: 123.355,
            Vtol: 0,
            Maneuvering: 234.886
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 4097,
            SCMActive: 4843,
            NAV: 11630
        },
        Infrared: {
            Start: 4641
        },
        CrossSection: {
            Front: 1515,
            Side: 3367,
            Top: 6888
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3700,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 2280
    },
    Insurance: {
        StandardClaimTime: 2.92,
        ExpeditedClaimTime: .97,
        ExpeditedCost: 1631
    },
    Buy: {
        "New Deal, Lorville": 680400
    }
}, {
    ClassName: "RSI_Constellation_Andromeda",
    Name: "RSI Constellation Andromeda",
    Description: "The Constellation Andromeda is a dependable multi-crew freighter that appeals to merchants across the empire thanks to its versatility. One of the most popular ships that RSI produces, the iconic Andromeda features a well-appointed cargo bay, a snub-fighter docking port, and a signature wrap-around bridge.",
    Career: "Multi-Role",
    Role: "Medium Freight / Gun Ship",
    Size: 4,
    Cargo: {
        CargoGrid: 96,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.08
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 430057,
    ComponentsMass: 11636,
    Dimensions: {
        Length: 61,
        Width: 26,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                neck: 2e4,
                nose: 2e4,
                body: 2e4,
                tail: 2e4
            },
            Parts: {
                nose_TurretHousings: 500,
                wing_left: 15e3,
                turbine_cover_wingl_bot_front_out: 20,
                turbine_cover_wingl_bot_rear_out: 20,
                turbine_cover_wingl_bot_front_in: 20,
                turbine_cover_wingl_bot_rear_in: 20,
                turbine_cover_wingl_top_front_out: 20,
                turbine_cover_wingl_top_rear_out: 20,
                turbine_cover_wingl_top_front_in: 20,
                turbine_cover_wingl_top_rear_in: 20,
                wing_right: 15e3,
                turbine_cover_wingr_top_rear_in: 20,
                turbine_cover_wingr_top_front_in: 20,
                turbine_cover_wingr_bot_rear_in: 20,
                turbine_cover_wingr_bot_front_out: 20,
                turbine_cover_wingr_top_rear_out: 20,
                turbine_cover_wingr_top_front_out: 20,
                turbine_cover_wingr_bot_front_in: 20,
                turbine_cover_wingr_bot_rear_out: 20,
                nose_turret_door_bottom_left: 1,
                nose_turret_door_bottom_right: 1,
                nose_turret_door_top_left: 1,
                nose_turret_door_top_right: 1,
                hardpoint_lightgroup: 200,
                misslerack_arm_body_left_arm: 1750,
                misslerack_arm_body_right_arm: 1750,
                misslerack_arm_tail_left_arm: 1750,
                nacelle_tower_left: 1e3,
                nacelle_left: 15e3,
                nacelle_tower_right: 1e3,
                nacelle_right: 15e3,
                misslerack_arm_tail_right_arm: 1750,
                nacelle_bottom_right: 15e3,
                turbine_cover_naceller_bot_front_in: 20,
                turbine_cover_naceller_bot_rear_in: 20,
                turbine_cover_naceller_bot_front_out: 20,
                turbine_cover_naceller_bot_rear_out: 20,
                turbine_cover_naceller_top_front_in: 20,
                turbine_cover_naceller_top_rear_in: 20,
                turbine_cover_naceller_top_front_out: 20,
                turbine_cover_naceller_top_rear_out: 20,
                nacelle_bottom_left: 15e3,
                turbine_cover_nacellel_bot_front_out: 20,
                turbine_cover_nacellel_bot_rear_out: 20,
                turbine_cover_nacellel_bot_front_in: 20,
                turbine_cover_nacellel_bot_rear_in: 20,
                turbine_cover_nacellel_top_front_out: 20,
                turbine_cover_nacellel_top_rear_out: 20,
                turbine_cover_nacellel_top_front_in: 20,
                turbine_cover_nacellel_top_rear_in: 20
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_top_left: 24e3,
                engine_top_right: 24e3,
                engine_bottom_right: 24e3,
                engine_bottom_left: 24e3
            },
            Retro: {
                retro_top_left: 5e4,
                retro_top_right: 5e4,
                retro_bottom_right: 5e4,
                retro_bottom_left: 5e4
            },
            Vtol: {
                thruster_vtol_front_left_01: 5e4,
                thruster_vtol_front_left_02: 5e4,
                thruster_vtol_front_right_01: 5e4,
                thruster_vtol_front_right_02: 5e4,
                thruster_vtol_rear_right_01: 5e4,
                thruster_vtol_rear_right_02: 5e4,
                thruster_vtol_rear_left_01: 5e4,
                thruster_vtol_rear_left_02: 5e4
            },
            Maneuvering: {
                thruster_bottom_front_right: 5e4,
                thruster_top_front_right: 5e4,
                thruster_top_front_left: 5e4,
                thruster_bottom_front_left: 5e4,
                thruster_center_front_left: 5e4,
                thruster_center_front_right: 5e4,
                thruster_center_back_right: 5e4,
                thruster_center_back_left: 5e4,
                thruster_top_back_left: 5e4,
                thruster_top_back_right: 5e4,
                thruster_bottom_back_right: 5e4,
                thruster_bottom_back_left: 5e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2228e4,
            Retro: 1116e4,
            Vtol: 488e4,
            Maneuvering: 1326e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.2,
            Retro: 2.6,
            Strafe: 2.6,
            Up: 3.1,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 66e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 4.0999999999999995e6,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 5,
            Vtol: 10,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2785,
            Retro: 1395,
            Vtol: 610,
            Maneuvering: 1657.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 13164,
            SCMActive: 14376,
            NAV: 28644
        },
        Infrared: {
            Start: 18657
        },
        CrossSection: {
            Front: 3125,
            Side: 10505,
            Top: 23935
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 48800,
        PilotBurstDPS: 4910,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 81305
    },
    Insurance: {
        StandardClaimTime: 13.5,
        ExpeditedClaimTime: 4.5,
        ExpeditedCost: 6750
    },
    Buy: {
        "New Deal, Lorville": 10160640
    }
}, {
    ClassName: "RSI_Constellation_Aquila",
    Name: "RSI Constellation Aquila",
    Career: "Exploration",
    Role: "Expedition",
    Size: 4,
    Cargo: {
        CargoGrid: 96,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.6
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 449743,
    ComponentsMass: 9438,
    Dimensions: {
        Length: 61,
        Width: 26,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                neck: 2e4,
                nose: 2e4,
                body: 2e4,
                tail: 2e4
            },
            Parts: {
                nose_turret_housings: 500,
                wing_left: 15e3,
                turbine_cover_wingl_bot_front_out: 20,
                turbine_cover_wingl_bot_rear_out: 20,
                turbine_cover_wingl_bot_front_in: 20,
                turbine_cover_wingl_bot_rear_in: 20,
                turbine_cover_wingl_top_front_out: 20,
                turbine_cover_wingl_top_rear_out: 20,
                turbine_cover_wingl_top_front_in: 20,
                turbine_cover_wingl_top_rear_in: 20,
                wing_right: 15e3,
                turbine_cover_wingr_top_rear_in: 20,
                turbine_cover_wingr_top_front_in: 20,
                turbine_cover_wingr_bot_rear_in: 20,
                turbine_cover_wingr_bot_front_out: 20,
                turbine_cover_wingr_top_rear_out: 20,
                turbine_cover_wingr_top_front_out: 20,
                turbine_cover_wingr_bot_front_in: 20,
                turbine_cover_wingr_bot_rear_out: 20,
                nose_turret_door_bottom_left: 1,
                nose_turret_door_bottom_right: 1,
                nose_turret_door_top_left: 1,
                nose_turret_door_top_right: 1,
                hardpoint_lightgroup: 200,
                misslerack_arm_body_left_arm: 1750,
                misslerack_arm_body_right_arm: 1750,
                misslerack_arm_tail_left_arm: 1750,
                nacelle_tower_left: 1e3,
                nacelle_left: 15e3,
                nacelle_tower_right: 1e3,
                nacelle_right: 15e3,
                misslerack_arm_tail_right_arm: 1750,
                nacelle_bottom_right: 15e3,
                turbine_cover_naceller_bot_front_in: 20,
                turbine_cover_naceller_bot_rear_in: 20,
                turbine_cover_naceller_bot_front_out: 20,
                turbine_cover_naceller_bot_rear_out: 20,
                turbine_cover_naceller_top_front_in: 20,
                turbine_cover_naceller_top_rear_in: 20,
                turbine_cover_naceller_top_front_out: 20,
                turbine_cover_naceller_top_rear_out: 20,
                nacelle_bottom_left: 15e3,
                turbine_cover_nacellel_bot_front_out: 20,
                turbine_cover_nacellel_bot_rear_out: 20,
                turbine_cover_nacellel_bot_front_in: 20,
                turbine_cover_nacellel_bot_rear_in: 20,
                turbine_cover_nacellel_top_front_out: 20,
                turbine_cover_nacellel_top_rear_out: 20,
                turbine_cover_nacellel_top_front_in: 20,
                turbine_cover_nacellel_top_rear_in: 20
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_top_left: 24e3,
                engine_top_right: 24e3,
                engine_bottom_right: 24e3,
                engine_bottom_left: 24e3
            },
            Retro: {
                retro_top_left: 5e4,
                retro_top_right: 5e4,
                retro_bottom_right: 5e4,
                retro_bottom_left: 5e4
            },
            Vtol: {
                thruster_vtol_front_left_01: 5e4,
                thruster_vtol_front_left_02: 5e4,
                thruster_vtol_front_right_01: 5e4,
                thruster_vtol_front_right_02: 5e4,
                thruster_vtol_rear_right_01: 5e4,
                thruster_vtol_rear_right_02: 5e4,
                thruster_vtol_rear_left_01: 5e4,
                thruster_vtol_rear_left_02: 5e4
            },
            Maneuvering: {
                thruster_bottom_front_right: 5e4,
                thruster_top_front_right: 5e4,
                thruster_top_front_left: 5e4,
                thruster_bottom_front_left: 5e4,
                thruster_center_front_left: 5e4,
                thruster_center_front_right: 5e4,
                thruster_center_back_right: 5e4,
                thruster_center_back_left: 5e4,
                thruster_top_back_left: 5e4,
                thruster_top_back_right: 5e4,
                thruster_bottom_back_right: 5e4,
                thruster_bottom_back_left: 5e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 146,
        MaxSpeed: 988,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2228e4,
            Retro: 1116e4,
            Vtol: 488e4,
            Maneuvering: 1326e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 4.9,
            Retro: 2.5,
            Strafe: 2.5,
            Up: 2.9,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 1045e5,
        FuelIntakeRate: 100,
        QuantumFuelCapacity: 56e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 5,
            Vtol: 10,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2785,
            Retro: 1395,
            Vtol: 610,
            Maneuvering: 1657.5
        },
        IntakeToMainFuelRatio: 3.59,
        TimeForIntakesToFillTank: 1045e3
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 11574,
            SCMActive: 13256,
            NAV: 27055
        },
        Infrared: {
            Start: 17257
        },
        CrossSection: {
            Front: 2999,
            Side: 10083,
            Top: 22973
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 48800,
        PilotBurstDPS: 6145,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 49381
    },
    Insurance: {
        StandardClaimTime: 16.2,
        ExpeditedClaimTime: 5.4,
        ExpeditedCost: 9171
    },
    Buy: {
        "New Deal, Lorville": 12186720
    }
}, {
    ClassName: "RSI_Constellation_Phoenix",
    Name: "RSI Constellation Phoenix",
    Description: "A dedicated luxury spacecraft for the discerning star captain. The Constellation Phoenix can be operated as an organization command ship and features a luxurious redesigned interior. Includes a hidden sensor-dampened area for your most precious cargo. The Phoenix comes with a Lynx rover and a Kruger P-72 Archimedes Fighter.",
    Career: "Multi-Role",
    Role: "Luxury",
    Size: 4,
    Cargo: {
        CargoGrid: 80,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.43
    },
    Crew: 1,
    WeaponCrew: 2,
    OperationsCrew: 0,
    Mass: 427001,
    ComponentsMass: 9828,
    Dimensions: {
        Length: 61,
        Width: 26,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                neck: 2e4,
                nose: 2e4,
                body: 2e4,
                tail: 2e4
            },
            Parts: {
                wing_right: 15e3,
                turbine_cover_wingr_top_rear_in: 20,
                turbine_cover_wingr_top_front_in: 20,
                turbine_cover_wingr_bot_rear_in: 20,
                turbine_cover_wingr_bot_front_out: 20,
                turbine_cover_wingr_top_rear_out: 20,
                turbine_cover_wingr_top_front_out: 20,
                turbine_cover_wingr_bot_front_in: 20,
                turbine_cover_wingr_bot_rear_out: 20,
                wing_left: 15e3,
                turbine_cover_wingl_bot_front_out: 20,
                turbine_cover_wingl_bot_rear_out: 20,
                turbine_cover_wingl_bot_front_in: 20,
                turbine_cover_wingl_bot_rear_in: 20,
                turbine_cover_wingl_top_front_out: 20,
                turbine_cover_wingl_top_rear_out: 20,
                turbine_cover_wingl_top_front_in: 20,
                turbine_cover_wingl_top_rear_in: 20,
                nose_TurretHousings: 1,
                nose_turret_door_bottom_left: 1,
                nose_turret_door_bottom_right: 1,
                nose_turret_door_top_left: 1,
                nose_turret_door_top_right: 1,
                misslerack_arm_body_left_arm: 1750,
                misslerack_arm_body_right_arm: 1750,
                nacelle_bottom_right: 15e3,
                turbine_cover_naceller_bot_front_in: 20,
                turbine_cover_naceller_bot_rear_in: 20,
                turbine_cover_naceller_bot_front_out: 20,
                turbine_cover_naceller_bot_rear_out: 20,
                turbine_cover_naceller_top_front_in: 20,
                turbine_cover_naceller_top_rear_in: 20,
                turbine_cover_naceller_top_front_out: 20,
                turbine_cover_naceller_top_rear_out: 20,
                nacelle_bottom_left: 15e3,
                turbine_cover_nacellel_bot_front_out: 20,
                turbine_cover_nacellel_bot_rear_out: 20,
                turbine_cover_nacellel_bot_front_in: 20,
                turbine_cover_nacellel_bot_rear_in: 20,
                turbine_cover_nacellel_top_front_out: 20,
                turbine_cover_nacellel_top_rear_out: 20,
                turbine_cover_nacellel_top_front_in: 20,
                turbine_cover_nacellel_top_rear_in: 20,
                misslerack_arm_tail_left_arm: 1750,
                misslerack_arm_tail_right_arm: 1750,
                nacelle_tower_left: 1e3,
                nacelle_left: 5500,
                nacelle_tower_right: 1e3,
                nacelle_right: 5500
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_bottom_right: 24e3,
                engine_bottom_left: 24e3,
                engine_top_left: 24e3,
                engine_top_right: 24e3
            },
            Retro: {
                retro_bottom_right: 5e4,
                retro_bottom_left: 5e4,
                retro_top_left: 5e4,
                retro_top_right: 5e4
            },
            Vtol: {
                thruster_vtol_front_right_01: 5e4,
                thruster_vtol_front_right_02: 5e4,
                thruster_vtol_front_left_01: 5e4,
                thruster_vtol_front_left_02: 5e4,
                thruster_vtol_rear_right_01: 5e4,
                thruster_vtol_rear_right_02: 5e4,
                thruster_vtol_rear_left_01: 5e4,
                thruster_vtol_rear_left_02: 5e4
            },
            Maneuvering: {
                thruster_bottom_front_left: 5e4,
                thruster_bottom_front_right: 5e4,
                thruster_top_front_left: 5e4,
                thruster_top_front_right: 5e4,
                thruster_center_front_right: 5e4,
                thruster_center_front_left: 5e4,
                thruster_bottom_back_right: 5e4,
                thruster_bottom_back_left: 5e4,
                thruster_center_back_right: 5e4,
                thruster_center_back_left: 5e4,
                thruster_top_back_left: 5e4,
                thruster_top_back_right: 5e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2228e4,
            Retro: 1116e4,
            Vtol: 488e4,
            Maneuvering: 1326e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.2,
            Retro: 2.6,
            Strafe: 2.6,
            Up: 3.1,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 66e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 4.0999999999999995e6,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 5,
            Vtol: 10,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2785,
            Retro: 1395,
            Vtol: 610,
            Maneuvering: 1657.5
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12371,
            SCMActive: 13583,
            NAV: 27851
        },
        Infrared: {
            Start: 18557
        },
        CrossSection: {
            Front: 3094,
            Side: 10400,
            Top: 23696
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 48800,
        PilotBurstDPS: 4922,
        TurretsBurstDPS: 2515,
        TotalMissilesDmg: 31924
    },
    Insurance: {
        StandardClaimTime: 24.3,
        ExpeditedClaimTime: 8.1,
        ExpeditedCost: 12079
    },
    Buy: {
        "New Deal, Lorville": 14817600
    }
}, {
    ClassName: "RSI_Constellation_Taurus",
    Name: "RSI Constellation Taurus",
    Description: "Paired down to fully focus on hauling, the Taurus provides the most cargo space of any ship in RSI’s Constellation line-up. What it loses in versatility it more than makes up for in potential profits thanks to its tractor beams, a cargo release system for quick unloading, and a security hold reinforced with tech plating.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 4,
    Cargo: {
        CargoGrid: 174,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 5.43
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 1,
    Mass: 427001,
    ComponentsMass: 11648,
    Dimensions: {
        Length: 69,
        Width: 26,
        Height: 14
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                neck: 2e4,
                nose: 2e4,
                body: 1e4,
                tail: 2e4
            },
            Parts: {
                nose_TurretHousings: 500,
                nose_turret_door_bottom_left: 100,
                nose_turret_door_bottom_right: 100,
                nose_turret_door_top_left: 100,
                nose_turret_door_top_right: 100,
                wing_left: 15e3,
                turbine_cover_wingl_bot_front_out: 20,
                turbine_cover_wingl_bot_rear_out: 20,
                turbine_cover_wingl_bot_front_in: 20,
                turbine_cover_wingl_bot_rear_in: 20,
                turbine_cover_wingl_top_front_out: 20,
                turbine_cover_wingl_top_rear_out: 20,
                turbine_cover_wingl_top_front_in: 20,
                turbine_cover_wingl_top_rear_in: 20,
                wing_right: 15e3,
                turbine_cover_wingr_top_rear_in: 20,
                turbine_cover_wingr_top_front_in: 20,
                turbine_cover_wingr_bot_rear_in: 20,
                turbine_cover_wingr_bot_front_out: 20,
                turbine_cover_wingr_top_rear_out: 20,
                turbine_cover_wingr_top_front_out: 20,
                turbine_cover_wingr_bot_front_in: 20,
                turbine_cover_wingr_bot_rear_out: 20,
                bottom_nacelle_rail: 1e3,
                Hatch_Rear: 1e3,
                nacelle_tower_right: 1e3,
                nacelle_right: 5500,
                nacelle_tower_left: 1e3,
                nacelle_left: 5500,
                nacelle_bottom_right: 6500,
                turbine_cover_naceller_bot_front_in: 20,
                turbine_cover_naceller_bot_rear_in: 20,
                turbine_cover_naceller_bot_front_out: 20,
                turbine_cover_naceller_bot_rear_out: 20,
                turbine_cover_naceller_top_front_in: 20,
                turbine_cover_naceller_top_rear_in: 20,
                turbine_cover_naceller_top_front_out: 20,
                turbine_cover_naceller_top_rear_out: 20,
                nacelle_bottom_left: 6500,
                turbine_cover_nacellel_bot_front_out: 20,
                turbine_cover_nacellel_bot_rear_out: 20,
                turbine_cover_nacellel_bot_front_in: 20,
                turbine_cover_nacellel_bot_rear_in: 20,
                turbine_cover_nacellel_top_front_out: 20,
                turbine_cover_nacellel_top_rear_out: 20,
                turbine_cover_nacellel_top_front_in: 20,
                turbine_cover_nacellel_top_rear_in: 20,
                hardpoint_lightgroup: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_top_right: 24e3,
                engine_top_left: 24e3,
                engine_bottom_right: 24e3,
                engine_bottom_left: 24e3
            },
            Retro: {
                retro_top_right: 5e4,
                retro_top_left: 5e4,
                retro_bottom_right: 5e4,
                retro_bottom_left: 5e4
            },
            Vtol: {
                thruster_vtol_front_left_01: 5e4,
                thruster_vtol_front_left_02: 5e4,
                thruster_vtol_front_right_01: 5e4,
                thruster_vtol_front_right_02: 5e4,
                thruster_vtol_rear_right_01: 5e4,
                thruster_vtol_rear_right_02: 5e4,
                thruster_vtol_rear_left_01: 5e4,
                thruster_vtol_rear_left_02: 5e4
            },
            Maneuvering: {
                thruster_bottom_front_right: 5e4,
                thruster_top_front_right: 5e4,
                thruster_top_front_left: 5e4,
                thruster_bottom_front_left: 5e4,
                thruster_center_front_left: 5e4,
                thruster_center_front_right: 5e4,
                thruster_center_back_right: 5e4,
                thruster_center_back_left: 5e4,
                thruster_top_back_right: 5e4,
                thruster_top_back_left: 5e4,
                thruster_bottom_back_right: 5e4,
                thruster_bottom_back_left: 5e4
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 30,
        Yaw: 30,
        Roll: 60,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2228e4,
            Retro: 1116e4,
            Vtol: 488e4,
            Maneuvering: 1326e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 5.2,
            Retro: 2.6,
            Strafe: 2.6,
            Up: 3.1,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 205
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.5,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.5,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 66e6,
        FuelIntakeRate: 100,
        QuantumFuelCapacity: 4.0999999999999995e6,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 5,
            Vtol: 10,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2785,
            Retro: 1395,
            Vtol: 610,
            Maneuvering: 1657.5
        },
        IntakeToMainFuelRatio: 3.59,
        TimeForIntakesToFillTank: 66e4
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 23311,
            SCMActive: 26988,
            NAV: 38871
        },
        Infrared: {
            Start: 24037
        },
        CrossSection: {
            Front: 4903,
            Side: 16484,
            Top: 37558
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 8
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 56100,
        PilotBurstDPS: 4910,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 49381
    },
    Insurance: {
        StandardClaimTime: 17.1,
        ExpeditedClaimTime: 5.7,
        ExpeditedCost: 9531
    },
    Buy: {
        "New Deal, Lorville": 8043840
    }
}, {
    ClassName: "RSI_Lynx",
    Name: "RSI Lynx",
    Description: "RSI designed the Lynx Rover to be a vehicle capable of exploring a wide variety of terrains while still delivering a top-rated and finely tuned driving experience.",
    Career: "Ground",
    Role: "Transporter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .25,
        PersonalInventory: 2.46
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 11963.7,
    ComponentsMass: 399,
    Dimensions: {
        Length: 7.75,
        Width: 5.7,
        Height: 3.15
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .96,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 11e3
            },
            Parts: {
                wheel1: 1500,
                wheel1_mudguard: 150,
                wheel2: 1500,
                wheel2_mudguard: 150,
                wheel3: 1500,
                wheel3_mudguard: 150,
                wheel4: 1500,
                wheel4_mudguard: 150,
                wheel5: 1500,
                wheel5_mudguard: 150,
                wheel6: 1500,
                wheel6_mudguard: 150
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1684,
            SCMActive: 2133,
            NAV: 0
        },
        Infrared: {
            Start: 1205
        },
        CrossSection: {
            Front: 499,
            Side: 1145,
            Top: 1806
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 608,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.7,
        ExpeditedClaimTime: .9,
        ExpeditedCost: 1080
    },
    "New Vehicle": "RSI Lynx",
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 136080
    }
}, {
    ClassName: "RSI_Mantis",
    Name: "RSI Mantis",
    Description: "Stop ships dead in their tracks with RSI’s premier Quantum Enforcement ship. The Mantis features a tailor-made Quantum Enforcement Device from Wei-Tek, capable of ripping ships out of QT with its Quantum Snare and preventing hasty escapes with its Quantum Dampener.",
    Career: "Combat",
    Role: "Interdiction",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: .71
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 228123,
    ComponentsMass: 2588,
    Dimensions: {
        Length: 30,
        Width: 17,
        Height: 8
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: .95,
            Distortion: .95
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body_main: 2626
            },
            Parts: {
                nose_wingmount_left: 650,
                bottom_hull: 2600,
                nose_wingmount_right: 150,
                rear_frame_interdiction: 200,
                tail: 2500,
                top_cover_mid: 50,
                interdiction_top_cover_right: 50,
                interdiction_top_cover_left: 50,
                interdiction_bottom_cover_left: 50,
                interdiction_bottom_cover_right: 50,
                wing_left: 1800,
                tail_wing_left: 4e3,
                engines_base_left: 2800,
                engine_left: 2800,
                wing_right: 1800,
                tail_wing_right: 4e3,
                engines_base_right: 2800,
                engine_right: 2800
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_left: 7500,
                thruster_main_right: 7500
            },
            Retro: {
                thruster_retro_left: 6950,
                thruster_retro_right: 6950
            },
            Maneuvering: {
                thruster_mav_left_front_top: 6500,
                thruster_mav_right_front_top: 6500,
                thruster_mav_left_rear_top: 6500,
                thruster_mav_left_rear_bot: 6500,
                thruster_mav_left_front_bot: 6500,
                thruster_mav_right_rear_top: 6500,
                thruster_mav_right_rear_bot: 6500,
                thruster_mav_right_front_bot: 6500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 236,
        MaxSpeed: 1393,
        Pitch: 50,
        Yaw: 42,
        Roll: 160,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3358e4,
            Retro: 794e4,
            Vtol: 0,
            Maneuvering: 2032e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 15,
            Retro: 3.5,
            Strafe: 4.5,
            Up: 6,
            Down: 3.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 605,
                BoostSpeedBackward: 257
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .4,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.67,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .4,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.8,
            Y_AccelMultiplicator: 1.8,
            Z_AccelMultiplicator: 1.8
        }
    },
    FuelManagement: {
        FuelCapacity: 63225e3,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 4197.5,
            Retro: 992.5,
            Vtol: 0,
            Maneuvering: 2540
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9890,
            SCMActive: 14414,
            NAV: 17423
        },
        Infrared: {
            Start: 7375
        },
        CrossSection: {
            Front: 3126,
            Side: 6773,
            Top: 12157
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 923,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 9558
    },
    Insurance: {
        StandardClaimTime: 6.48,
        ExpeditedClaimTime: 2.16,
        ExpeditedCost: 3374
    },
    Buy: {
        "New Deal, Lorville": 3402e3
    }
}, {
    ClassName: "RSI_Polaris",
    Name: "RSI Polaris",
    Description: "The Polaris is a nimble corvette-class capital ship that packs a powerful punch with a full armament of turrets and torpedoes. Intended for use as both a naval patrol ship and to serve as the flagship of militia operations, Polaris has the capacity to perform search and rescue operations, light strike missions and general security patrols. The Polaris includes the facilities to repair, rearm and refuel a single fighter, light bomber or support ship.",
    Career: "Militia / Patrol",
    Role: "Capital Ship",
    Size: 6,
    Cargo: {
        CargoGrid: 576,
        CargoContainers: 0,
        ExternalStorage: 25.6,
        PersonalInventory: 432
    },
    Crew: 12,
    WeaponCrew: 9,
    OperationsCrew: 0,
    Mass: 11e6,
    ComponentsMass: 89257,
    Dimensions: {
        Length: 166,
        Width: 82,
        Height: 46
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .8,
            Infrared: .8,
            CrossSection: .8
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                M_Body: 918e3
            },
            Parts: {
                Mesh_DET_Rear_Aileron_Tip_Top_Left: 1e3,
                Mesh_DET_Rear_Aileron_Fin_Top_Left: 500,
                Mesh_DET_Rear_Aileron_Tip_Bot_Left: 1e3,
                Mesh_DET_Rear_Aileron_Fin_Bot_Left: 500,
                Mesh_DET_Rear_Aileron_Tip_Top_Right: 1e3,
                Mesh_DET_Rear_Aileron_Fin_Top_Right: 500,
                Mesh_DET_Rear_Aileron_Tip_Bot_Right: 1e3,
                Mesh_DET_Rear_Aileron_Fin_Bot_Right: 500,
                M_DET_Body_Underside_Plate: 1e4,
                M_DET_Body_AirbrakePanel_Top_Right: 1e3,
                M_DET_Body_AirbrakePanel_Top_Left: 1e3,
                M_DET_Body_AirbrakePanel_Bot_Right: 1e4,
                M_DET_Body_AirbrakePanel_Bot_Left: 1e4,
                Mesh_DET_Airbrake_Tip_Bot_Left: 1e3,
                Mesh_DET_Airbrake_Tip_Bot_Right: 1e3,
                Mesh_DET_Airbrake_Tip_Top_Left: 1e3,
                Mesh_DET_Airbrake_Tip_Top_Right: 1e3,
                Body_LG_Front_Hatch_rear_L_left: 200,
                Body_LG_Front_Hatch_rear_L_right: 200,
                Body_LG_Front_Hatch_rear_R_left: 200,
                M_DET_Turret_Hatch_Bottom_Left: 5e3,
                M_DET_Turret_Hatch_Bottom_Right: 5e3,
                M_DET_Turret_Hatch_Top_Left: 5e3,
                M_DET_Turret_Hatch_Top_Right: 5e3,
                M_DET_Turret_Hatch_Slide_Bottom_Left: 2500,
                M_DET_Turret_Hatch_Slide_Bottom_Right: 2500,
                M_DET_Turret_Hatch_Slide_Top_Left: 3e3,
                M_DET_Turret_Hatch_Slide_Top_Right: 3e3,
                M_DET_Body_Side_Panel_Left: 1e3,
                M_DET_Body_Side_Panel_Right: 1e3,
                M_Neck_Rear: 72e4,
                M_DET_Neck_Rear_Vent_Right: 2500,
                M_DET_Neck_Rear_Vent_Left: 2500,
                M_Neck_Front: 44e4,
                M_DET_Nose_Top_Cover_Panel: 2500,
                M_DET_Nose_Side_Detail_Right: 5e3,
                M_DET_Nose_Side_Detail_Left: 5e3,
                M_DET_Neck_Front_Topside_Cover_Right: 1e3,
                M_DET_Neck_Front_Topside_Cover_Left: 1e3,
                M_DET_Neck_Front_Side_Plate_Right: 1e3,
                M_DET_Neck_Front_Side_Plate_Left: 1e3,
                M_DET_Neck_Front_Hatch_Static: 1e3,
                M_DET_EscPod_04_Right: 500,
                M_DET_EscPod_04_Left: 500,
                M_DET_EscPod_03_Right: 500,
                M_DET_EscPod_03_Left: 500,
                M_DET_EscPod_02_Right: 500,
                M_DET_EscPod_02_Left: 500,
                M_DET_EscPod_01_Right: 500,
                M_DET_EscPod_01_Left: 500,
                M_DET_Neck_Front_Aileron_Tip_Right: 1e3,
                M_DET_Neck_Front_Aileron_Rotator_Right: 500,
                M_DET_Neck_Front_Aileron_Tip_Left: 1e3,
                M_DET_Neck_Front_Aileron_Rotator_Left: 500,
                M_Nose: 22e4,
                M_Rear: 12e5,
                M_DET_Rear_Mesh_Thruster_Base_Top_Right: 45e3,
                M_DET_Rear_Mesh_Thruster_Cap_Top_Right: 1e4,
                M_DET_Rear_Mesh_Thruster_Fin_Tip_Top_Right: 1e3,
                M_DET_Rear_Mesh_Thruster_Base_Top_Left: 45e3,
                Rear_DET_Mesh_Thruster_Cap_Top_Left: 1e4,
                M_DET_Rear_Mesh_Thruster_Fin_Tip_Top_Left: 1e3,
                M_DET_Rear_Mesh_Thruster_Base_Bot_Right: 45e3,
                M_DET_Rear_Mesh_Thruster_Cap_Bot_Right: 1e4,
                M_DET_Rear_Mesh_Thruster_Fin_Tip_Bot_Right: 1e3,
                M_DET_Rear_Mesh_Thruster_Base_Bot_Left: 45e3,
                M_DET_Rear_Mesh_Thruster_Cap_Bot_Left: 1e4,
                M_DET_Rear_Mesh_Thruster_Fin_Tip_Bot_Left: 1e3,
                M_DET_Mesh_Thruster_Housing_Middle_Left: 6e4,
                M_DET_Mesh_Thruster_Housing_Middle_Right: 6e4
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_right_top: 1e4,
                thruster_main_left_top: 1e4,
                thruster_main_right_bottom: 1e4,
                thruster_main_left_bottom: 1e4,
                thruster_main_left_centre: 25e3,
                thruster_main_right_centre: 25e3
            },
            Retro: {
                retro_top_right: 25e3,
                retro_top_left: 25e3,
                retro_bottom_right: 15e3,
                retro_bottom_left: 15e3,
                thruster_rear_retro_right_top: 35e3,
                thruster_retro_rear_left_top: 35e3,
                thruster_retro_rear_right_bottom: 35e3,
                thruster_retro_rear_left_bottom: 35e3,
                thruster_retro_rear_middle_left: 25e3,
                thruster_retro_rear_middle_right: 25e3
            },
            Vtol: {
                vtol_left: 3e3,
                vtol_right: 3e3,
                vtol_front: 3e3
            },
            Maneuvering: {
                mav_mid_left_top: 3e3,
                mav_mid_left_side: 3e3,
                mav_mid_left_bottom: 3e3,
                mav_mid_right_top: 3e3,
                mav_mid_right_side: 3e3,
                mav_mid_right_bottom: 3e3,
                mav_front_right_top: 3e3,
                mav_front_right_side: 3e3,
                mav_front_right_bottom: 3e3,
                mav_front_left_top: 3e3,
                mav_front_left_side: 3e3,
                mav_front_left_bottom: 3e3,
                mav_rear_left_top: 3e3,
                mav_rear_left_side: 3e3,
                mav_rear_left_bottom: 3e3,
                mav_rear_right_top: 3e3,
                mav_rear_right_side: 3e3,
                mav_rear_right_bottom: 3e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 145,
        MaxSpeed: 940,
        Pitch: 15,
        Yaw: 15,
        Roll: 25,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 328455840,
            Retro: 164737754,
            Vtol: 27e6,
            Maneuvering: 336106080
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3,
            Retro: 1.5,
            Strafe: 1.5,
            Up: 2.2,
            Down: 1.7
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 7,
            ScmMode: {
                BoostSpeedForward: 250,
                BoostSpeedBackward: 155
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: 1.6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.2,
                    Y: 1.6,
                    Z: 1.4
                },
                NegativeAxis: {
                    X: 1.2,
                    Y: 1.2,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.3,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.3,
                Yaw: 1.2,
                Roll: 1.4
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1.3,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 11e8,
        FuelIntakeRate: 15,
        QuantumFuelCapacity: 126e5,
        FuelBurnRatePer10KNewton: {
            Main: 7.5,
            Retro: 12.5,
            Vtol: 3.75,
            Maneuvering: 22.5
        },
        FuelUsagePerSecond: {
            Main: 41056.98,
            Retro: 20592.219,
            Vtol: 3375,
            Maneuvering: 42013.26
        },
        IntakeToMainFuelRatio: .04,
        TimeForIntakesToFillTank: 7333333333e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 14592,
            SCMActive: 18673,
            NAV: 26953
        },
        Infrared: {
            Start: 25391
        },
        CrossSection: {
            Front: 0,
            Side: 0,
            Top: 0
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 10
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 908e3,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 19438,
        TotalMissilesDmg: 21068967
    },
    Insurance: {
        StandardClaimTime: 75.83,
        ExpeditedClaimTime: 18.96,
        ExpeditedCost: 44030
    },
    "New Ship": "RSI Polaris",
    Dimensions2: {
        Length: 166,
        Width: 82,
        Height: 35
    }
}, {
    ClassName: "RSI_Scorpius",
    Name: "RSI Scorpius",
    Description: "With an adaptable bi-wing configuration and revolutionary rail-mounted remote turret, the Scorpius offers unprecedented fire coverage, allowing for both defensive and assault-minded applications.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 3,
        PersonalInventory: 1.29
    },
    Crew: 2,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 97561.54,
    ComponentsMass: 6416,
    Dimensions: {
        Length: 24,
        Width: 32,
        Height: 13
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6500
            },
            Parts: {
                Tail: 6500,
                Wing_Mechanism_Top_Right: 3500,
                Wing_Rotator_Top_Right: 2200,
                Wing_Rotator_Top_Tip_Right: 1500,
                Wing_Retractor_Top_Right: 300,
                Wing_Mechanism_Bottom_Right: 3500,
                Wing_Retractor_Bottom_Right: 300,
                Wing_Rotator_Bottom_Right: 2200,
                Wing_Rotator_Bottom_Tip_Right: 1500,
                Wing_Mechanism_Bottom_Left: 3500,
                Wing_Retractor_Bottom_Left: 300,
                Wing_Rotator_Bottom_Left: 2200,
                Wing_Rotator_Bottom_Tip_Left: 1500,
                Wing_Mechanism_Top_Left: 3500,
                Wing_Retractor_Top_Left: 300,
                Wing_Rotator_Top_Left: 2200,
                Wing_Rotator_Top_Tip_Left: 1500,
                debris_turret: 500,
                Canopy_Front: 80,
                Canopy_Rear: 80
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_top_right: 8e3,
                thruster_main_bottom_right: 8e3,
                thruster_main_bottom_left: 8e3,
                thruster_main_top_left: 8e3
            },
            Retro: {
                thruster_retro_right: 7e3,
                thruster_retro_left: 7e3
            },
            Maneuvering: {
                thruster_rear_top_right: 5500,
                thruster_rear_bottom_right: 5500,
                thruster_rear_bottom_left: 5500,
                thruster_rear_top_left: 5500,
                thruster_front_top_right: 5500,
                thruster_front_top_left: 5500,
                thruster_front_bottom_right: 5500,
                thruster_front_bottom_left: 5500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1375,
        Pitch: 38,
        Yaw: 35,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 14204e3,
            Retro: 328e4,
            Vtol: 0,
            Maneuvering: 984e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.6,
            Retro: 3.1,
            Strafe: 4.7,
            Up: 4.7,
            Down: 2.6
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 590,
                BoostSpeedBackward: 220
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .6,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.1,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1775.5,
            Retro: 410,
            Vtol: 0,
            Maneuvering: 1230
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 9252,
            SCMActive: 10892,
            NAV: 16785
        },
        Infrared: {
            Start: 8966
        },
        CrossSection: {
            Front: 2990,
            Side: 6645,
            Top: 13591
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 2182,
        TurretsBurstDPS: 2182,
        TotalMissilesDmg: 26724
    },
    Insurance: {
        StandardClaimTime: 7.59375,
        ExpeditedClaimTime: 2.53125,
        ExpeditedCost: 3800
    },
    Dimensions2: {
        Length: 30,
        Width: 13.2,
        Height: 6.1
    },
    Buy: {
        "New Deal, Lorville": 5443200
    }
}, {
    ClassName: "RSI_Scorpius_Antares",
    Name: "RSI Scorpius Antares",
    Description: "RSI has updated the signature Scorpius adaptable bi-wing configuration and added a bespoke Quantum Dampener and EMP Device exclusively designed by their in-house team to create the powerful Scorpius Antares. Built with stopping power in mind, the Scorpius Antares is engineered to bring any chase to a quick finish.",
    Career: "Combat",
    Role: "Heavy Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 3,
        PersonalInventory: 1.29
    },
    Crew: 2,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 97561.54,
    ComponentsMass: 9566,
    Dimensions: {
        Length: 24,
        Width: 32,
        Height: 13
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 6500
            },
            Parts: {
                Tail: 6500,
                Wing_Mechanism_Top_Right: 3500,
                Wing_Rotator_Top_Right: 2200,
                Wing_Rotator_Top_Tip_Right: 1500,
                Wing_Retractor_Top_Right: 300,
                Wing_Mechanism_Bottom_Right: 3500,
                Wing_Retractor_Bottom_Right: 300,
                Wing_Rotator_Bottom_Right: 2200,
                Wing_Rotator_Bottom_Tip_Right: 1500,
                Wing_Mechanism_Bottom_Left: 3500,
                Wing_Retractor_Bottom_Left: 300,
                Wing_Rotator_Bottom_Left: 2200,
                Wing_Rotator_Bottom_Tip_Left: 1500,
                Wing_Mechanism_Top_Left: 3500,
                Wing_Retractor_Top_Left: 300,
                Wing_Rotator_Top_Left: 2200,
                Wing_Rotator_Top_Tip_Left: 1500,
                debris_turret: 500,
                Canopy_Front: 80,
                Canopy_Rear: 80
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_top_right: 8e3,
                thruster_main_bottom_right: 8e3,
                thruster_main_bottom_left: 8e3,
                thruster_main_top_left: 8e3
            },
            Retro: {
                thruster_retro_right: 7e3,
                thruster_retro_left: 7e3
            },
            Maneuvering: {
                thruster_rear_top_right: 5500,
                thruster_rear_bottom_right: 5500,
                thruster_rear_bottom_left: 5500,
                thruster_rear_top_left: 5500,
                thruster_front_top_right: 5500,
                thruster_front_top_left: 5500,
                thruster_front_bottom_right: 5500,
                thruster_front_bottom_left: 5500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1375,
        Pitch: 38,
        Yaw: 35,
        Roll: 140,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 14204e3,
            Retro: 328e4,
            Vtol: 0,
            Maneuvering: 984e4
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.2,
            Retro: 3,
            Strafe: 4.5,
            Up: 4.5,
            Down: 2.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 590,
                BoostSpeedBackward: 220
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.65,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.4
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: .75,
            CapacitorRegenDelay: .6,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.1,
            Y_AccelMultiplicator: 1.2,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 135e5,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 1775.5,
            Retro: 410,
            Vtol: 0,
            Maneuvering: 1230
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 11640,
            SCMActive: 17320,
            NAV: 19173
        },
        Infrared: {
            Start: 8281
        },
        CrossSection: {
            Front: 2991,
            Side: 6647,
            Top: 13597
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 2182,
        TurretsBurstDPS: 0,
        TotalEMPDmg: 3300,
        TotalMissilesDmg: 26724
    },
    Insurance: {
        StandardClaimTime: 7.59375,
        ExpeditedClaimTime: 2.53125,
        ExpeditedCost: 3800
    },
    Dimensions2: {
        Length: 30,
        Width: 13.2,
        Height: 6.1
    },
    Buy: {
        "New Deal, Lorville": 5528517
    }
}, {
    ClassName: "RSI_Ursa_Medivac",
    Name: "RSI Ursa Medivac",
    Description: "Even in the most remote of planetside destinations, there are people who could use a helping hand. Designed by RSI to cross even the most rugged terrain, the Ursa Medivac features a Tier 3 Medical Bed ideal for offering aid wherever its needed most.",
    Career: "Ground",
    Role: "Support",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.46
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 14258.7,
    ComponentsMass: 399,
    Dimensions: {
        Length: 7.75,
        Width: 5.7,
        Height: 3.15
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 14500
            },
            Parts: {
                wheel1: 1500,
                wheel1_center: 150,
                wheel1_mudguard: 150,
                wheel2: 1500,
                wheel2_center: 150,
                wheel2_mudguard: 150,
                wheel3: 1500,
                wheel3_mudguard: 150,
                wheel4: 1500,
                wheel4_mudguard: 150,
                wheel5: 1500,
                wheel5_mudguard: 150,
                wheel6: 1500,
                wheel6_mudguard: 150
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 100,
            SCMActive: 549,
            NAV: 0
        },
        Infrared: {
            Start: 1877
        },
        CrossSection: {
            Front: 1787,
            Side: 1520,
            Top: 593
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.53,
        ExpeditedClaimTime: .84,
        ExpeditedCost: 1015
    },
    "New Vehicle": "RSI Ursa Medivac",
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 137200
    }
}, {
    ClassName: "RSI_Ursa_Rover",
    Name: "RSI Ursa",
    Description: "Built by RSI specifically for the planetside explorer, the Ursa Rover offers civilians military-grade all-terrain capabilities and stands as the rugged standard in ground-based scouting, mapping and discovery applications.",
    Career: "Ground",
    Role: "Ground",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 2.46
    },
    Crew: 2,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 13563.7,
    ComponentsMass: 399,
    Dimensions: {
        Length: 7.75,
        Width: 5.7,
        Height: 3.15
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: 1,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Body: 13e3
            },
            Parts: {
                wheel1: 1500,
                wheel1_center: 150,
                wheel1_mudguard: 150,
                wheel2: 1500,
                wheel2_center: 150,
                wheel2_mudguard: 150,
                wheel3: 1500,
                wheel3_mudguard: 150,
                wheel4: 1500,
                wheel4_mudguard: 150,
                wheel5: 1500,
                wheel5_mudguard: 150,
                wheel6: 1500,
                wheel6_mudguard: 150
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 100,
            SCMActive: 549,
            NAV: 0
        },
        Infrared: {
            Start: 1877
        },
        CrossSection: {
            Front: 1787,
            Side: 1520,
            Top: 593
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.53,
        ExpeditedClaimTime: .84,
        ExpeditedCost: 1015
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 120186
    }
}, {
    ClassName: "RSI_Zeus_CL",
    Name: "RSI Zeus CL",
    Description: "Ready to ferry a whole new generation of travelers across the universe, Roberts Space Industries is proud to introduce a starship eight centuries in the making - the all-new Zeus Mk II spacecraft. Paying homage to the classic design that launched Humanity to the stars in 2140, the Zeus Mk II has been updated to exceed modern standards while retaining the heart of this beloved spacefaring icon.  With a focus on commerce, the Zeus Mk II CL edition features additional cargo space and a tractor beam ideal for handling large volumes of cargo.",
    Career: "Transporter",
    Role: "Medium Freight",
    Size: 3,
    Cargo: {
        CargoGrid: 128,
        CargoContainers: 0,
        ExternalStorage: 1.95,
        PersonalInventory: 3.68
    },
    Crew: 3,
    WeaponCrew: 1,
    OperationsCrew: 1,
    Mass: 295e3,
    ComponentsMass: 9362.6,
    Dimensions: {
        Length: 45.7,
        Width: 34.3,
        Height: 7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 15e3
            },
            Parts: {
                nose: 9e3,
                bar_left_debris: 10,
                wing_top_left_debris: 30,
                wing_top_right_debris: 30,
                wing_bottom_left_debris: 20,
                wing_bottom_right_debris: 20,
                bar_right_debris: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_bottom_left: 14350,
                thruster_main_bottom_right: 14350,
                thruster_main_top_left: 14350,
                thruster_main_top_right: 14350
            },
            Retro: {
                thruster_retro_left: 15250,
                thruster_retro_right: 15250
            },
            Vtol: {
                thruster_rear_right_vtol: 16500,
                thruster_rear_left_vtol: 16500,
                thruster_front_vtol: 16500
            },
            Maneuvering: {
                thruster_rear_top_left_cl: 14350,
                thruster_rear_top_right_cl: 14350,
                thruster_rear_side_left: 14350,
                thruster_rear_side_right: 14350,
                thruster_front_bottom_left: 14350,
                thruster_front_bottom_right: 14350,
                thruster_front_side_left: 14350,
                thruster_front_side_right: 14350,
                thruster_front_top_left: 14350,
                thruster_front_top_right: 14350,
                thruster_rear_bottom_left: 14350,
                thruster_rear_bottom_right: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1e3,
        Pitch: 31,
        Yaw: 31,
        Roll: 105,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 234e5,
            Retro: 78e5,
            Vtol: 54e5,
            Maneuvering: 304e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 7.9,
            Retro: 2.5,
            Strafe: 3.5,
            Up: 2.7,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 210
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .7,
            RampDown: .5,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.25,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 665e5,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 18e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 3.75,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 2925,
            Retro: 975,
            Vtol: 675,
            Maneuvering: 3800
        },
        IntakeToMainFuelRatio: 1.03,
        TimeForIntakesToFillTank: 221666667e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 12252,
            SCMActive: 16051,
            NAV: 27732
        },
        Infrared: {
            Start: 14086
        },
        CrossSection: {
            Front: 2e3,
            Side: 8e3,
            Top: 1e4
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 15300,
        PilotBurstDPS: 1639,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 19204
    },
    Insurance: {
        StandardClaimTime: 10.67,
        ExpeditedClaimTime: 2.67,
        ExpeditedCost: 4900
    },
    "New Ship": "RSI Zeus CL",
    Dimensions2: {
        Length: 45.7,
        Width: 26.3,
        Height: 7
    }
}, {
    ClassName: "RSI_Zeus_ES",
    Name: "RSI Zeus ES",
    Description: "Ready to ferry a whole new generation of travelers across the universe, Roberts Space Industries is proud to introduce a starship eight centuries in the making - the all-new Zeus Mk II spacecraft. Paying homage to the classic design that launched Humanity to the stars in 2140, the Zeus Mk II has been updated to exceed modern standards while retaining the heart of this beloved spacefaring icon.  With a focus on exploration, the Zeus Mk II ES edition features a robust radar package for finding new discoveries, and enhanced weaponry and shielding to help bring them back home.",
    Career: "Exploration",
    Role: "Expedition",
    Size: 3,
    Cargo: {
        CargoGrid: 32,
        CargoContainers: 0,
        ExternalStorage: 1.95,
        PersonalInventory: 3.81
    },
    Crew: 3,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 295e3,
    ComponentsMass: 8224.6,
    Dimensions: {
        Length: 45.7,
        Width: 34.3,
        Height: 7
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .47,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.1,
            Infrared: 1.1,
            CrossSection: 1.1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 15e3
            },
            Parts: {
                nose: 9e3,
                bar_left_debris: 10,
                wing_top_left_debris: 30,
                wing_top_right_debris: 30,
                wing_bottom_left_debris: 20,
                wing_bottom_right_debris: 20,
                bar_right_debris: 10
            }
        },
        ThrustersHealthPoints: {
            Main: {
                thruster_main_bottom_left: 14350,
                thruster_main_bottom_right: 14350,
                thruster_main_top_left: 14350,
                thruster_main_top_right: 14350
            },
            Retro: {
                thruster_retro_left: 15250,
                thruster_retro_right: 15250
            },
            Vtol: {
                thruster_rear_right_vtol: 16500,
                thruster_rear_left_vtol: 16500,
                thruster_front_vtol: 16500
            },
            Maneuvering: {
                thruster_rear_top_left: 14350,
                thruster_rear_top_right: 14350,
                thruster_rear_side_left: 14350,
                thruster_rear_side_right: 14350,
                thruster_front_bottom_left: 14350,
                thruster_front_bottom_right: 14350,
                thruster_front_side_left: 14350,
                thruster_front_side_right: 14350,
                thruster_front_top_left: 14350,
                thruster_front_top_right: 14350,
                thruster_rear_bottom_left: 14350,
                thruster_rear_bottom_right: 14350
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 200,
        MaxSpeed: 1050,
        Pitch: 32.5,
        Yaw: 32.5,
        Roll: 110,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 2506e4,
            Retro: 78e5,
            Vtol: 36e5,
            Maneuvering: 324e5
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 8.3,
            Retro: 2.5,
            Strafe: 3.5,
            Up: 3,
            Down: 3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 6,
            ScmMode: {
                BoostSpeedForward: 400,
                BoostSpeedBackward: 210
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .7,
            RampDown: .5,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.3,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.25,
                    Z: 1.3
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .9,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 931e5,
        FuelIntakeRate: 30,
        QuantumFuelCapacity: 26e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 3.75,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 3132.5,
            Retro: 975,
            Vtol: 450,
            Maneuvering: 4050
        },
        IntakeToMainFuelRatio: .96,
        TimeForIntakesToFillTank: 310333333e-2
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 16757,
            SCMActive: 22118,
            NAV: 33805
        },
        Infrared: {
            Start: 15534
        },
        CrossSection: {
            Front: 2200,
            Side: 8800,
            Top: 11e3
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 17720,
        PilotBurstDPS: 1639,
        TurretsBurstDPS: 1091,
        TotalMissilesDmg: 19204
    },
    Insurance: {
        StandardClaimTime: 8.67,
        ExpeditedClaimTime: 2.17,
        ExpeditedCost: 3710
    },
    "New Ship": "RSI Zeus ES",
    Dimensions2: {
        Length: 45.7,
        Width: 26.3,
        Height: 7
    }
}, {
    ClassName: "TMBL_Cyclone",
    Name: "Tumbril Cyclone",
    Description: "With a potent combination of speed, maneuverability, and rugged durability, the Cyclone is a perfect choice for local deliveries and transport between planetside homesteads and outposts.",
    Career: "Ground",
    Role: "Transporter",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 2.33
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 169,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1517,
            SCMActive: 1966,
            NAV: 0
        },
        Infrared: {
            Start: 1155
        },
        CrossSection: {
            Front: 843,
            Side: 1647,
            Top: 2011
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.03,
        ExpeditedClaimTime: .68,
        ExpeditedCost: 810
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 110170
    }
}, {
    ClassName: "TMBL_Cyclone_AA",
    Name: "Tumbril Cyclone AA",
    Description: "A battlefield equalizer, the Cyclone AA comes equipped with a surface-to-air missile and countermeasure package to provide cover for ground troops against airborne targets.",
    Career: "Ground",
    Role: "Support",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 1.72
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 791,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 3055,
            SCMActive: 4537,
            NAV: 0
        },
        Infrared: {
            Start: 1855
        },
        CrossSection: {
            Front: 726,
            Side: 1475,
            Top: 1999
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalEMPDmg: 1e3,
        TotalMissilesDmg: 4801
    },
    Insurance: {
        StandardClaimTime: 2.03,
        ExpeditedClaimTime: .68,
        ExpeditedCost: 1345
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 160247
    }
}, {
    ClassName: "TMBL_Cyclone_MT",
    Name: "Tumbril Cyclone MT",
    Description: "Following the success of the initial release of the Cyclone, Tumbril has taken your feedback and expanded their popular line of tactical vehicles with the all new Cyclone MT. Outfitted with a combination gun and missile turret, this module offers increased combat options in the field.",
    Career: "Ground",
    Role: "Combat",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 1.72
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 1168,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .9,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1834,
            SCMActive: 2291,
            NAV: 0
        },
        Infrared: {
            Start: 1559
        },
        CrossSection: {
            Front: 843,
            Side: 1647,
            Top: 2011
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 202,
        TotalMissilesDmg: 9602
    },
    Insurance: {
        StandardClaimTime: 2.03,
        ExpeditedClaimTime: .68,
        ExpeditedCost: 1605
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 150232
    }
}, {
    ClassName: "TMBL_Cyclone_RC",
    Name: "Tumbril Cyclone RC",
    Description: "For those who like to push the limits of speed, the Cyclone RC features a modified intake system to allow for controlled bursts of speed as well as tools to customize handling.",
    Career: "Ground",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 1.72
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 169,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1517,
            SCMActive: 1966,
            NAV: 0
        },
        Infrared: {
            Start: 1155
        },
        CrossSection: {
            Front: 862,
            Side: 1592,
            Top: 2045
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.84,
        ExpeditedClaimTime: .95,
        ExpeditedCost: 1135
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 130201
    }
}, {
    ClassName: "TMBL_Cyclone_RN",
    Name: "Tumbril Cyclone RN",
    Description: "Stay mobile and aware with the Cyclone RN. This light reconnaissance vehicle is the perfect solution for scouting runs, providing fast and detailed scans of terrain as well as beacon placement.",
    Career: "Ground",
    Role: "Exploration",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 2.15
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 169,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1517,
            SCMActive: 1966,
            NAV: 0
        },
        Infrared: {
            Start: 1155
        },
        CrossSection: {
            Front: 1032,
            Side: 1485,
            Top: 1983
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.03,
        ExpeditedClaimTime: .68,
        ExpeditedCost: 810
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 130201
    }
}, {
    ClassName: "TMBL_Cyclone_TR",
    Name: "Tumbril Cyclone TR",
    Description: "Designed for militia and security use, the Cyclone TR module features upgraded armor and a single Human-operated turret capable of mounting a Size 1 weapon and a responsive 360° field of fire.",
    Career: "Ground",
    Role: "Combat",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.8,
        PersonalInventory: 1.72
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 3564,
    ComponentsMass: 284,
    Dimensions: {
        Length: 6,
        Width: 4,
        Height: 2.5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .9,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2e3
            },
            Parts: {
                rear_armor_plating_left: 50,
                mud_flap_bl: 25,
                mud_flap_fl: 25,
                mud_flap_fr: 25,
                rear_armor_plating_right: 50,
                mud_flap_br: 25,
                hood: 1,
                wheelBL: 800,
                wheelBR: 800,
                wheelFL: 800,
                wheelFR: 800
            }
        }
    },
    SteerCharacteristics: {
        V0SteerSpeed: 200,
        VMaxSteerSpeed: 15,
        V0SteerMaxAngle: 50,
        SteerSubtractV: 40,
        SteerSubtractAngle: 0,
        SteerRelaxationSpeed: 175
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1536,
            SCMActive: 1992,
            NAV: 0
        },
        Infrared: {
            Start: 1459
        },
        CrossSection: {
            Front: 956,
            Side: 1802,
            Top: 2041
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 202,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 2.03,
        ExpeditedClaimTime: .68,
        ExpeditedCost: 810
    },
    DriveCharacteristics: {
        Acceleration: 0,
        Decceleration: 0,
        TopSpeed: 0,
        ReverseSpeed: 0
    },
    Buy: {
        "New Deal, Lorville": 130201
    }
}, {
    ClassName: "TMBL_Nova",
    Name: "Tumbril Nova",
    Description: "Tumbril's new Nova is a classic battlefield warrior, reimagined for the modern age. This heavy tank offers a devastating combination of weaponry to eliminate threats on the ground and in the air.",
    Career: "Ground Combat",
    Role: "Heavy Tank",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 0,
        PersonalInventory: 3.17
    },
    Crew: 1,
    WeaponCrew: 1,
    OperationsCrew: 0,
    Mass: 74950,
    ComponentsMass: 4564,
    Dimensions: {
        Length: 16,
        Width: 7,
        Height: 5
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .9,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .6,
            Infrared: .7,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body_mesh: 4e4
            },
            Parts: {
                hardpoint_drive_sprocket_right: 800,
                hardpoint_wheel_small_right: 800,
                hardpoint_drive_sprocket_left: 800,
                hardpoint_wheel_small_left: 800,
                primary_turret_debris: 3e4,
                hardpoint_wheel_right_07: 800,
                hardpoint_wheel_right_06: 800,
                hardpoint_wheel_right_05: 800,
                hardpoint_wheel_right_04: 800,
                hardpoint_wheel_right_03: 800,
                hardpoint_wheel_right_02: 800,
                hardpoint_wheel_right_01: 800,
                hardpoint_wheel_left_07: 800,
                hardpoint_wheel_left_06: 800,
                hardpoint_wheel_left_05: 800,
                hardpoint_wheel_left_04: 800,
                hardpoint_wheel_left_03: 800,
                hardpoint_wheel_left_02: 800,
                hardpoint_wheel_left_01: 800,
                hardpoint_wheel_left_hidden_rear_09: 800,
                hardpoint_wheel_left_hidden_front_08: 800,
                hardpoint_wheel_right_hidden_front_08: 800,
                hardpoint_wheel_right_hidden_rear_09: 800
            }
        }
    },
    TrackWheeledCharacteristics: {
        EnginePower: 1750,
        EngineMinRPM: 500,
        EngineIdleRPM: 1e3,
        EngineMaxRPM: 1e4,
        MaxSpeed: 25
    },
    TrackSteerCharacteristics: {
        SteerSpeed: 150,
        SteerSpeedMin: 110,
        V0SteerMax: 40,
        KvSteerMax: 26,
        VMaxSteerMax: 20,
        VMaxSteerSpeed: 150,
        V0SteerSpeed: 110,
        V0SteerMaxAngle: 40,
        SteerSubtractAngle: 26,
        SteerSubtractV: 20,
        SteerRelaxationSpeed: 100
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 1228,
            SCMActive: 2051,
            NAV: 0
        },
        Infrared: {
            Start: 1912
        },
        CrossSection: {
            Front: 1478,
            Side: 1712,
            Top: 2810
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 1635,
        PilotBurstDPS: 6400,
        TurretsBurstDPS: 656,
        TotalMissilesDmg: 57088
    },
    Insurance: {
        StandardClaimTime: 12.38,
        ExpeditedClaimTime: 4.13,
        ExpeditedCost: 7398
    },
    Buy: {
        "New Deal, Lorville": 961482
    }
}, {
    ClassName: "TMBL_Storm",
    Name: "Tumbril Storm",
    Description: "Manufacturer: Tumbril Land SystemsFocus: Combat Originally introduced in 2606 during the Second Tevarin War, the Tumbril Storm single-operator mini-tank was built to blitz battlefields and take out enemy artillery. Reimagined from the ground up to be faster, stronger, and more impactful than ever, the latest Storm is a true force of nature, well-suited to the frenetic landscape of modern warfare.",
    Career: "Ground Combat",
    Role: "Light Tank",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .99
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 57270,
    ComponentsMass: 894,
    Dimensions: {
        Length: 10.5,
        Width: 7.5,
        Height: 3.6
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .9,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 27e3
            },
            Parts: {
                tread_cover_FL: 5e3,
                Component_Door_FL_Back: 500,
                Component_Door_FL_Front: 500,
                blast_plate_front_left: 200,
                radar_detail_front_left: 100,
                tread_cover_RL: 5e3,
                component_door_RL_front: 500,
                component_door_RL_back: 500,
                blast_plate_a_rear_left: 200,
                blast_plate_b_rear_left: 200,
                tread_cover_RR: 5e3,
                component_door_RR_front: 500,
                component_door_RR_back: 500,
                blast_shield_a_back_right: 200,
                blast_shield_b_rear_right: 200,
                tread_cover_FR: 5e3,
                blast_plate_front_right: 200,
                Component_Door_FR_Back: 500,
                Component_Door_FR_Front: 500,
                radar_detail_front_right: 100,
                component_door_rear_left: 500,
                component_door_rear_right: 500,
                hardpoint_wheel_front_right_00: 700,
                hardpoint_wheel_rear_right_hidden: 700,
                hardpoint_wheel_rear_right_014: 700,
                hardpoint_wheel_rear_left_014: 700,
                hardpoint_wheel_rear_right_013: 700,
                hardpoint_wheel_rear_left_013: 700,
                hardpoint_wheel_front_right_hidden: 700,
                hardpoint_wheel_front_left_hidden: 700,
                hardpoint_wheel_front_right_06: 700,
                hardpoint_wheel_front_left_06: 700,
                hardpoint_wheel_rear_right_12: 700,
                hardpoint_wheel_rear_right_11: 700,
                hardpoint_wheel_front_right_01: 700,
                hardpoint_wheel_rear_right_08: 700,
                hardpoint_wheel_rear_right_06: 700,
                hardpoint_wheel_rear_left_hidden: 700,
                hardpoint_wheel_front_right_04: 700,
                hardpoint_wheel_front_right_02: 700,
                hardpoint_wheel_rear_left_12: 700,
                hardpoint_wheel_front_left_00: 700,
                hardpoint_wheel_rear_left_11: 700,
                hardpoint_wheel_rear_left_08: 700,
                hardpoint_wheel_rear_left_06: 700,
                hardpoint_wheel_front_left_01: 700,
                hardpoint_wheel_front_left_04: 700,
                hardpoint_wheel_front_left_02: 700,
                hardpoint_wheel_front_left_gap1: 700,
                hardpoint_wheel_front_right_gap1: 700,
                hardpoint_wheel_front_left_gap2: 700,
                hardpoint_wheel_front_right_gap2: 700,
                hardpoint_wheel_front_left_center2: 700,
                hardpoint_wheel_front_right_center1: 700,
                hardpoint_wheel_front_right_center2: 700,
                hardpoint_wheel_front_left_center1: 700,
                hardpoint_wheel_front_bumper_left: 700,
                hardpoint_wheel_front_bumper_right: 700,
                hardpoint_wheel_rear_left_hidden2: 700,
                hardpoint_wheel_rear_right_hidden2: 700,
                blast_plate_body_right: 200,
                radar_detail_body_left: 100,
                radar_detail_body_right: 100,
                blast_plate_body_left: 200
            }
        }
    },
    TrackWheeledCharacteristics: {
        EnginePower: 4700,
        EngineMinRPM: 500,
        EngineIdleRPM: 1e3,
        EngineMaxRPM: 1e4,
        MaxSpeed: 30
    },
    TrackSteerCharacteristics: {
        SteerSpeed: 170,
        SteerSpeedMin: 220,
        V0SteerMax: 40,
        KvSteerMax: 26,
        VMaxSteerMax: 20,
        VMaxSteerSpeed: 170,
        V0SteerSpeed: 220,
        V0SteerMaxAngle: 40,
        SteerSubtractAngle: 26,
        SteerSubtractV: 20,
        SteerRelaxationSpeed: 170
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 543,
            SCMActive: 993,
            NAV: 0
        },
        Infrared: {
            Start: 1540
        },
        CrossSection: {
            Front: 1478,
            Side: 1712,
            Top: 2810
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 2042,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 5.33,
        ExpeditedClaimTime: 1.33,
        ExpeditedCost: 1730
    },
    "New Vehicle": "Tumbril Storm",
    Buy: {
        "New Deal, Lorville": 453600
    }
}, {
    ClassName: "TMBL_Storm_AA",
    Name: "Tumbril Storm AA",
    Description: "Originally introduced in 2606 during the Second Tevarin War, the Tumbril Storm single-operator mini-tank was built to blitz battlefields and take out enemy artillery. Reimagined from the ground up to be faster, stronger, and more impactful than ever, the Storm AA is a true force of nature, equipped with a barrage of missiles to provide cover against airborne and ground targets.",
    Career: "Ground Combat",
    Role: "Light Tank",
    Size: 4,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .99
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 57270,
    ComponentsMass: 6251,
    Dimensions: {
        Length: 10.5,
        Width: 7.5,
        Height: 3.6
    },
    IsSpaceship: !1,
    IsVehicle: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .9,
            Energy: .9,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .85,
            Infrared: .85,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 27e3
            },
            Parts: {
                tread_cover_FL: 5e3,
                Component_Door_FL_Back: 500,
                Component_Door_FL_Front: 500,
                blast_plate_front_left: 200,
                radar_detail_front_left: 100,
                tread_cover_RL: 5e3,
                component_door_RL_front: 500,
                component_door_RL_back: 500,
                blast_plate_a_rear_left: 200,
                blast_plate_b_rear_left: 200,
                tread_cover_RR: 5e3,
                component_door_RR_front: 500,
                component_door_RR_back: 500,
                blast_shield_a_back_right: 200,
                blast_shield_b_rear_right: 200,
                tread_cover_FR: 5e3,
                blast_plate_front_right: 200,
                Component_Door_FR_Back: 500,
                Component_Door_FR_Front: 500,
                radar_detail_front_right: 100,
                component_door_rear_left: 500,
                component_door_rear_right: 500,
                hardpoint_wheel_front_right_00: 700,
                hardpoint_wheel_rear_right_hidden: 700,
                hardpoint_wheel_rear_right_014: 700,
                hardpoint_wheel_rear_left_014: 700,
                hardpoint_wheel_rear_right_013: 700,
                hardpoint_wheel_rear_left_013: 700,
                hardpoint_wheel_front_right_hidden: 700,
                hardpoint_wheel_front_left_hidden: 700,
                hardpoint_wheel_front_right_06: 700,
                hardpoint_wheel_front_left_06: 700,
                hardpoint_wheel_rear_right_12: 700,
                hardpoint_wheel_rear_right_11: 700,
                hardpoint_wheel_front_right_01: 700,
                hardpoint_wheel_rear_right_08: 700,
                hardpoint_wheel_rear_right_06: 700,
                hardpoint_wheel_rear_left_hidden: 700,
                hardpoint_wheel_front_right_04: 700,
                hardpoint_wheel_front_right_02: 700,
                hardpoint_wheel_rear_left_12: 700,
                hardpoint_wheel_front_left_00: 700,
                hardpoint_wheel_rear_left_11: 700,
                hardpoint_wheel_rear_left_08: 700,
                hardpoint_wheel_rear_left_06: 700,
                hardpoint_wheel_front_left_01: 700,
                hardpoint_wheel_front_left_04: 700,
                hardpoint_wheel_front_left_02: 700,
                hardpoint_wheel_front_left_gap1: 700,
                hardpoint_wheel_front_right_gap1: 700,
                hardpoint_wheel_front_left_gap2: 700,
                hardpoint_wheel_front_right_gap2: 700,
                hardpoint_wheel_front_left_center2: 700,
                hardpoint_wheel_front_right_center1: 700,
                hardpoint_wheel_front_right_center2: 700,
                hardpoint_wheel_front_left_center1: 700,
                hardpoint_wheel_front_bumper_left: 700,
                hardpoint_wheel_front_bumper_right: 700,
                hardpoint_wheel_rear_left_hidden2: 700,
                hardpoint_wheel_rear_right_hidden2: 700,
                blast_plate_body_right: 200,
                radar_detail_body_left: 100,
                radar_detail_body_right: 100,
                blast_plate_body_left: 200
            }
        }
    },
    TrackWheeledCharacteristics: {
        EnginePower: 4700,
        EngineMinRPM: 500,
        EngineIdleRPM: 1e3,
        EngineMaxRPM: 1e4,
        MaxSpeed: 30
    },
    TrackSteerCharacteristics: {
        SteerSpeed: 170,
        SteerSpeedMin: 220,
        V0SteerMax: 40,
        KvSteerMax: 26,
        VMaxSteerMax: 20,
        VMaxSteerSpeed: 170,
        V0SteerSpeed: 220,
        V0SteerMaxAngle: 40,
        SteerSubtractAngle: 26,
        SteerSubtractV: 20,
        SteerRelaxationSpeed: 170
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 363,
            SCMActive: 745,
            NAV: 0
        },
        Infrared: {
            Start: 1054
        },
        CrossSection: {
            Front: 1557,
            Side: 2094,
            Top: 2650
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 545,
        PilotBurstDPS: 0,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 111028
    },
    Insurance: {
        StandardClaimTime: 5.33,
        ExpeditedClaimTime: 1.33,
        ExpeditedCost: 1740
    },
    "New Vehicle": "Tumbril Storm AA",
    Buy: {
        "New Deal, Lorville": 476280
    }
}, {
    ClassName: "VNCL_Blade",
    Name: "Esperia Blade",
    Description: "These light fighters, designation 'Blade', are often used by Vanduul as scouts and first wave assault crafts. They have also served well as skirmisher units due to their speed allowing them to chase down any ships attempting to flee the area. For some decades, United Empire of Earth aggressor squadrons have operated replica Blade fighters produced under exclusive contract by Esperia, Inc. ",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .65,
        PersonalInventory: .65
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 27019,
    ComponentsMass: 2772,
    Dimensions: {
        Length: 16.5,
        Width: 20,
        Height: 5.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                Nose: 1800,
                Body: 1800
            },
            Parts: {
                Spoiler: 250,
                Wing_Left: 700,
                Wing_Left_Tip: 275,
                Belly: 750,
                Rib1_Right: 50,
                Rib2_Right: 50,
                Rib3_Right: 50,
                Rib4_Right: 50,
                Rib5_Right: 50,
                Rib6_Right: 50,
                Rib7_Right: 50,
                Rib7_Left: 50,
                Rib6_Left: 50,
                Rib5_Left: 50,
                Rib4_Left: 50,
                Rib3_Left: 50,
                Rib2_Left: 50,
                Rib1_Left: 50,
                Wing_Right: 700,
                Wing_Right_Tip: 275
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_central: 11e3,
                engine_left: 11e3,
                engine_right: 11e3
            },
            Retro: {
                thruster_retro: 11800
            },
            Maneuvering: {
                thruster_top_front_left: 11e3,
                thruster_top_front_right: 11e3,
                thruster_bottom_front_left: 11e3,
                thruster_bottom_front_right: 11e3,
                thruster_side_front_left: 11e3,
                thruster_top_rear_right: 11e3,
                thruster_side_rear_left: 11e3,
                thruster_side_rear_right: 11e3,
                thruster_bottom_rear_left: 11e3,
                thruster_bottom_rear_right: 11e3,
                thruster_top_rear_left: 11e3,
                thruster_side_front_right: 11e3
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        MaxSpeed: 1200,
        Pitch: 55,
        Yaw: 65,
        Roll: 200,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 3712e3,
            Retro: 1285e3,
            Vtol: 0,
            Maneuvering: 10174e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 12.9,
            Retro: 4.5,
            Strafe: 9.9,
            Up: 10,
            Down: 5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 500,
                BoostSpeedBackward: 260
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .2,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 8e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 3.75,
            Retro: 1.25,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 464,
            Retro: 160.625,
            Vtol: 0,
            Maneuvering: 1271.75
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 7568,
            SCMActive: 8663,
            NAV: 15634
        },
        Infrared: {
            Start: 9891
        },
        CrossSection: {
            Front: 2747,
            Side: 10418,
            Top: 10418
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2794,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 18662
    },
    Insurance: {
        StandardClaimTime: 10.33,
        ExpeditedClaimTime: 3.44,
        ExpeditedCost: 5124
    },
    Buy: {
        "Astro Armada, Area 18": 7796250
    }
}, {
    ClassName: "VNCL_Glaive",
    Name: "Esperia Glaive",
    Description: "The Glaive is a symmetrical version of the Scythe. Generally flown by Vanduul with more combat experience, they are better armed and have two huge blades/wings as opposed to one on the standard Scythe.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .6,
        PersonalInventory: .99
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 76520,
    ComponentsMass: 3564,
    Dimensions: {
        Length: 31,
        Width: 31.5,
        Height: 8.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 5e3
            },
            Parts: {
                body: 5e3,
                landing_gear_rear_cover: 200,
                wing_right_arm: 640,
                wing_right_gun: 640,
                wing_rightA: 720,
                wing_right_blade: 1e3,
                wing_rightA_featherD_hinge: 1,
                wing_rightA_featherD_end: 1,
                wing_rightA_featherC_hinge: 1,
                wing_rightA_featherC_end: 1,
                wing_rightA_featherB_hinge: 1,
                wing_rightA_featherB_end: 1,
                wing_rightA_featherA_hinge: 1,
                wing_rightA_featherA_end: 1,
                wing_right_blade_lock: 1,
                wing_right_tailA: 1,
                wing_right_tailB: 1,
                wing_right_tailC: 1,
                wing_right_tailD: 1,
                wing_right_tailD_featherA_hinge: 1,
                wing_right_tailD_featherA_end: 1,
                wing_right_tailD_featherB_hinge: 1,
                wing_right_tailD_featherB_end: 1,
                wing_right_tailD_featherC_hinge: 1,
                wing_right_tailD_featherC_end: 1,
                wing_right_tailD_featherD_hinge: 1,
                wing_right_tailD_featherD_end: 1,
                wing_left_arm: 720,
                wing_left_tailA: 1,
                wing_left_tailB: 1,
                wing_left_tailC: 1,
                wing_left_gun: 640,
                wing_leftA: 720,
                wing_left_blade: 1e3,
                wing_leftA_featherA_hinge: 1,
                wing_leftA_featherA_end: 1,
                wing_leftA_featherB_hinge: 1,
                wing_leftA_featherB_end: 1,
                wing_leftA_featherC_hinge: 1,
                wing_leftA_featherC_end: 1,
                wing_leftA_featherD_hinge: 1,
                wing_leftA_featherD_end: 1,
                wing_left_blade_lock: 1,
                wing_left_tailD: 1,
                wing_left_tailD_featherA_hinge: 1,
                wing_left_tailD_featherA_end: 1,
                wing_left_tailD_featherC_hinge: 1,
                wing_left_tailD_featherC_end: 1,
                wing_left_tailD_featherD_hinge: 1,
                wing_left_tailD_featherD_end: 1,
                wing_left_tailD_featherB_hinge: 1,
                wing_left_tailD_featherB_end: 1
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 11200,
                engine_right: 11200
            },
            Retro: {
                thruster_retro_left: 11200,
                thruster_retro_right: 11200
            },
            Maneuvering: {
                thruster_top_front_right_fixed: 12300,
                thruster_bottom_back_left_joint: 11200,
                thruster_bottom_back_right_joint: 11200,
                thruster_bottom_front_left_joint: 11200,
                thruster_bottom_front_right_joint: 11200,
                thruster_side_back_left_fixed: 12300,
                thruster_side_back_right_fixed: 12300,
                thruster_side_front_left_fixed: 12300,
                thruster_side_front_right_fixed: 12300,
                thruster_top_back_left_joint: 11200,
                thruster_top_back_right_joint: 11200,
                thruster_top_front_left_fixed: 12300
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 5949678,
            Retro: 3092728,
            Vtol: 0,
            Maneuvering: 21238728
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.1,
            Retro: 4,
            Strafe: 7.5,
            Up: 8,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 9e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 743.71,
            Retro: 386.591,
            Vtol: 0,
            Maneuvering: 2654.841
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8180,
            SCMActive: 9174,
            NAV: 15713
        },
        Infrared: {
            Start: 9180
        },
        CrossSection: {
            Front: 2384,
            Side: 9140,
            Top: 11922
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 2470,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 22395
    },
    Insurance: {
        StandardClaimTime: 7.59375,
        ExpeditedClaimTime: 2.53125,
        ExpeditedCost: 3800
    }
}, {
    ClassName: "VNCL_Scythe",
    Name: "Vanduul Scythe",
    Description: "Fast becoming the symbol of the Vanduul Race, the Scythe is the foot soldier in every raid and the target of every human fighter pilot. Featuring a hefty weapons payload, the Scythe's real asset is its maneuverability, found in the twin main and twelve maneuvering thrusters. This captured Vanduul-made Scythe has been modified by Esperia to be flyable by Human pilots.",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .6,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 72091,
    ComponentsMass: 3220,
    Dimensions: {
        Length: 31,
        Width: 23,
        Height: 8.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .48,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1,
            Infrared: 1,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                nose: 4e3
            },
            Parts: {
                body: 4e3,
                wing_left_arm: 500,
                wing_left: 480,
                wing_right_arm: 500,
                wing_right_gun: 500,
                wing_right_tailA: 1,
                wing_right_tailB: 1,
                wing_right_tailC: 1,
                wing_rightA: 500,
                wing_right_blade: 1e3,
                wing_rightA_featherA_hinge: 1,
                wing_rightA_featherA_end: 1,
                wing_rightA_featherB_hinge: 1,
                wing_rightA_featherB_end: 1,
                wing_rightA_featherC_hinge: 1,
                wing_rightA_featherC_end: 1,
                wing_rightA_featherD_hinge: 1,
                wing_rightA_featherD_end: 1,
                wing_right_blade_lock: 1,
                wing_right_tailD: 1,
                wing_right_tailD_featherA_hinge: 1,
                wing_right_tailD_featherA_end: 1,
                wing_right_tailD_featherB_hinge: 1,
                wing_right_tailD_featherB_end: 1,
                wing_right_tailD_featherC_hinge: 1,
                wing_right_tailD_featherC_end: 1,
                wing_right_tailD_featherD_hinge: 1,
                wing_right_tailD_featherD_end: 1,
                landing_gear_rear_cover: 200
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_left: 11200,
                engine_right: 11200
            },
            Retro: {
                thruster_retro_left: 11200,
                thruster_retro_right: 11200
            },
            Maneuvering: {
                thruster_top_front_right_fixed: 12300,
                thruster_bottom_back_left_joint: 11200,
                thruster_bottom_back_right_joint: 11200,
                thruster_bottom_front_left_joint: 11200,
                thruster_bottom_front_right_joint: 11200,
                thruster_side_back_left_fixed: 12300,
                thruster_side_back_right_fixed: 12300,
                thruster_side_front_left_fixed: 12300,
                thruster_side_front_right_fixed: 12300,
                thruster_top_back_left_joint: 11200,
                thruster_top_back_right_joint: 11200,
                thruster_top_front_left_fixed: 12300
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 220,
        MaxSpeed: 1150,
        Pitch: 56,
        Yaw: 45,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 26e5,
            Retro: 2904083,
            Vtol: 0,
            Maneuvering: 19947190
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 10.9,
            Retro: 4,
            Strafe: 7.4,
            Up: 7.9,
            Down: 4.5
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 480,
                BoostSpeedBackward: 230
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: .6,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 22e6,
        FuelIntakeRate: 0,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 2.5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 15
        },
        FuelUsagePerSecond: {
            Main: 325,
            Retro: 363.01,
            Vtol: 0,
            Maneuvering: 2493.399
        },
        IntakeToMainFuelRatio: 0,
        TimeForIntakesToFillTank: "Infinity"
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8160,
            SCMActive: 9154,
            NAV: 15693
        },
        Infrared: {
            Start: 9130
        },
        CrossSection: {
            Front: 2513,
            Side: 8277,
            Top: 12563
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 6
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 3550,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 18662
    },
    Insurance: {
        StandardClaimTime: 5.90625,
        ExpeditedClaimTime: 1.96875,
        ExpeditedCost: 2955
    }
}, {
    ClassName: "XIAN_Nox",
    Name: "Aopoa Nox",
    Description: "Hit the skids with the 2947 Nox. This speedy and maneuverable open-canopy racer from Aopoa is capable of zipping along planet surfaces or deep space. Available for the first time in Human space, the Nox has been specifically redesigned for Human pilots and is ready to race.",
    Career: "Competition",
    Role: "Racing",
    Size: 1,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .3,
        PersonalInventory: .39
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 4230,
    ComponentsMass: 893,
    Dimensions: {
        Length: 5.5,
        Width: 1.5,
        Height: 1.5
    },
    IsSpaceship: !1,
    IsGravlev: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: 1,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: .8,
            Infrared: .38,
            CrossSection: 1
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body_back: 400,
                body_front: 120,
                nose: 440
            },
            Parts: {
                rear_nacelle_l: 320,
                rear_nacelle_r: 320,
                front_cowling: 225
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine: 2750
            },
            Retro: {
                thruster_retro_left: 2500,
                thruster_retro_right: 2500
            },
            Maneuvering: {
                thruster_rear_top_left: 2150,
                thruster_rear_left: 2150,
                thruster_rear_bottom_left: 2150,
                gravplate_rear_left: 2750,
                thruster_rear_right: 2150,
                thruster_rear_bottom_right: 2150,
                thruster_rear_top_right: 2150,
                gravplate_rear_right: 2750,
                gravplate_center_right: 2750,
                gravplate_front_left: 2750,
                gravplate_front_right: 2750,
                thruster_front_bottom_left: 2150,
                thruster_front_bottom_right: 2150,
                thruster_front_left_A: 2150,
                thruster_front_left_B: 2150,
                thruster_front_right_A: 2150,
                thruster_front_right_B: 2150,
                thruster_front_top_left: 2150,
                thruster_front_top_right: 2150,
                gravplate_center_left: 2750
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 225,
        HoverMaxSpeed: 225,
        MaxSpeed: 619,
        Pitch: 89,
        Yaw: 89,
        Roll: 138,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 139e3,
            Retro: 134200,
            Vtol: 0,
            Maneuvering: 358615.9
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 3.1,
            Retro: 2.8,
            Strafe: 1.4,
            Up: 2.5,
            Down: 2.3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            ScmMode: {
                BoostSpeedForward: 305,
                BoostSpeedBackward: 145
            }
        },
        Boost: {
            PreDelay: .15,
            RampUp: 0,
            RampDown: .2,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.7,
                    Y: 2.3,
                    Z: 1.2
                },
                NegativeAxis: {
                    X: 1.7,
                    Y: 1.2,
                    Z: 1.2
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 10,
            CapacitorRegenPerSec: 4,
            CapacitorIdleCost: 4,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: 1,
            RegenerationTime: 2.5,
            X_AccelMultiplicator: 2,
            Y_AccelMultiplicator: 2,
            Z_AccelMultiplicator: 2
        }
    },
    FuelManagement: {
        FuelCapacity: 15e5,
        FuelIntakeRate: 1,
        QuantumFuelCapacity: 0,
        FuelBurnRatePer10KNewton: {
            Main: 1.25,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 25
        },
        FuelUsagePerSecond: {
            Main: 17.375,
            Retro: 16.775,
            Vtol: 0,
            Maneuvering: 44.827
        },
        IntakeToMainFuelRatio: 5.76,
        TimeForIntakesToFillTank: 15e5
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 572,
            SCMActive: 848,
            NAV: 0
        },
        Infrared: {
            Start: 597
        },
        CrossSection: {
            Front: 333,
            Side: 467,
            Top: 550
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 2
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 0,
        PilotBurstDPS: 438,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: .10125,
        ExpeditedClaimTime: 0,
        ExpeditedCost: 55
    },
    Buy: {
        "Astro Armada, Area 18": 722925
    }
}, {
    ClassName: "XIAN_Scout",
    Name: "Aopoa Khartu-al",
    Description: "The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to human civilians as a dedicated scout/explorer. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
    Career: "Combat",
    Role: "Light Fighter",
    Size: 3,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: 1.05,
        PersonalInventory: 1.08
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 72711,
    ComponentsMass: 2530,
    Dimensions: {
        Length: 15,
        Width: 21.5,
        Height: 30.5
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: .95,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.2,
            Infrared: 1.2,
            CrossSection: 1.2
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 2100.5
            },
            Parts: {
                body_nose: 2250,
                cockpit_rim: 1600,
                sub_frame: 2e3,
                small_wing_left: 300,
                small_wing_right: 300,
                Wing_Right_Upper_Thruster_Shoulder: 300,
                Wing_Right_Upper_Thruster_Elbow: 300,
                Wing_Right_Upper_Thruster_Housing: 500,
                Wing_Right_Upper: 300,
                Wing_Right_Lower_Thruster_Shoulder: 300,
                Wing_Right_Lower_Thruster_Elbow: 300,
                Wing_Right_Lower_Thruster_Housing: 500,
                Wing_Right_Lower: 300,
                Wing_Left_Upper_Thruster_Shoulder: 300,
                Wing_Left_Upper_Thruster_Elbow: 300,
                Wing_Left_Upper_Thruster_Housing: 500,
                Wing_Left_Upper: 300,
                Wing_Left_Lower_Thruster_Shoulder: 300,
                Wing_Left_Lower_Thruster_Elbow: 300,
                Wing_Left_Lower_Thruster_Housing: 500,
                Wing_Left_Lower: 300
            }
        },
        ThrustersHealthPoints: {
            Main: {
                engine_right_upper: 15e3,
                engine_right_lower: 15e3,
                engine_left_upper: 15e3,
                engine_left_lower: 15e3
            },
            Maneuvering: {
                thruster_left_front_upper: 12500,
                thruster_left_rear_upper: 12500,
                thruster_right_rear_lower: 12500,
                thruster_right_front_lower: 12500,
                thruster_left_rear_lower: 12500,
                thruster_left_front_lower: 12500,
                thruster_right_rear_upper: 12500,
                thruster_right_front_upper: 12500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 226,
        MaxSpeed: 1206,
        Pitch: 75,
        Yaw: 55,
        Roll: 211,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 6304e3,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 3264e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 13.2,
            Retro: 4.5,
            Strafe: 10.5,
            Up: 10.3,
            Down: 5.3
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 506,
                BoostSpeedBackward: 263
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.3,
                    Y: 1.6,
                    Z: 1.3
                },
                NegativeAxis: {
                    X: 1.3,
                    Y: 1.38,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 1.5,
            Y_AccelMultiplicator: 1.5,
            Z_AccelMultiplicator: 1.5
        }
    },
    FuelManagement: {
        FuelCapacity: 26e6,
        FuelIntakeRate: 29,
        QuantumFuelCapacity: 11e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 10
        },
        FuelUsagePerSecond: {
            Main: 788,
            Retro: 0,
            Vtol: 0,
            Maneuvering: 408
        },
        IntakeToMainFuelRatio: 3.68,
        TimeForIntakesToFillTank: 896551.72
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 8313,
            SCMActive: 9736,
            NAV: 17353
        },
        Infrared: {
            Start: 11936
        },
        CrossSection: {
            Front: 7216,
            Side: 9866,
            Top: 7266
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 3460,
        PilotBurstDPS: 1636,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 0
    },
    Insurance: {
        StandardClaimTime: 5.0625,
        ExpeditedClaimTime: 1.6875,
        ExpeditedCost: 2535
    },
    Buy: {
        "Astro Armada, Area 18": 7229250
    }
}, {
    ClassName: "XNAA_SanTokYai",
    Name: "Aopoa San'tok.yāi",
    Description: "Harnessing the power of next-generation Xi'an flight systems, upgraded dual-vector thrusters, and a daunting weapons package, Aopoa has crafted a fighter that retains the nimble dexterity and tight handling the brand is known for. ",
    Career: "Combat",
    Role: "Medium Fighter",
    Size: 2,
    Cargo: {
        CargoGrid: 0,
        CargoContainers: 0,
        ExternalStorage: .45,
        PersonalInventory: 0
    },
    Crew: 1,
    WeaponCrew: 0,
    OperationsCrew: 0,
    Mass: 88524,
    ComponentsMass: 4238,
    Dimensions: {
        Length: 22,
        Width: 23,
        Height: 23
    },
    IsSpaceship: !0,
    Armor: {
        DamageMultipliers: {
            Physical: .5,
            Energy: .95,
            Distortion: 1
        },
        SignalMultipliers: {
            Electromagnetic: 1.2,
            Infrared: 1.2,
            CrossSection: 1.2
        }
    },
    Hull: {
        StructureHealthPoints: {
            VitalParts: {
                body: 3675.88
            },
            Parts: {
                ejection_mesh_top: 100,
                tail_left: 600,
                wings_rotator_bottom_left: 1e3,
                wing_front_bottom_left: 500,
                wings_rotator_top_left: 1e3,
                wing_front_left: 500,
                wings_rotator_bottom_right: 1e3,
                wing_front_bottom_right: 500,
                wings_rotator_top_right: 1e3,
                wing_front_right: 500,
                tail_right: 600,
                front_item_tray_door_left: 250,
                front_item_tray_door_right: 250
            }
        },
        ThrustersHealthPoints: {
            Main: {
                main_thruster_bottom_left: 15e3,
                main_thruster_top_left: 15e3,
                main_thruster_bottom_right: 15e3,
                main_thruster_top_right: 15e3
            },
            Retro: {
                mav_thruster_forward_left: 12500,
                mav_thruster_forward_right: 12500
            },
            Maneuvering: {
                mav_thruster_downward_front: 12500,
                mav_thruster_upward_rear: 12500,
                mav_thruster_upward_front: 12500,
                mav_thruster_rightward_front: 12500,
                mav_thruster_leftward_front: 12500,
                mav_thruster_downward_rear: 12500,
                mav_thruster_backward_left: 12500,
                mav_thruster_backward_right: 12500,
                mav_thruster_leftward_rear: 12500,
                mav_thruster_downward_right: 12500,
                mav_thruster_upward_right: 12500,
                mav_thruster_rightward_rear: 12500,
                mav_thruster_downward_left: 12500,
                mav_thruster_upward_left: 12500
            }
        }
    },
    FlightCharacteristics: {
        ScmSpeed: 227,
        MaxSpeed: 1161,
        Pitch: 51,
        Yaw: 51,
        Roll: 150,
        IsVtolAssisted: !1,
        UseDirectionModifiers: !0,
        ThrustCapacity: {
            Main: 84e5,
            Retro: 524e3,
            Vtol: 0,
            Maneuvering: 15836e3
        },
        AccelerationG: {
            IsValidated: !0,
            Main: 11.3,
            Retro: 7.9,
            Strafe: 11.2,
            Up: 8.1,
            Down: 4.9
        },
        MasterModes: {
            BaseSpoolTime: 1,
            QuantumDriveSpoolTime: 4,
            ScmMode: {
                BoostSpeedForward: 493,
                BoostSpeedBackward: 225
            }
        },
        Boost: {
            PreDelay: 0,
            RampUp: .6,
            RampDown: .3,
            AccelerationMultiplier: {
                PositiveAxis: {
                    X: 1.35,
                    Y: 1.55,
                    Z: 1.35
                },
                NegativeAxis: {
                    X: 1.35,
                    Y: 1.4,
                    Z: 1.35
                }
            },
            AngularAccelerationMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            },
            AngularVelocityMultiplier: {
                Pitch: 1.2,
                Yaw: 1.2,
                Roll: 1.2
            }
        },
        Capacitors: {
            ThrusterCapacitorSize: 20,
            CapacitorRegenPerSec: .75,
            CapacitorIdleCost: 1,
            CapacitorLinearCost: 0,
            CapacitorUsageModifier: 1,
            CapacitorRegenDelay: .5,
            RegenerationTime: 26.7,
            X_AccelMultiplicator: 2.2,
            Y_AccelMultiplicator: 2.2,
            Z_AccelMultiplicator: 2.2
        }
    },
    FuelManagement: {
        FuelCapacity: 147e5,
        FuelIntakeRate: 29,
        QuantumFuelCapacity: 13e5,
        FuelBurnRatePer10KNewton: {
            Main: 5,
            Retro: 2.5,
            Vtol: 0,
            Maneuvering: 17.5
        },
        FuelUsagePerSecond: {
            Main: 1050,
            Retro: 65.5,
            Vtol: 0,
            Maneuvering: 1979.5
        },
        IntakeToMainFuelRatio: 2.76,
        TimeForIntakesToFillTank: 506896.55
    },
    Emissions: {
        Electromagnetic: {
            SCMIdle: 11687,
            SCMActive: 14201,
            NAV: 20726
        },
        Infrared: {
            Start: 16376
        },
        CrossSection: {
            Front: 5167,
            Side: 14254,
            Top: 14789
        }
    },
    ResourceNetwork: {
        ItemPools: {
            WeaponPoolSize: 4
        }
    },
    Weapons: {
        PilotWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TurretsWeaponRegenPool: {
            RegenFillRate: 0,
            AmmoLoad: 0
        },
        TotalShieldHP: 4740,
        PilotBurstDPS: 1823,
        TurretsBurstDPS: 0,
        TotalMissilesDmg: 13362
    },
    Insurance: {
        StandardClaimTime: 7.5,
        ExpeditedClaimTime: 2.5,
        ExpeditedCost: 3800
    },
    "New Ship": "Aopoa San'tok.yāi",
    Dimensions2: {
        Length: 24,
        Width: 18,
        Height: 9
    },
    Buy: {
        "Astro Armada, Area 18": 9355500
    }
}];

export default shipList;