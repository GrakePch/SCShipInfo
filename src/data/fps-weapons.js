const fpsWeapons = [{
    className: "apar_special_ballistic_01",
    reference: "699db405-4ca1-4993-ba58-a9f90001ae6b",
    itemName: "apar_special_ballistic_01",
    type: "WeaponPersonal",
    subType: "Large",
    tags: "shouldered SM_RestrictedWep",
    requiredTags: "",
    size: 5,
    grade: 1,
    name: "@item_Nameapar_special_ballistic_01",
    manufacturer: "APAR",
    classification: "FPS.Weapon.Large",
    stdItem: {
        ClassName: "apar_special_ballistic_01",
        Size: 5,
        Mass: 15,
        Volume: 35e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Large",
        Classification: "FPS.Weapon.Large",
        Name: "Scourge Railgun",
        Description: "Magazine Size: 5Rate Of Fire: 60 rpmEffective Range: 200 mAttachments: Optics (N/A), Barrel (N/A), Underbarrel (S4)Equally devastating to larger threats and hostile vehicles, this shoulder mounted railgun from Apocalypse Arms uses electromagnets to deliver its payload accurately over great distances, making it the Scourge of land, air and space. ",
        Manufacturer: {
            Code: "APAR",
            Name: "Apocalypse Arms"
        },
        Tags: ["shouldered", "SM_RestrictedWep"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 50,
                LifeTime: 4,
                Range: 200,
                Size: 1,
                ExplosionRadiusMin: 5,
                ExplosionRadiusMax: 8,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {
                        Physical: 2
                    }
                },
                ImpactDamage: {
                    Physical: 20
                },
                DetonationDamage: {
                    Physical: 10
                }
            },
            Firing: [{
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 21,
                AmmoSpeed: 2500,
                AmmoRange: 1e4,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: 0,
                    Max: 0,
                    FirstAttack: 0,
                    PerAttack: 0,
                    Decay: 0
                },
                FireChargedParameters: {
                    ChargeTime: 2,
                    OverchargeTime: 3,
                    OverchargedTime: 1,
                    Cooldown: .5,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 50,
                        DamageMultiplier: 300,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Physical: 9e3
                },
                DamagePerSecond: {
                    Physical: 3150
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1.5,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "apar_special_ballistic_01_mag",
            InstalledItem: {
                ClassName: "apar_special_ballistic_01_mag",
                Size: 1,
                Mass: .32,
                Volume: 530,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Scourge Railgun Magazine (5 cap)",
                Description: "This magazine holds the large specially designed .937 caliber tungsten sabot rounds fired by the Apocalypse Arms Scourge railgun.",
                Manufacturer: {
                    Code: "APAR",
                    Name: "Apocalypse Arms"
                },
                Tags: ["apar_special_ballistic_01", "SM_RestrictedWep"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 5,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["shouldered", "SM_RestrictedWep"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["shouldered", "SM_RestrictedWep"]
        }]
    }
}, {
    className: "apar_special_ballistic_02",
    reference: "3666c8ac-d552-4006-8c47-7e8f773b11a4",
    itemName: "apar_special_ballistic_02",
    type: "WeaponPersonal",
    subType: "Large",
    tags: "shouldered SM_RestrictedWep",
    requiredTags: "",
    size: 5,
    grade: 1,
    name: "@item_Nameapar_special_ballistic_02",
    manufacturer: "APAR",
    classification: "FPS.Weapon.Large",
    stdItem: {
        ClassName: "apar_special_ballistic_02",
        Size: 5,
        Mass: 15,
        Volume: 35e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Large",
        Classification: "FPS.Weapon.Large",
        Name: "Animus Missile Launcher",
        Description: "Magazine Size: 3Rate Of Fire: 300 rpm (3 shot burst)Effective Range: 2 kmAttachments: Optics (N/A), Barrel (N/A), Underbarrel (N/A)Lift the Animus onto your shoulder and level the opposition on the battlefield. This missile launcher from Apocalypse Arms features a rotating barrel that quickly fires three missiles, making it the perfect weapon to obliterate ground forces or damage vehicles and small ships. When you need to sow destruction to save yourself, you can trust Apocalypse Arms to deliver.",
        Manufacturer: {
            Code: "APAR",
            Name: "Apocalypse Arms"
        },
        Tags: ["shouldered", "SM_RestrictedWep"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 700,
                LifeTime: 3,
                Range: 2100,
                Size: 0,
                ExplosionRadiusMin: .5,
                ExplosionRadiusMax: 4,
                ImpactDamage: {},
                DetonationDamage: {
                    Physical: 150
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 300,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .4,
                Spread: {
                    Min: 1,
                    Max: 1,
                    FirstAttack: 1,
                    PerAttack: 1,
                    Decay: 1
                },
                DamagePerShot: {
                    Physical: 150
                },
                DamagePerSecond: {
                    Physical: 750
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1.5,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "apar_special_ballistic_02_mag",
            InstalledItem: {
                ClassName: "apar_special_ballistic_02_mag",
                Size: 1,
                Mass: 1.5,
                Volume: 530,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Animus Missile Launcher Magazine (3 cap)",
                Description: "This magazine for the Animus missile launcher holds three missiles.",
                Manufacturer: {
                    Code: "APAR",
                    Name: "Apocalypse Arms"
                },
                Tags: ["apar_special_ballistic_02", "SM_RestrictedWep"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 0,
                    AllowRepool: !0
                },
                Ports: [{
                    PortName: "missile_01",
                    MinSize: 0,
                    MaxSize: 1,
                    Loadout: "apar_special_ballistic_02_missile",
                    InstalledItem: {
                        ClassName: "apar_special_ballistic_02_missile",
                        Size: 1,
                        Mass: .32,
                        Volume: 1,
                        Grade: 1,
                        Class: "",
                        Type: "WeaponAttachment.Missile",
                        Name: "Animus Missile",
                        Description: "Ballistic missile ammo for the Animus missile launcher.",
                        Manufacturer: {
                            Code: "",
                            Name: "Aopoa"
                        },
                        Tags: ["apar_special_ballistic_02", "SM_RestrictedWep", "flightReady"],
                        HeatController: {
                            InitialTemperature: -1,
                            CoolingEqualizationMultiplier: 1,
                            MinOperatingTemperature: 0,
                            MinCoolingTemperature: 300,
                            Emissions: {
                                MinimumTemperatureForIR: 250,
                                TemperatureToIR: 6,
                                StartIREmission: 0
                            },
                            Overheat: {
                                EnableOverheat: !1,
                                MaxTemperature: 450,
                                WarningTemperature: 370,
                                RecoveryTemperature: 350
                            }
                        },
                        Missile: {
                            Damage: {
                                Physical: 300,
                                Energy: 800
                            },
                            MinRadius: 2,
                            MaxRadius: 3,
                            TrackingSignal: "CrossSection",
                            MinTrackingSignal: 11.2,
                            MinLockRatio: .25,
                            LockRate: .15,
                            LockTime: 3,
                            LockAngle: 30,
                            LockRangeMin: -1,
                            LockRangeMax: -1,
                            Speed: 1e3,
                            FuelTankSize: 10,
                            MaxLifeTime: 30,
                            MaxDistance: 3e4,
                            ArmTime: 1.5,
                            IgniteTime: .1,
                            BoostPhaseDuration: .5,
                            TerminalPhaseEngagementTime: 3,
                            TerminalPhaseEngagementAngle: 45,
                            Proximity: 0
                        }
                    },
                    Tags: ["apar_special_ballistic_02", "SM_RestrictedWep"]
                }, {
                    PortName: "missile_02",
                    MinSize: 0,
                    MaxSize: 1,
                    Loadout: "apar_special_ballistic_02_missile",
                    InstalledItem: {
                        ClassName: "apar_special_ballistic_02_missile",
                        Size: 1,
                        Mass: .32,
                        Volume: 1,
                        Grade: 1,
                        Class: "",
                        Type: "WeaponAttachment.Missile",
                        Name: "Animus Missile",
                        Description: "Ballistic missile ammo for the Animus missile launcher.",
                        Manufacturer: {
                            Code: "",
                            Name: "Aopoa"
                        },
                        Tags: ["apar_special_ballistic_02", "SM_RestrictedWep", "flightReady"],
                        HeatController: {
                            InitialTemperature: -1,
                            CoolingEqualizationMultiplier: 1,
                            MinOperatingTemperature: 0,
                            MinCoolingTemperature: 300,
                            Emissions: {
                                MinimumTemperatureForIR: 250,
                                TemperatureToIR: 6,
                                StartIREmission: 0
                            },
                            Overheat: {
                                EnableOverheat: !1,
                                MaxTemperature: 450,
                                WarningTemperature: 370,
                                RecoveryTemperature: 350
                            }
                        },
                        Missile: {
                            Damage: {
                                Physical: 300,
                                Energy: 800
                            },
                            MinRadius: 2,
                            MaxRadius: 3,
                            TrackingSignal: "CrossSection",
                            MinTrackingSignal: 11.2,
                            MinLockRatio: .25,
                            LockRate: .15,
                            LockTime: 3,
                            LockAngle: 30,
                            LockRangeMin: -1,
                            LockRangeMax: -1,
                            Speed: 1e3,
                            FuelTankSize: 10,
                            MaxLifeTime: 30,
                            MaxDistance: 3e4,
                            ArmTime: 1.5,
                            IgniteTime: .1,
                            BoostPhaseDuration: .5,
                            TerminalPhaseEngagementTime: 3,
                            TerminalPhaseEngagementAngle: 45,
                            Proximity: 0
                        }
                    },
                    Tags: ["apar_special_ballistic_02", "SM_RestrictedWep"]
                }, {
                    PortName: "missile_03",
                    MinSize: 0,
                    MaxSize: 1,
                    Loadout: "apar_special_ballistic_02_missile",
                    InstalledItem: {
                        ClassName: "apar_special_ballistic_02_missile",
                        Size: 1,
                        Mass: .32,
                        Volume: 1,
                        Grade: 1,
                        Class: "",
                        Type: "WeaponAttachment.Missile",
                        Name: "Animus Missile",
                        Description: "Ballistic missile ammo for the Animus missile launcher.",
                        Manufacturer: {
                            Code: "",
                            Name: "Aopoa"
                        },
                        Tags: ["apar_special_ballistic_02", "SM_RestrictedWep", "flightReady"],
                        HeatController: {
                            InitialTemperature: -1,
                            CoolingEqualizationMultiplier: 1,
                            MinOperatingTemperature: 0,
                            MinCoolingTemperature: 300,
                            Emissions: {
                                MinimumTemperatureForIR: 250,
                                TemperatureToIR: 6,
                                StartIREmission: 0
                            },
                            Overheat: {
                                EnableOverheat: !1,
                                MaxTemperature: 450,
                                WarningTemperature: 370,
                                RecoveryTemperature: 350
                            }
                        },
                        Missile: {
                            Damage: {
                                Physical: 300,
                                Energy: 800
                            },
                            MinRadius: 2,
                            MaxRadius: 3,
                            TrackingSignal: "CrossSection",
                            MinTrackingSignal: 11.2,
                            MinLockRatio: .25,
                            LockRate: .15,
                            LockTime: 3,
                            LockAngle: 30,
                            LockRangeMin: -1,
                            LockRangeMax: -1,
                            Speed: 1e3,
                            FuelTankSize: 10,
                            MaxLifeTime: 30,
                            MaxDistance: 3e4,
                            ArmTime: 1.5,
                            IgniteTime: .1,
                            BoostPhaseDuration: .5,
                            TerminalPhaseEngagementTime: 3,
                            TerminalPhaseEngagementAngle: 45,
                            Proximity: 0
                        }
                    },
                    Tags: ["apar_special_ballistic_02", "SM_RestrictedWep"]
                }]
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["shouldered", "SM_RestrictedWep"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["shouldered", "SM_RestrictedWep"]
        }, {
            PortName: "missile_attach_01",
            MinSize: 0,
            MaxSize: 1,
            Types: ["WeaponAttachment.Missile", "WeaponAttachment.Rocket"],
            Tags: ["shouldered", "SM_RestrictedWep"]
        }, {
            PortName: "missile_attach_02",
            MinSize: 0,
            MaxSize: 1,
            Types: ["WeaponAttachment.Missile", "WeaponAttachment.Rocket"],
            Tags: ["shouldered", "SM_RestrictedWep"]
        }, {
            PortName: "missile_attach_03",
            MinSize: 0,
            MaxSize: 1,
            Types: ["WeaponAttachment.Missile", "WeaponAttachment.Rocket"],
            Tags: ["shouldered", "SM_RestrictedWep"]
        }]
    }
}, {
    className: "behr_glauncher_ballistic_01",
    reference: "a6688dce-f8c7-4b73-b657-bd1e17f951d3",
    itemName: "behr_glauncher_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked glauncher SM_RestrictedWep",
    requiredTags: "",
    size: 4,
    grade: 1,
    name: "@item_Namebehr_glauncher_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_glauncher_ballistic_01",
        Size: 4,
        Mass: 5,
        Volume: 18e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "GP-33 MOD Grenade Launcher",
        Description: "Magazine Size: 6Rate Of Fire: 40 rpmEffective Range: Variable (80m)Attachments: Optics (S1), Barrel (N/A), Underbarrel (S1)The military-grade GP-33 MOD launcher fires 40mm grenades to clear rooms and flush out enemies behind cover thanks to Behring's precision design that primes each grenade to explode on impact.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "glauncher", "SM_RestrictedWep"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 50,
                LifeTime: 4,
                Range: 200,
                Size: 1,
                ExplosionRadiusMin: 2,
                ExplosionRadiusMax: 6,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {
                        Physical: 2
                    }
                },
                ImpactDamage: {
                    Physical: 3
                },
                DetonationDamage: {
                    Physical: 16.5
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 60,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .33,
                Spread: {
                    Min: .15,
                    Max: 1.89,
                    FirstAttack: 1.45,
                    PerAttack: 1.35,
                    Decay: 1
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Physical: 19.5
                },
                DamagePerSecond: {
                    Physical: 19.5
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1.5,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_glauncher_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_glauncher_ballistic_01_mag",
                Size: 1,
                Mass: 2,
                Volume: 2400,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "GP-33 MOD Grenade Launcher Magazine (6 cap)",
                Description: "This magazine for the GP-33 MOD holds six 40mm grenades.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_glauncher_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 6,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "glauncher", "SM_RestrictedWep"],
            PortTags: ["behr_glauncher_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "glauncher", "SM_RestrictedWep"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "glauncher", "SM_RestrictedWep"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "glauncher", "SM_RestrictedWep"]
        }]
    }
}, {
    className: "behr_lmg_ballistic_01",
    reference: "6f1674b1-fb58-4661-9114-f418862751d2",
    itemName: "behr_lmg_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked lmg behr_lmg_ballistic_01",
    requiredTags: "",
    size: 4,
    grade: 1,
    name: "@item_Namebehr_lmg_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_lmg_ballistic_01",
        Size: 4,
        Mass: 10,
        Volume: 2e4,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "FS-9 LMG",
        Description: "Magazine Size: 75Rate Of Fire: 800 rpmEffective Range: 40 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S3)Behring designed the FS-9 to be an overwhelming battlefield force. This light machine gun features a full auto mode that makes it ideal for laying down covering fire or holding back advancing enemies. The FS-9 is also acclaimed for its ability to maintain accuracy while unleashing sustained fire.   ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 400,
                LifeTime: 2,
                Range: 800,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 50
                    },
                    DropPerMeter: {
                        Physical: .0137
                    },
                    MinDamage: {
                        Physical: 10
                    }
                },
                ImpactDamage: {
                    Physical: 14.5
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 650,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 1,
                WearPerShot: .02,
                Spread: {
                    Min: 2,
                    Max: 7.5,
                    FirstAttack: 2,
                    PerAttack: 1,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 14.5
                },
                DamagePerSecond: {
                    Physical: 157.08
                }
            }],
            Repool: {
                AmmoPerSecond: 20,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_lmg_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_lmg_ballistic_01_mag",
                Size: 1,
                Mass: 1.6,
                Volume: 2400,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "FS-9 Magazine (75 cap)",
                Description: "This magazine for the Behring FS-9 LMG holds seventy five 5mm rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_lmg_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 75,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"],
            PortTags: ["behr_lmg_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 3,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "lmg", "behr_lmg_ballistic_01"]
        }]
    }
}, {
    className: "behr_pistol_ballistic_01",
    reference: "1f3400e1-0aa3-48bf-8595-38f4f4218df9",
    itemName: "behr_pistol_ballistic_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_pistol_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "behr_pistol_ballistic_01",
        Size: 1,
        Mass: 1.1,
        Volume: 1100,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "S-38 Pistol",
        Description: "Magazine Size: 20Rate Of Fire: 450 rpmEffective Range: 25 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)Thanks to a streamlined design and a lightweight polymer frame that helps to minimize recoil, it's easy to see why the versatile and dependable S-38 from Behring has become a trusted sidearm across the Empire for both citizens and law enforcement officers.    ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 500,
                LifeTime: 1.9,
                Range: 950,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 20
                    },
                    DropPerMeter: {
                        Physical: .25
                    },
                    MinDamage: {
                        Physical: 16
                    }
                },
                ImpactDamage: {
                    Physical: 22.5
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 450,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: .1,
                    Max: 5,
                    FirstAttack: 1,
                    PerAttack: 2,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 22.5
                },
                DamagePerSecond: {
                    Physical: 168.75
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_pistol_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_pistol_ballistic_01_mag",
                Size: 1,
                Mass: .3,
                Volume: 90,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "S-38 Magazine (20 cap)",
                Description: "This magazine for the Behring S-38 pistol holds twenty 10mm rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_pistol_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 20,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "behr_rifle_ballistic_01",
    reference: "02d4cd2e-fa98-4086-aee1-6b2dfce8ea27",
    itemName: "behr_rifle_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked behr_rifle_ballistic_01 rifle",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namebehr_rifle_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_rifle_ballistic_01",
        Size: 2,
        Mass: 3.2,
        Volume: 13e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "P4-AR Rifle",
        Description: "Magazine Size: 40Rate Of Fire: 550 rpmEffective Range: 50 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S2)Behring's classic P4-AR rifle features a collapsible stock and shortened barrel, making it an ideal choice for close-quarter firefights. Its accuracy and general ease of use make it universally valued among security, military and civilian users.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 550,
                LifeTime: 2,
                Range: 1100,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 40
                    },
                    DropPerMeter: {
                        Physical: .05
                    },
                    MinDamage: {
                        Physical: 10
                    }
                },
                ImpactDamage: {
                    Physical: 12
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 810,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .07,
                Spread: {
                    Min: .18,
                    Max: 5,
                    FirstAttack: 1.35,
                    PerAttack: 1.25,
                    Decay: 6.5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 12
                },
                DamagePerSecond: {
                    Physical: 162
                }
            }, {
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 810,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .07,
                Spread: {
                    Min: .15,
                    Max: 1.89,
                    FirstAttack: 1.45,
                    PerAttack: 1.35,
                    Decay: 4
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 12
                },
                DamagePerSecond: {
                    Physical: 162
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_rifle_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_rifle_ballistic_01_mag",
                Size: 1,
                Mass: .5,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "P4-AR Magazine (40 cap)",
                Description: "This magazine for the Behring P4-AR rifle holds fourty 5.56mm cartridges.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_rifle_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 40,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"],
            PortTags: ["behr_rifle_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "behr_rifle_ballistic_01", "rifle"]
        }]
    }
}, {
    className: "behr_rifle_ballistic_02_civilian",
    reference: "53042ca6-a9ba-4b0e-8c36-a11a5f47feb9",
    itemName: "behr_rifle_ballistic_02_civilian",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked behr_rifle_ballistic_02_civilian behr_rifle_ballistic_02",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namebehr_rifle_ballistic_02_civilian",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_rifle_ballistic_02_civilian",
        Size: 2,
        Mass: 3.6,
        Volume: 13e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "P8-AR Rifle",
        Description: "Magazine Size: 15Rate Of Fire: 475 rpmEffective Range: 100 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S2)The direct descendant of the UEE Marines standard issue weapon, Behring has crafted the semi-automatic P8-AR to provide civilians across the empire a straight-forward and dependable weapon to defend themselves against aggressive hostiles.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 1150,
                LifeTime: 2,
                Range: 2300,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 50
                    },
                    DropPerMeter: {
                        Physical: .1
                    },
                    MinDamage: {
                        Physical: 40
                    }
                },
                ImpactDamage: {
                    Physical: 51
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 235,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .07,
                Spread: {
                    Min: 1,
                    Max: 7.5,
                    FirstAttack: 3,
                    PerAttack: 3,
                    Decay: 4
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 51
                },
                DamagePerSecond: {
                    Physical: 199.75
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_rifle_ballistic_02_mag_civilian",
            InstalledItem: {
                ClassName: "behr_rifle_ballistic_02_mag_civilian",
                Size: 1,
                Mass: .53,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "P8-AR Rifle Magazine (15 Cap)",
                Description: "This magazine for the Behring P8-AR rifle comes pre-loaded with fifteen rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_rifle_ballistic_02_civilian"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 15,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"],
            PortTags: ["behr_rifle_ballistic_02_civilian"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "behr_rifle_ballistic_02_civilian", "behr_rifle_ballistic_02"]
        }]
    }
}, {
    className: "behr_shotgun_ballistic_01",
    reference: "70fba024-7de1-4b3e-b169-256a77cc080f",
    itemName: "behr_shotgun_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked shotgun",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namebehr_shotgun_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_shotgun_ballistic_01",
        Size: 3,
        Mass: 4.5,
        Volume: 19e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "BR-2 Shotgun",
        Description: "Magazine Size: 12Rate Of Fire: 75 rpmEffective Range: 15 mAttachments: Optics (S1), Barrel (S3), Underbarrel (S2)Originally designed for the military, Behring decided to sell the BR-2 ballistic shotgun to the general public after the initial weapon testers kept requesting to take one home. Featuring a semi-auto fire mode that can rapidly deliver devastating stopping power, the BR-2 is the ideal choice for both offensive and defensive operations. ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "shotgun"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 225,
                LifeTime: 2,
                Range: 450,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 12
                    },
                    DropPerMeter: {
                        Physical: .05
                    },
                    MinDamage: {
                        Physical: 10
                    }
                },
                ImpactDamage: {
                    Physical: 11
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 90,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 8,
                HeatPerShot: 0,
                WearPerShot: .17,
                Spread: {
                    Min: 4,
                    Max: 4,
                    FirstAttack: 4,
                    PerAttack: .5,
                    Decay: 1
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .55,
                        Max: .55,
                        FirstAttack: .55,
                        PerAttack: .55,
                        Decay: .55
                    }
                },
                DamagePerShot: {
                    Physical: 88
                },
                DamagePerSecond: {
                    Physical: 132
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_shotgun_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_shotgun_ballistic_01_mag",
                Size: 1,
                Mass: .98,
                Volume: 2400,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "BR-2 Shotgun Magazine (12 cap)",
                Description: "This magazine for the Behring BR-2 shotgun holds twelve 12-gauge rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_shotgun_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 12,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "shotgun"],
            PortTags: ["behr_shotgun_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "shotgun"]
        }, {
            PortName: "barrel_attach",
            MinSize: 3,
            MaxSize: 3,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "shotgun"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "shotgun"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "shotgun"]
        }]
    }
}, {
    className: "behr_smg_ballistic_01",
    reference: "bc644573-ea0f-4974-b23c-63b24425f639",
    itemName: "behr_smg_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked behr_smg_ballistic_01 smg",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namebehr_smg_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_smg_ballistic_01",
        Size: 2,
        Mass: 2.75,
        Volume: 7700,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "P8-SC SMG",
        Description: "Magazine Size: 45Rate Of Fire: 800 rpmEffective Range: 30 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)When the top fighting force in the universe chooses a weapon as their standard, it pays to stand up and take notice. The Behring-crafted P8-SC has been the ballistic submachine gun of choice for the UEE Marines since it first came off the production line, but since then, many have come to rely on this weapon for their own personal safety and protection.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "behr_smg_ballistic_01", "smg"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 500,
                LifeTime: 1.9,
                Range: 950,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 15
                    },
                    DropPerMeter: {
                        Physical: .06
                    },
                    MinDamage: {
                        Physical: 10
                    }
                },
                ImpactDamage: {
                    Physical: 13.75
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 800,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: .3,
                    Max: 4.76,
                    FirstAttack: 1.48,
                    PerAttack: 1.23,
                    Decay: 8
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 13.75
                },
                DamagePerSecond: {
                    Physical: 183.33
                }
            }, {
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 850,
                FireType: "burst 3",
                ShotPerAction: 3,
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 3,
                WearPerShot: 0,
                Spread: {
                    Min: .09,
                    Max: 2.78,
                    FirstAttack: 1.36,
                    PerAttack: 1.25,
                    Decay: 5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 13.75
                },
                DamagePerSecond: {
                    Physical: 194.79
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_smg_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_smg_ballistic_01_mag",
                Size: 1,
                Mass: .43,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "P8-SC SMG Magazine (45 cap)",
                Description: "This magazine for the Behring P8-SC SMG holds forty-five 10mm rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_smg_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 45,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "behr_smg_ballistic_01", "smg"],
            PortTags: ["behr_smg_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_smg_ballistic_01", "smg"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_smg_ballistic_01", "smg"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_smg_ballistic_01", "smg"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "behr_smg_ballistic_01", "smg"]
        }]
    }
}, {
    className: "behr_sniper_ballistic_01",
    reference: "01f2b88a-9752-4cd8-9f73-d151b4b2ca61",
    itemName: "behr_sniper_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked behr_sniper_ballistic_01 sniper",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namebehr_sniper_ballistic_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "behr_sniper_ballistic_01",
        Size: 3,
        Mass: 7.5,
        Volume: 16e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "P6-LR Sniper Rifle",
        Description: "Magazine Size: 8Rate Of Fire: 20 rpmEffective Range: 120 mAttachments: Optics (S3), Barrel (S2), Underbarrel (S2)The Behring P6-LR ballistic sniper rifle more than makes up for its slow rate of fire with a high powered 8mm round that's effective from long range. Featuring a scope with variable zoom modes and a barrel composed of a proprietary high-strength alloy, the P6-LR was designed to deliver when needed most.        ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 725,
                LifeTime: 2,
                Range: 1450,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 550
                    },
                    DropPerMeter: {
                        Physical: 10
                    },
                    MinDamage: {
                        Physical: 90
                    }
                },
                ImpactDamage: {
                    Physical: 100
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 55,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .25,
                Spread: {
                    Min: 11,
                    Max: 21,
                    FirstAttack: 11,
                    PerAttack: 10,
                    Decay: 10
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Physical: 100
                },
                DamagePerSecond: {
                    Physical: 91.67
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "behr_sniper_ballistic_01_mag",
            InstalledItem: {
                ClassName: "behr_sniper_ballistic_01_mag",
                Size: 1,
                Mass: .9,
                Volume: 990,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "P6-LR Magazine (8 cap)",
                Description: "This magazine for the Behring P6-LR sniper rifle holds eight 8mm rounds.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                Tags: ["behr_sniper_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 8,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"],
            PortTags: ["behr_sniper_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 3,
            Loadout: "behr_optics_tsco_x8_s3",
            InstalledItem: {
                ClassName: "behr_optics_tsco_x8_s3",
                Size: 3,
                Mass: .1,
                Volume: 1900,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.IronSight",
                Name: "EE08 (8x Telescopic)",
                Description: "Get a clear view of your target from afar with the EE08. Behring craftsmanship produced a 8x scope that's lightweight, durable, and deadly accurate. A rigorous 22-step testing process ensures the EE08 can deliver precision targeting even after encountering extreme weather or surviving battlefield wear and tear.",
                Manufacturer: {
                    Code: "BEH",
                    Name: "Behring"
                },
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                WeaponModifier: {
                    DamageModifier: {
                        DamageMultiplier: 1,
                        DamageOverTimeMultiplier: 1,
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        AmmoCostMultiplier: 1
                    },
                    RecoilModifier: {
                        YawMaxDegrees: 1,
                        PitchMaxDegrees: 1,
                        RollMaxDegrees: 1
                    },
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    },
                    AimModifier: {
                        ZoomScale: 8,
                        SecondZoomScale: 1,
                        ZoomTimeScale: 1
                    },
                    BarrelEffectsStrength: 1,
                    ChargeTimeMultiplier: 1,
                    SoundRadiusMultiplier: 1
                }
            },
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "behr_sniper_ballistic_01", "sniper"]
        }]
    }
}, {
    className: "crlf_medgun_01",
    reference: "3ad9e5f0-8c8f-42b4-adc9-fed1435c8d26",
    itemName: "crlf_medgun_01",
    type: "WeaponPersonal",
    subType: "Gadget",
    tags: "crlf pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namecrlf_medgun_01",
    manufacturer: "CUR",
    classification: "FPS.Weapon.Gadget",
    stdItem: {
        ClassName: "crlf_medgun_01",
        Size: 1,
        Mass: 1.5,
        Volume: 2400,
        Grade: 1,
        Class: "",
        Type: "WeaponPersonal.Gadget",
        Classification: "FPS.Weapon.Gadget",
        Name: "ParaMed Medical Device",
        Description: "The ParaMed from CureLife is a professional-grade emergency medical device designed to stabilize patients suffering from possible life-threatening injuries. Offering extremely accurate diagnostics and dosing, the ParaMed can treat more patients and offer longer relief with less risk of overdose.",
        Manufacturer: {
            Code: "CUR",
            Name: "Curelife"
        },
        Tags: ["crlf", "pistol"],
        Durability: {
            Lifetime: 0
        },
        PowerConnection: {
            PowerBase: 1,
            PowerDraw: 50,
            PowerToEM: 0,
            PowerDrawRequestTime: 0,
            IdlePowerEmission: 0,
            ActivePowerEmission: 0,
            DecayRateEM: .15
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 18
                }
            },
            Firing: [],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        TractorBeam: {
            Tractor: [],
            Towing: []
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "crlf_medgun_vial_01",
            InstalledItem: {
                ClassName: "crlf_medgun_vial_01",
                Size: 1,
                Mass: .32,
                Volume: 130,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "ParaMed Refill",
                Description: "This vial is used to refill the ParaMed Medical Device with CureLife Pancea MedGel.",
                Manufacturer: {
                    Code: "CUR",
                    Name: "Curelife"
                },
                Tags: ["crlf_medgun_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 200,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["crlf", "pistol"],
            PortTags: ["crlf_medgun_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["crlf", "pistol"]
        }]
    }
}, {
    className: "gmni_lmg_ballistic_01",
    reference: "d52a4cbb-4791-476d-a104-9f21e8d3f855",
    itemName: "gmni_lmg_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked lmg gmni_lmg_ballistic_01",
    requiredTags: "",
    size: 4,
    grade: 1,
    name: "@item_Namegmni_lmg_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "gmni_lmg_ballistic_01",
        Size: 4,
        Mass: 10,
        Volume: 2e4,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "F55 LMG",
        Description: "Magazine Size: 150Rate Of Fire: 1000 rpmEffective Range: 30 mAttachments: Optics (S2), Barrel (N/A), Underbarrel (S3)Featuring an explosive rate of fire that tops at a 1000 rpm and Gemini's sleek and professional styling, the F55 is a light machine gun for discerning clientele who want the 'verse to know that they are not to be trifled with.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["stocked", "lmg", "gmni_lmg_ballistic_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 550,
                LifeTime: 2,
                Range: 1100,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 30
                    },
                    DropPerMeter: {
                        Physical: .0137
                    },
                    MinDamage: {
                        Physical: 5
                    }
                },
                ImpactDamage: {
                    Physical: 10
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: .4,
                SpinDownTime: .15,
                RoundsPerMinute: 1200,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .01,
                Spread: {
                    Min: 3,
                    Max: 13.5,
                    FirstAttack: 3,
                    PerAttack: 1.2,
                    Decay: 2.5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 10
                },
                DamagePerSecond: {
                    Physical: 200
                }
            }],
            Repool: {
                AmmoPerSecond: 20,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_lmg_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_lmg_ballistic_01_mag",
                Size: 1,
                Mass: 1.6,
                Volume: 2400,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "F55 LMG Magazine (150 cap)",
                Description: "This magazine for the Gemini F55 LMG holds one hundred and fifty 5mm rounds.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_lmg_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 150,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "lmg", "gmni_lmg_ballistic_01"],
            PortTags: ["gmni_lmg_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "gmni_lmg_ballistic_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 3,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "gmni_lmg_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "lmg", "gmni_lmg_ballistic_01"]
        }]
    }
}, {
    className: "gmni_pistol_ballistic_01",
    reference: "b15f7736-0010-4c85-b684-85118761d124",
    itemName: "gmni_pistol_ballistic_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegmni_pistol_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "gmni_pistol_ballistic_01",
        Size: 1,
        Mass: 1.1,
        Volume: 1100,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "LH86 Pistol",
        Description: "Magazine Size: 25Rate Of Fire: 1200 rpmEffective Range: 30 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)The LH86 from Gemini is a compact kinetic handgun designed for personal defense and close-quarter combat. A keen eye on ergonomics and balance coupled with hardy construction makes this pistol a natural fit for any shooter in any number of hostile conditions. The LH86 also comes with Tritium low-light sight and a twenty-five round magazine.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 500,
                LifeTime: 1.9,
                Range: 950,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 20
                    },
                    DropPerMeter: {
                        Physical: .1
                    },
                    MinDamage: {
                        Physical: 5
                    }
                },
                ImpactDamage: {
                    Physical: 13
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 950,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .08,
                Spread: {
                    Min: 0,
                    Max: 0,
                    FirstAttack: 0,
                    PerAttack: 0,
                    Decay: 0
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 13
                },
                DamagePerSecond: {
                    Physical: 205.83
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_pistol_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_pistol_ballistic_01_mag",
                Size: 1,
                Mass: .3,
                Volume: 90,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "LH86 Pistol Magazine (25 cap)",
                Description: "This combat-rated magazine for the Gemini LH86 holds twenty five 10mm rounds.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_pistol_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 25,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "gmni_rifle_ballistic_01",
    reference: "39086302-d8f9-457d-a746-255c511ea6cf",
    itemName: "gmni_rifle_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked rifle gmni_rifle_ballistic_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_NameGMNI_rifle_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "gmni_rifle_ballistic_01",
        Size: 2,
        Mass: 3.4,
        Volume: 13e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "S71 Rifle",
        Description: "Magazine Size: 30Rate Of Fire: 300 rpm / 900 rpmEffective Range: 50 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S2)With the S71, Gemini designed an ergonomic assault rifle ideal for mid-range engagements. Chambered with a smaller caliber round than other weapons in its class, the S71 has become popular among private military professionals for its sleek aesthetics and precise accuracy.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 1200,
                LifeTime: 2,
                Range: 2400,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 100
                    },
                    DropPerMeter: {
                        Physical: .1
                    },
                    MinDamage: {
                        Physical: 17.5
                    }
                },
                ImpactDamage: {
                    Physical: 21.5
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 500,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .07,
                Spread: {
                    Min: 3,
                    Max: 6,
                    FirstAttack: 1,
                    PerAttack: 1,
                    Decay: 5.5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 21.5
                },
                DamagePerSecond: {
                    Physical: 179.17
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_rifle_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_rifle_ballistic_01_mag",
                Size: 1,
                Mass: .5,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "S71 Rifle Magazine (30 cap)",
                Description: "This magazine for the Gemini S71 rifle holds thirty 5mm rounds.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_rifle_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 30,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"],
            PortTags: ["gmni_rifle_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "rifle", "gmni_rifle_ballistic_01"]
        }]
    }
}, {
    className: "gmni_shotgun_ballistic_01",
    reference: "4577e319-8762-4247-8050-882fabe0ea10",
    itemName: "gmni_shotgun_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked shotgun",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namegmni_shotgun_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "gmni_shotgun_ballistic_01",
        Size: 3,
        Mass: 4,
        Volume: 19e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "R97 Shotgun",
        Description: "Magazine Size: 18Rate Of Fire: 120 rpm / 60 rpmEffective Range: 15 m / 35 mAttachments: Optics (S1), Barrel (N/A), Underbarrel (S2)The R97 combines sleek design and stopping power for an elegant and effective close quarters weapon. This ballistic shotgun from Gemini features two distinct fire modes — a semi-auto wide spread mode ideal for dealing quick damage and a focused mode that offers increased range at the expense of some power. This combat flexibility has made the R97 a popular personal defense weapon across the Empire.  ",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["stocked", "shotgun"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 225,
                LifeTime: 2,
                Range: 450,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 12
                    },
                    DropPerMeter: {
                        Physical: .05
                    },
                    MinDamage: {
                        Physical: 1.25
                    }
                },
                ImpactDamage: {
                    Physical: 3.66
                }
            },
            Firing: [{
                Name: "Shotgun",
                LocalisedName: "[SHOTGUN]",
                RoundsPerMinute: 455,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 12,
                HeatPerShot: 0,
                WearPerShot: .2,
                Spread: {
                    Min: 2,
                    Max: 5.85,
                    FirstAttack: 2,
                    PerAttack: 1,
                    Decay: 2
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .66,
                        Max: .66,
                        FirstAttack: .66,
                        PerAttack: .66,
                        Decay: .66
                    }
                },
                DamagePerShot: {
                    Physical: 43.92
                },
                DamagePerSecond: {
                    Physical: 333.06
                }
            }, {
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 150,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 12,
                HeatPerShot: 0,
                WearPerShot: .2,
                Spread: {
                    Min: 4.2,
                    Max: 10,
                    FirstAttack: 4,
                    PerAttack: 4,
                    Decay: 5.25
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .66,
                        Max: .66,
                        FirstAttack: .66,
                        PerAttack: .66,
                        Decay: .66
                    }
                },
                DamagePerShot: {
                    Physical: 43.92
                },
                DamagePerSecond: {
                    Physical: 109.8
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_shotgun_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_shotgun_ballistic_01_mag",
                Size: 1,
                Mass: .88,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "R97 Shotgun Magazine (18 cap)",
                Description: "This magazine for the Gemini R97 ballistic shotgun comes pre-loaded with eighteen 12-gauge shells.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_shotgun_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 18,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "shotgun"],
            PortTags: ["gmni_shotgun_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "shotgun"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "shotgun"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "shotgun"]
        }]
    }
}, {
    className: "gmni_smg_ballistic_01",
    reference: "8e3e44bd-d289-4a8c-b2e6-289746b02d27",
    itemName: "gmni_smg_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked smg gmni_smg_ballistic_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_NameGMNI_smg_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "gmni_smg_ballistic_01",
        Size: 2,
        Mass: 2.75,
        Volume: 7700,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "C54 SMG",
        Description: "Magazine Size: 50Rate Of Fire: 1,100 rpmEffective Range: 35mAttachments: Barrel (S1), Optics (S1), Underbarrel (S1)Easy to handle and a beauty to behold with its purple accented styling, the C54 is a sleek and precisely balanced SMG from Gemini. Its lightweight polymer frame and ergonomic design makes it ideal for close quarter engagements. The C54 is capable of firing 10mm rounds on full auto to provide maximum support and target saturation to ensure that any engagement ends quick.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["stocked", "smg", "gmni_smg_ballistic_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 500,
                LifeTime: 1.9,
                Range: 950,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 15
                    },
                    DropPerMeter: {
                        Physical: .2
                    },
                    MinDamage: {
                        Physical: 7.5
                    }
                },
                ImpactDamage: {
                    Physical: 11.5
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 925,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .05,
                Spread: {
                    Min: 2,
                    Max: 6.5,
                    FirstAttack: 1.15,
                    PerAttack: 1.35,
                    Decay: 8.25
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 11.5
                },
                DamagePerSecond: {
                    Physical: 177.29
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_smg_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_smg_ballistic_01_mag",
                Size: 1,
                Mass: .3,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "C54 SMG Magazine (50 cap)",
                Description: "This magazine for the C54 SMG holds fifty 10mm rounds.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_smg_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 50,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "smg", "gmni_smg_ballistic_01"],
            PortTags: ["gmni_smg_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "gmni_smg_ballistic_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "gmni_smg_ballistic_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "gmni_smg_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "smg", "gmni_smg_ballistic_01"]
        }]
    }
}, {
    className: "gmni_sniper_ballistic_01",
    reference: "6b1fb5e8-f9ec-49bc-befb-c81b7c08c5ea",
    itemName: "gmni_sniper_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked gmni_sniper_ballistic_01",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namegmni_sniper_ballistic_01",
    manufacturer: "GEM",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "gmni_sniper_ballistic_01",
        Size: 3,
        Mass: 6,
        Volume: 16e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "A03 Sniper Rifle",
        Description: "Magazine Size: 15Rate Of Fire: 120 rpmEffective Range: 80 mAttachments: Optics (S3), Barrel (S2), Underbarrel (S2)Devastate at distance with the A03 sniper rifle. Masterfully designed by Gemini's Tevarin co-founder Clem, the weapon balances a stylish and ergonomic design with a powerful ballistic punch. The A03 delivers an impressive rate of fire for a sniper rifle that sacrifices accuracy for urgency when successive shots are required. Considering its renowned design and unique features, it's easy to see why the A03 has become a favorite of security professionals across the empire.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        Tags: ["stocked", "gmni_sniper_ballistic_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 800,
                LifeTime: 2,
                Range: 1600,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 150
                    },
                    DropPerMeter: {
                        Physical: .02
                    },
                    MinDamage: {
                        Physical: 35
                    }
                },
                ImpactDamage: {
                    Physical: 42.5
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 225,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .13,
                Spread: {
                    Min: 7,
                    Max: 15,
                    FirstAttack: 4.5,
                    PerAttack: 4.5,
                    Decay: 4
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Physical: 42.5
                },
                DamagePerSecond: {
                    Physical: 159.38
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "gmni_sniper_ballistic_01_mag",
            InstalledItem: {
                ClassName: "gmni_sniper_ballistic_01_mag",
                Size: 1,
                Mass: .9,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "A03 Sniper Rifle Magazine (15 cap)",
                Description: "This magazine for the Gemini A03 sniper rifle holds fifteen 7mm rounds.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                Tags: ["gmni_sniper_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 15,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "gmni_sniper_ballistic_01"],
            PortTags: ["gmni_sniper_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 3,
            Loadout: "gmni_optics_tsco_x8_s3",
            InstalledItem: {
                ClassName: "gmni_optics_tsco_x8_s3",
                Size: 3,
                Mass: .1,
                Volume: 1900,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.IronSight",
                Name: "OT8-RF (8x Telescopic)",
                Description: "Combining a premium 8x telescopic sight with Gemini's innovative echoburst rangefinder, the OT8-RF model allows you to accurately gauge the distance to your target; vital for effective precision shooting. The standard scope for Gemni's A03 Sniper Rifle, the OT8-RF is engineered to impress in a variety of situations and engagements.",
                Manufacturer: {
                    Code: "GEM",
                    Name: "Gemini"
                },
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                WeaponModifier: {
                    DamageModifier: {
                        DamageMultiplier: 1,
                        DamageOverTimeMultiplier: 1,
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        AmmoCostMultiplier: 1
                    },
                    RecoilModifier: {
                        YawMaxDegrees: 1,
                        PitchMaxDegrees: 1,
                        RollMaxDegrees: 1
                    },
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    },
                    AimModifier: {
                        ZoomScale: 8,
                        SecondZoomScale: 1,
                        ZoomTimeScale: 1
                    },
                    BarrelEffectsStrength: 1,
                    ChargeTimeMultiplier: 1,
                    SoundRadiusMultiplier: 1
                }
            },
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "gmni_sniper_ballistic_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["stocked", "gmni_sniper_ballistic_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "gmni_sniper_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "gmni_sniper_ballistic_01"]
        }]
    }
}, {
    className: "grin_cutter_01",
    reference: "992f3584-e14e-436c-9c08-235427f846f9",
    itemName: "grin_cutter_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked grin_cutter_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namegrin_cutter_01",
    manufacturer: "GRIN",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "grin_cutter_01",
        Size: 2,
        Mass: 4,
        Volume: 13e3,
        Grade: 1,
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "grin_cutter_01",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["stocked", "grin_cutter_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 1200,
                LifeTime: 4,
                Range: 4800,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 19
                }
            },
            Firing: [{
                Name: "",
                LocalisedName: "@LOC_PLACEHOLDER",
                RoundsPerMinute: 0,
                FireType: "beam",
                AmmoPerShot: 0,
                PelletsPerShot: 0,
                HeatPerShot: 0,
                WearPerShot: 0,
                DamagePerShot: {},
                DamagePerSecond: {}
            }],
            Repool: {
                AmmoPerSecond: 30,
                UnstowMagDuration: 3,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "grin_tool_01_mag",
            InstalledItem: {
                ClassName: "grin_tool_01_mag",
                Size: 1,
                Mass: .5,
                Volume: 280,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Cambrio SRT Battery",
                Description: "This replacement battery powers Greycat's Cambrio salvage and repair tool, allowing your work to continue unabated.",
                Manufacturer: {
                    Code: "GRIN",
                    Name: "Greycat Industrial"
                },
                Tags: ["grin_salvage_repair_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 50,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "grin_cutter_01"],
            PortTags: ["grin_cutter_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "grin_cutter_01"]
        }]
    }
}, {
    className: "grin_multitool_01",
    reference: "396ccb0d-c251-484d-998e-cc3616a37ee5",
    itemName: "grin_multitool_01",
    type: "WeaponPersonal",
    subType: "Gadget",
    tags: "stocked multitool SM_RestrictedWep",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01",
    manufacturer: "GRIN",
    classification: "FPS.Weapon.Gadget",
    stdItem: {
        ClassName: "grin_multitool_01",
        Size: 1,
        Mass: 1.5,
        Volume: 1700,
        Grade: 1,
        Class: "Gadget",
        Type: "WeaponPersonal.Gadget",
        Classification: "FPS.Weapon.Gadget",
        Name: "Pyro RYT Multi-Tool",
        Description: "Manufacturer: Greycat IndustrialItem Type: UtilityClass: GadgetMagazine Size: Integrated BatteryRate of Fire: N / A (Beam)Effective Range: 0.5 mThe Pyro from Greycat Industrial is a pistol-sized power tool for the modern space engineer that is capable of charging, cutting and patching; achieving a multitude of uses thanks to its wide assortment of attachments. Perfect for making a tough job a little bit easier.",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["stocked", "multitool", "SM_RestrictedWep"],
        PowerConnection: {
            PowerBase: 1,
            PowerDraw: 50,
            PowerToEM: 0,
            PowerDrawRequestTime: 0,
            IdlePowerEmission: 0,
            ActivePowerEmission: 0,
            DecayRateEM: .15
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 18
                }
            },
            Firing: [{
                Name: "Detach",
                LocalisedName: "Tractor",
                RoundsPerMinute: 0,
                FireType: "tractorbeam",
                AmmoPerShot: 0,
                PelletsPerShot: 0,
                HeatPerShot: 0,
                WearPerShot: 0,
                DamagePerShot: {},
                DamagePerSecond: {}
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        MiningLaser: {
            ThrottleLerpSpeed: 10,
            ThrottleMinimum: .001,
            Firing: [{
                LaserPower: 0,
                FullDamageDistance: 0,
                MinDamageDistance: 0
            }]
        },
        Radar: {
            IR: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            EM: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            CS: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            DB: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            RS: {
                Sensitivity: 1,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            ID: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            Scan1: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            },
            Scan2: {
                Sensitivity: 0,
                GroundSensitivity: 0,
                Piercing: .25,
                PermitPassiveDetection: !0,
                PermitActiveDetection: !0
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "grin_multitool_energy_01_mag",
            InstalledItem: {
                ClassName: "grin_multitool_energy_01_mag",
                Size: 1,
                Mass: .32,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Pyro RYT Multi-Tool Battery",
                Description: "This battery powers Greycat's Pyro RYT Multi-Tool, so that you can tackle a variety of tasks.",
                Manufacturer: {
                    Code: "GRIN",
                    Name: "Greycat Industrial"
                },
                Tags: ["grin_multitool_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 100,
                    AllowRepool: !1
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "multitool", "SM_RestrictedWep"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "multitool", "SM_RestrictedWep"]
        }, {
            PortName: "weapon_action_attachment",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Personal"],
            Tags: ["stocked", "multitool", "SM_RestrictedWep"]
        }, {
            PortName: "module_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Utility"],
            Flags: ["inventory"],
            Tags: ["stocked", "multitool", "SM_RestrictedWep"],
            PortTags: ["grin_multitool_01"]
        }, {
            PortName: "canister_attach",
            MinSize: 0,
            MaxSize: 1,
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "multitool", "SM_RestrictedWep"]
        }]
    }
}, {
    className: "grin_tractor_01",
    reference: "27adea05-f94d-4439-872d-b043a631c34f",
    itemName: "grin_tractor_01",
    type: "WeaponPersonal",
    subType: "Gadget",
    tags: "stocked grin_tractor_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namegrin_tractor_01",
    manufacturer: "GRIN",
    classification: "FPS.Weapon.Gadget",
    stdItem: {
        ClassName: "grin_tractor_01",
        Size: 2,
        Mass: 4,
        Volume: 16862,
        Grade: 1,
        Class: "Gadget",
        Type: "WeaponPersonal.Gadget",
        Classification: "FPS.Weapon.Gadget",
        Name: "MaxLift Tractor Beam",
        Description: "Magazine Size: Integrated BatteryRate of Fire: N / A (Beam)Effective Range: 10-20 mGreycat's heavy duty tractor beam boasts industrial performance at a consumer-friendly price. With its longer-lasting battery and wider beam emitter, the MaxLift can easily manipulate heavier and bulkier items making it the perfect tool for long days of hauling cargo.",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["stocked", "grin_tractor_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 1200,
                LifeTime: 4,
                Range: 4800,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 19
                }
            },
            Firing: [{
                Name: "Detach",
                LocalisedName: "Tractor",
                RoundsPerMinute: 0,
                FireType: "tractorbeam",
                AmmoPerShot: 0,
                PelletsPerShot: 0,
                HeatPerShot: 0,
                WearPerShot: 0,
                DamagePerShot: {},
                DamagePerSecond: {}
            }],
            Repool: {
                AmmoPerSecond: 30,
                UnstowMagDuration: 3,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "grin_tractor_01_mag",
            InstalledItem: {
                ClassName: "grin_tractor_01_mag",
                Size: 1,
                Mass: .5,
                Volume: 280,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "MaxLift Tractor Beam Battery",
                Description: "This replacement battery powers Greycat's MaxLift tractor beam, so you can keep working without any delay.",
                Manufacturer: {
                    Code: "GRIN",
                    Name: "Greycat Industrial"
                },
                Tags: ["grin_tractor_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 60,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "grin_tractor_01"],
            PortTags: ["grin_tractor_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "grin_tractor_01"]
        }]
    }
}, {
    className: "hdgw_pistol_ballistic_01",
    reference: "3b6d199f-9eaa-4bcd-b607-398f7f50482c",
    itemName: "hdgw_pistol_ballistic_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namehdgw_pistol_ballistic_01",
    manufacturer: "HDGW",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "hdgw_pistol_ballistic_01",
        Size: 1,
        Mass: 1,
        Volume: 1100,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "Salvo Frag Pistol",
        Description: "Magazine Size: 8Rate Of Fire: 140 rpmEffective Range: 80 m / 10 m (Charged)Attachments: Optics (S1), Barrel (S1), Underbarrel (S1)While the Salvo can be used as a normal pistol, Hedeby didn’t stop there. With a longer trigger pull, a freezing primer is injected into the chamber and when released, the heavy firing pin hits with enough force to pulverize the supercooled casing. Accidentally developed as an attempt to mitigate overheating, this charged fire option discharges a deadly spray of high-velocity fragments followed by an ear-shattering boom.",
        Manufacturer: {
            Code: "HDGW",
            Name: "Hedeby Gunworks"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 550,
                LifeTime: 2,
                Range: 1100,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 30
                    },
                    DropPerMeter: {
                        Physical: .08
                    },
                    MinDamage: {
                        Physical: 25
                    }
                },
                ImpactDamage: {
                    Physical: 45
                }
            },
            Firing: [{
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 55.4,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 8,
                HeatPerShot: 0,
                WearPerShot: .25,
                Spread: {
                    Min: .22,
                    Max: 3.1,
                    FirstAttack: 1.4,
                    PerAttack: 1.4,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: .6,
                        PerAttack: .6,
                        Decay: .8
                    }
                },
                FireChargedParameters: {
                    ChargeTime: 1,
                    OverchargeTime: 5,
                    OverchargedTime: 1.5,
                    Cooldown: 0,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        DamageMultiplier: .25,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Physical: 90
                },
                DamagePerSecond: {
                    Physical: 83.1
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "hdgw_pistol_ballistic_01_mag",
            InstalledItem: {
                ClassName: "hdgw_pistol_ballistic_01_mag",
                Size: 1,
                Mass: .35,
                Volume: 90,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Salvo Frag Pistol Magazine (8 cap)",
                Description: "This magazine for the Salvo Frag Pistol holds eight .50 caliber rounds.",
                Manufacturer: {
                    Code: "HDGW",
                    Name: "Hedeby Gunworks"
                },
                Tags: ["hdgw_pistol_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 8,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "kegr_fire_extinguisher_01",
    reference: "1b6a6b76-f3fc-402c-a24a-204f2eeae6f7",
    itemName: "kegr_fire_extinguisher_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked kegr_fire_extinguisher_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namekegr_fire_extinguisher_01",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "kegr_fire_extinguisher_01",
        Size: 2,
        Mass: 3.2,
        Volume: 13e3,
        Grade: 1,
        Class: "Gadget",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "APX Fire Extinguisher",
        Description: "Magazine Size: Gas CanisterRate of Fire: ConstantEffective Range: 3-4 mThe KE Group's APX Fire Extinguisher has been rated a best-in-class consumer grade safety equipment for well-over a decade making it the industry standard in fire prevention. Filled with a patented gaseous cooling compound, the extinguisher can rapidly smother any fire in sight. The digital screen on the device allows you to monitor the local temperature to help you contain and eliminate fire hazards.",
        Tags: ["stocked", "kegr_fire_extinguisher_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Thermal: 18
                }
            },
            Firing: [],
            Repool: {
                AmmoPerSecond: 30,
                UnstowMagDuration: 3,
                MagMergeDuration: .01
            },
            Consumption: {
                RequestedRegenPerSec: 0,
                Cooldown: 3,
                CostPerBullet: 1,
                RequestedAmmoLoad: 100,
                MaxAmmo: 75,
                MaxRegenPerSec: 15
            }
        },
        TractorBeam: {
            Tractor: [],
            Towing: []
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "kegr_fire_extinguisher_01_mag",
            InstalledItem: {
                ClassName: "kegr_fire_extinguisher_01_mag",
                Size: 1,
                Mass: 10,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "APX Fire Extinguisher Canister ",
                Description: "This canister refills the APX Fire Extinguisher with a full tank of the KE Group's patented cooling compound.",
                Manufacturer: {
                    Code: "GRIN",
                    Name: "Greycat Industrial"
                },
                Tags: ["kegr_fire_extinguisher_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 2e3,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "kegr_fire_extinguisher_01"],
            PortTags: ["kegr_fire_extinguisher_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "kegr_fire_extinguisher_01"]
        }, {
            PortName: "root",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "kegr_fire_extinguisher_01"],
            PortTags: ["kegr_fire_extinguisher_01"]
        }]
    }
}, {
    className: "klwe_lmg_energy_01",
    reference: "b13a3815-92e7-4e09-962f-b24bcdaf3a42",
    itemName: "klwe_lmg_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked lmg klwe_lmg_energy_01",
    requiredTags: "",
    size: 4,
    grade: 1,
    name: "@item_Nameklwe_lmg_energy_01",
    manufacturer: "KLA",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "klwe_lmg_energy_01",
        Size: 4,
        Mass: 10,
        Volume: 2e4,
        Grade: 1,
        Class: "Energy (Laser)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Demeco LMG",
        Description: "Battery Size: 100Rate Of Fire: 400 rpmEffective Range: 40 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S3)Klaus & Werner has created an iconic weapon with tried and true Demeco laser LMG. Used extensively in military engagements, this short-to-mid-range infantry favorite has been constructed with stability and accuracy at the forefront. ",
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        Tags: ["stocked", "lmg", "klwe_lmg_energy_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 28.57143,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 600,
                LifeTime: 4,
                Range: 2400,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 11.5
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 800,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 1,
                WearPerShot: .02,
                Spread: {
                    Min: .2,
                    Max: 6,
                    FirstAttack: 2.5,
                    PerAttack: 2.5,
                    Decay: 10
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 11.5
                },
                DamagePerSecond: {
                    Energy: 153.33
                }
            }],
            Repool: {
                AmmoPerSecond: 20,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "klwe_lmg_energy_01_mag",
            InstalledItem: {
                ClassName: "klwe_lmg_energy_01_mag",
                Size: 1,
                Mass: 1.62,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Demeco LMG Battery (100 cap)",
                Description: "This is a replacement battery for Klaus & Werner's iconic light machine gun, the Demeco.",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                Tags: ["klwe_lmg_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 100,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "lmg", "klwe_lmg_energy_01"],
            PortTags: ["klwe_lmg_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "klwe_lmg_energy_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "lmg", "klwe_lmg_energy_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 3,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "lmg", "klwe_lmg_energy_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "lmg", "klwe_lmg_energy_01"]
        }]
    }
}, {
    className: "klwe_pistol_energy_01",
    reference: "0ff9144c-970d-4861-ae27-b27ee3c969a9",
    itemName: "klwe_pistol_energy_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameklwe_pistol_energy_01",
    manufacturer: "KLA",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "klwe_pistol_energy_01",
        Size: 1,
        Mass: 1.5,
        Volume: 1100,
        Grade: 1,
        Class: "Energy (Laser)",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "Arclight Pistol",
        Description: "Battery Size: 30Rate Of Fire: 300 rpmEffective Range: 30 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)A handheld laser made famous as Kyle Fenris’ sidearm on the hit vid show The Frontier, the Klaus & Werner Model II Arclight has become extremely popular on the civilian market. Despite its media appeal, the Model II offers a higher rate of fire than any of its ballistic counterparts. While that may diminish the weapon's stopping power, its power cell offers more than enough shots to finish the job.",
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 28.57143,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 18
                }
            },
            Firing: [{
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 700,
                FireType: "burst 3",
                ShotPerAction: 3,
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 4,
                WearPerShot: .07,
                Spread: {
                    Min: .08,
                    Max: 2.94,
                    FirstAttack: 1.24,
                    PerAttack: 1.24,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 18
                },
                DamagePerSecond: {
                    Energy: 210
                }
            }, {
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 500,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 3,
                WearPerShot: 0,
                Spread: {
                    Min: .08,
                    Max: 2.94,
                    FirstAttack: 1.24,
                    PerAttack: 1.24,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 18
                },
                DamagePerSecond: {
                    Energy: 150
                }
            }],
            Repool: {
                AmmoPerSecond: 8,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "klwe_pistol_energy_01_mag",
            InstalledItem: {
                ClassName: "klwe_pistol_energy_01_mag",
                Size: 1,
                Mass: .32,
                Volume: 180,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Arclight Pistol Battery (30 cap)",
                Description: "This plasma cell has enough capacity for the Klaus & Werner Arclight pistol to fire 30 rounds before needing a recharge. ",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                Tags: ["klwe_pistol_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 30,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "klwe_rifle_energy_01",
    reference: "8bc41f99-ad80-4050-99ff-958c0b54c973",
    itemName: "klwe_rifle_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked klwe_rifle_energy_01 rifle",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Nameklwe_rifle_energy_01",
    manufacturer: "KLA",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "klwe_rifle_energy_01",
        Size: 2,
        Mass: 3.7,
        Volume: 13e3,
        Grade: 1,
        Class: "Energy (Laser)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Gallant Rifle",
        Description: "Battery Size: 45Rate Of Fire: 450 rpmEffective Range: 50 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S2)Dependable assault weapons never go out of style. Klaus & Werner maintains that tradition by unveiling the Gallant. This energy-based assault rifle is capable of providing accurate and sustained fire at targets up to medium range, while its high-capacity power system allows operators to fire considerably more shots per battery.",
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        Tags: ["stocked", "klwe_rifle_energy_01", "rifle"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 3,
                TimeTillCoolingStarts: 1,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 1200,
                LifeTime: 4,
                Range: 4800,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 19
                }
            },
            Firing: [{
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 900,
                FireType: "burst 3",
                ShotPerAction: 3,
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 2.8,
                WearPerShot: .04,
                Spread: {
                    Min: .05,
                    Max: 2.41,
                    FirstAttack: 1.21,
                    PerAttack: 1.03,
                    Decay: 5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 19
                },
                DamagePerSecond: {
                    Energy: 285
                }
            }, {
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 825,
                FireType: "burst 5",
                ShotPerAction: 5,
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 4,
                WearPerShot: .04,
                Spread: {
                    Min: .05,
                    Max: 2.41,
                    FirstAttack: 1.21,
                    PerAttack: 1.03,
                    Decay: 5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 19
                },
                DamagePerSecond: {
                    Energy: 261.25
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "klwe_rifle_energy_01_mag",
            InstalledItem: {
                ClassName: "klwe_rifle_energy_01_mag",
                Size: 1,
                Mass: .6,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Gallant Rifle Battery (45 cap)",
                Description: "This high-capacity battery sets itself apart by powering the Klaus & Werner Gallant energy rifle for 45 shots per charge. ",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                Tags: ["klwe_rifle_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 45,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "klwe_rifle_energy_01", "rifle"],
            PortTags: ["klwe_rifle_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "klwe_rifle_energy_01", "rifle"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "klwe_rifle_energy_01", "rifle"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "klwe_rifle_energy_01", "rifle"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "klwe_rifle_energy_01", "rifle"]
        }]
    }
}, {
    className: "klwe_smg_energy_01",
    reference: "75809555-848a-4f4d-81a0-db4457edba2d",
    itemName: "klwe_smg_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked smg klwe_smg_energy_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Nameklwe_smg_energy_01",
    manufacturer: "KLA",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "klwe_smg_energy_01",
        Size: 2,
        Mass: 3.2,
        Volume: 7700,
        Grade: 1,
        Class: "Laser",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Lumin V SMG",
        Description: `Battery Size: 45Rate Of Fire: 562.5 rpmEffective Range: 25mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)Klaus & Werner's expert craftsmanship is once again on full display to make the Lumin V laser compact energy rifle even more deadly and dependable. A new "interval autofire" mode blasts five-round barrages when the trigger is held down, utilizing the target saturation that comes with autofire while providing breaks to recompensate aim. Even when constantly on the attack, the gun's excellent design provides low recoil and a tight spread.`,
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        Tags: ["stocked", "smg", "klwe_smg_energy_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 36.36,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 21
                }
            },
            Firing: [{
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 700,
                FireType: "sequence",
                ShotPerAction: 3,
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 3,
                WearPerShot: 0,
                Spread: {
                    Min: .06,
                    Max: .3,
                    FirstAttack: .3,
                    PerAttack: .3,
                    Decay: 4
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 21
                },
                DamagePerSecond: {
                    Energy: 245
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "klwe_smg_energy_01_mag",
            InstalledItem: {
                ClassName: "klwe_smg_energy_01_mag",
                Size: 1,
                Mass: .6,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Lumin V SMG Battery (45 cap)",
                Description: "Replacement battery for Klaus & Werner's Lumin V SMG.",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                Tags: ["klwe_smg_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 45,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "smg", "klwe_smg_energy_01"],
            PortTags: ["klwe_smg_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "klwe_smg_energy_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "smg", "klwe_smg_energy_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "klwe_smg_energy_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "smg", "klwe_smg_energy_01"]
        }]
    }
}, {
    className: "klwe_sniper_energy_01",
    reference: "5ea1071e-2dc7-4c96-8ae7-aa10775a093a",
    itemName: "klwe_sniper_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked klwe_sniper_energy_01 sniper",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameklwe_sniper_energy_01",
    manufacturer: "KLA",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "klwe_sniper_energy_01",
        Size: 3,
        Mass: 7.5,
        Volume: 16e3,
        Grade: 1,
        Class: "Energy (Laser)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Arrowhead Sniper Rifle",
        Description: "Battery Size: 20Rate Of Fire: 50 rpmEffective Range: 100 mAttachments: Optics (S3), Barrel (S2), Underbarrel (S2)Klaus & Werner’s Arrowhead Model VI long-range energy rifle features a fiberglass composite body capable of withstanding any number of rigorous environments both in atmosphere and out. Built with a precision stock, compound scope and built-in bipod, the Arrowhead offers a stable and devastating weapon for operators who want to keep their distance, but stay in the fight.",
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        Tags: ["stocked", "klwe_sniper_energy_01", "sniper"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 36.36,
                TimeTillCoolingStarts: 5,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 1e3,
                LifeTime: 4,
                Range: 4e3,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 50
                }
            },
            Firing: [{
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 44.2,
                AmmoSpeed: 4e3,
                AmmoRange: 16e3,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 15,
                WearPerShot: .13,
                Spread: {
                    Min: 5,
                    Max: 12.5,
                    FirstAttack: 4.5,
                    PerAttack: 4.5,
                    Decay: 3.5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                FireChargedParameters: {
                    ChargeTime: .5,
                    OverchargeTime: 6,
                    OverchargedTime: 2.5,
                    Cooldown: 0,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 4,
                        DamageMultiplier: 1.5,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Energy: 75
                },
                DamagePerSecond: {
                    Energy: 55.25
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "klwe_sniper_energy_01_mag",
            InstalledItem: {
                ClassName: "klwe_sniper_energy_01_mag",
                Size: 1,
                Mass: .74,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Arrowhead Sniper Rifle Battery (16 cap)",
                Description: "This compact power source provides the Klaus & Werner Arrowhead rifle enough energy for 16 long-range precise shots.",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                Tags: ["klwe_sniper_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 16,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "klwe_sniper_energy_01", "sniper"],
            PortTags: ["klwe_sniper_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 3,
            Loadout: "klwe_optics_disp_x8_s3",
            InstalledItem: {
                ClassName: "klwe_optics_disp_x8_s3",
                Size: 3,
                Mass: .1,
                Volume: 1900,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.IronSight",
                Name: "Touchstone (8x Monitor)",
                Description: "While conventional scopes can induce eyestrain after extended periods of use, the Touchstone 8x monitor from Klaus & Werner provides ultra-critical eye relief and allows for “heads up” shooting where you are able to simultaneously track targets and observe environmental conditions. Built to cater to a variety of shooters, the Touchstone's reliability and clarity makes it the ideal choice for tactical rifles like the Arrowhead.",
                Manufacturer: {
                    Code: "KLA",
                    Name: "Klaus & Werner"
                },
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                WeaponModifier: {
                    DamageModifier: {
                        DamageMultiplier: 1,
                        DamageOverTimeMultiplier: 1,
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        AmmoCostMultiplier: 1
                    },
                    RecoilModifier: {
                        YawMaxDegrees: 1,
                        PitchMaxDegrees: 1,
                        RollMaxDegrees: 1
                    },
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    },
                    AimModifier: {
                        ZoomScale: 8,
                        SecondZoomScale: 1,
                        ZoomTimeScale: 1
                    },
                    BarrelEffectsStrength: 1,
                    ChargeTimeMultiplier: 1,
                    SoundRadiusMultiplier: 1
                }
            },
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "klwe_sniper_energy_01", "sniper"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "klwe_sniper_energy_01", "sniper"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "klwe_sniper_energy_01", "sniper"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "klwe_sniper_energy_01", "sniper"]
        }]
    }
}, {
    className: "ksar_pistol_ballistic_01",
    reference: "b97279f7-b795-4f17-9458-022068edd98f",
    itemName: "ksar_pistol_ballistic_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_NameKSAR_pistol_ballistic_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "ksar_pistol_ballistic_01",
        Size: 1,
        Mass: 1.1,
        Volume: 1100,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "Coda Pistol",
        Description: `Magazine Size: 6Rate Of Fire: 180 rpm Effective Range: 100 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)Often called the Kastak Arms "hand cannon," the Coda can end an engagement with a single .50 caliber round, although the substantial power can make the Coda's recoil hard to handle. Considering its limited magazine size and substantial kick, sustained fire is discouraged in favor of more accurate single shots.    `,
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 550,
                LifeTime: 2,
                Range: 1100,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 55
                    },
                    DropPerMeter: {
                        Physical: .2
                    },
                    MinDamage: {
                        Physical: 35
                    }
                },
                ImpactDamage: {
                    Physical: 60
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 180,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .33,
                Spread: {
                    Min: .75,
                    Max: 7,
                    FirstAttack: 1.35,
                    PerAttack: 3,
                    Decay: .5
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Physical: 60
                },
                DamagePerSecond: {
                    Physical: 180
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_pistol_ballistic_01_mag",
            InstalledItem: {
                ClassName: "ksar_pistol_ballistic_01_mag",
                Size: 1,
                Mass: .3,
                Volume: 220,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Coda Pistol Magazine (6 cap)",
                Description: "This magazine for the Kastak Arms Coda holds six .50 caliber rounds.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_pistol_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 6,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "ksar_rifle_energy_01",
    reference: "3825f6fa-bfcd-4ced-b207-47c2643a2258",
    itemName: "ksar_rifle_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked rifle ksar_rifle_energy_01",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameksar_rifle_energy_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "ksar_rifle_energy_01",
        Size: 3,
        Mass: 4.2,
        Volume: 13e3,
        Grade: 1,
        Class: "Energy (Plasma)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Karna Rifle",
        Description: "Battery Size: 35Rate Of Fire: 500 rpmEffective Range: 50 mAttachments: Optics (S2), Barrel (S2), Underbarrel (S2)The Karna is a classic Kastak Arms plasma assault rifle. This mid-range mauler features charged and full-auto fire modes to allow for quick and easy situational adjustments. Besides its renowned firepower, the Karna's rugged looks and reliability have made it one of Kastak Arms' most popular weapons. ",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "rifle", "ksar_rifle_energy_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 142.85,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Energy: 20
                    },
                    DropPerMeter: {
                        Energy: .11
                    },
                    MinDamage: {
                        Energy: 14.5
                    }
                },
                ImpactDamage: {
                    Energy: 17.5
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 600,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 8,
                WearPerShot: 0,
                Spread: {
                    Min: .1,
                    Max: 5.5,
                    FirstAttack: 1.37,
                    PerAttack: 1.3,
                    Decay: 6
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 17.5
                },
                DamagePerSecond: {
                    Energy: 175
                }
            }, {
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 27.6,
                AmmoSpeed: 1500,
                AmmoRange: 3e3,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 9,
                WearPerShot: 0,
                Spread: {
                    Min: 0,
                    Max: 0,
                    FirstAttack: 0,
                    PerAttack: 0,
                    Decay: 0
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                FireChargedParameters: {
                    ChargeTime: 2,
                    OverchargeTime: 10,
                    OverchargedTime: 5,
                    Cooldown: 0,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 2.5,
                        DamageMultiplier: 6,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Energy: 105
                },
                DamagePerSecond: {
                    Energy: 48.3
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_rifle_energy_01_mag",
            InstalledItem: {
                ClassName: "ksar_rifle_energy_01_mag",
                Size: 1,
                Mass: .6,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Karna Rifle Battery (35 cap)",
                Description: "This is a replacement battery for Kastak Arms' plasma assault rifle, the Karna.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_rifle_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 35,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "rifle", "ksar_rifle_energy_01"],
            PortTags: ["ksar_rifle_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "rifle", "ksar_rifle_energy_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 2,
            MaxSize: 2,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "rifle", "ksar_rifle_energy_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "rifle", "ksar_rifle_energy_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "rifle", "ksar_rifle_energy_01"]
        }]
    }
}, {
    className: "ksar_shotgun_ballistic_01",
    reference: "3ec76bc1-de5a-44f8-8469-783ec803d89d",
    itemName: "ksar_shotgun_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked ksar_shotgun_ballistic_01 shotgun",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameksar_shotgun_ballistic_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "ksar_shotgun_ballistic_01",
        Size: 3,
        Mass: 4.3,
        Volume: 19e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Ravager-212 Twin Shotgun",
        Description: "Magazine Size: 16Rate Of Fire: 105 rpmEffective Range: 15 mAttachments: Optics (S1), Barrel (N/A), Underbarrel (S2)The Kastak Arms Ravager-212 Twin shotgun earns its name from its unique dual-barrels that allow for multiple ammo types to be used in conjunction with each other for maximum tactical possibilities. ",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "ksar_shotgun_ballistic_01", "shotgun"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 300,
                LifeTime: 2,
                Range: 600,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 12
                    },
                    DropPerMeter: {
                        Physical: .05
                    },
                    MinDamage: {
                        Physical: 6
                    }
                },
                ImpactDamage: {
                    Physical: 6.5
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 800,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 8,
                HeatPerShot: 0,
                WearPerShot: .13,
                Spread: {
                    Min: 3,
                    Max: 4,
                    FirstAttack: 2,
                    PerAttack: 2,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .85,
                        Max: .9,
                        FirstAttack: .8,
                        PerAttack: .8,
                        Decay: .9
                    }
                },
                DamagePerShot: {
                    Physical: 52
                },
                DamagePerSecond: {
                    Physical: 693.33
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_shotgun_ballistic_01_mag",
            InstalledItem: {
                ClassName: "ksar_shotgun_ballistic_01_mag",
                Size: 1,
                Mass: .96,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Ravager-212 Twin Shotgun Magazine (16 cap)",
                Description: "This magazine for the Kastak Arms Ravager-212 Twin Shotgun holds sixteen 12-gauge shells.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_shotgun_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 16,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "ksar_shotgun_ballistic_01", "shotgun"],
            PortTags: ["ksar_shotgun_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "ksar_shotgun_ballistic_01", "shotgun"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "ksar_shotgun_ballistic_01", "shotgun"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "ksar_shotgun_ballistic_01", "shotgun"]
        }]
    }
}, {
    className: "ksar_shotgun_energy_01",
    reference: "e5b42569-10da-40a5-a16f-497f5b84cf3c",
    itemName: "ksar_shotgun_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked ksar_shotgun_energy_01 shotgun",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameksar_shotgun_energy_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "ksar_shotgun_energy_01",
        Size: 3,
        Mass: 4.3,
        Volume: 19e3,
        Grade: 1,
        Class: "Energy (Plasma)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Devastator Shotgun",
        Description: "Battery Size: 12Rate Of Fire: 60 rpmEffective Range: 20 mAttachments: Optics (S1), Barrel (S3), Underbarrel (S2)Kastak Arms’ Devastator is a pump-action plasma shotgun capable of delivering sustained medium range, high-impact plasma blasts for close combat, room clearances and other combat operations. If the situation requires a high-power presence, look no further than the Devastator.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"],
        Durability: {
            Lifetime: 0
        },
        HeatConnection: {
            StartCoolingTemperature: 300,
            StartIRTemperature: 250,
            TemperatureToIR: 6,
            ThermalEnergyBase: 10,
            ThermalEnergyDraw: 20,
            CoolingRate: 1,
            StartIREmission: 300,
            OverheatTemperature: 350,
            MaxTemperature: 450,
            RecoveryTemperature: 350
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 300,
                LifeTime: 2,
                Range: 600,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Energy: 14
                    },
                    DropPerMeter: {
                        Energy: .1
                    },
                    MinDamage: {
                        Energy: 5.5
                    }
                },
                ImpactDamage: {
                    Energy: 10
                }
            },
            Firing: [{
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 17.1,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 12,
                HeatPerShot: 0,
                WearPerShot: .17,
                Spread: {
                    Min: 3.75,
                    Max: 8,
                    FirstAttack: 3.75,
                    PerAttack: 6,
                    Decay: 10
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .65,
                        Max: .65,
                        FirstAttack: .65,
                        PerAttack: .65,
                        Decay: .65
                    }
                },
                FireChargedParameters: {
                    ChargeTime: 2.5,
                    OverchargeTime: 5,
                    OverchargedTime: 2,
                    Cooldown: 0,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        DamageMultiplier: 1.25,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Energy: 150
                },
                DamagePerSecond: {
                    Energy: 42.75
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_shotgun_energy_01_mag",
            InstalledItem: {
                ClassName: "ksar_shotgun_energy_01_mag",
                Size: 1,
                Mass: .88,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Devastator Shotgun Battery (12 cap)",
                Description: "This high-voltage plasma capacitor allows the Kastak Arms Devastator shotgun to fire twelve standard shots, or fewer over-charged shots. ",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_shotgun_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 12,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"],
            PortTags: ["ksar_shotgun_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"]
        }, {
            PortName: "barrel_attach",
            MinSize: 3,
            MaxSize: 3,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "ksar_shotgun_energy_01", "shotgun"]
        }]
    }
}, {
    className: "ksar_smg_energy_01",
    reference: "71ffee18-c359-4809-a4d0-3cb79bc32d30",
    itemName: "ksar_smg_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked smg ksar_smg_energy_01",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Nameksar_smg_energy_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "ksar_smg_energy_01",
        Size: 2,
        Mass: 2.75,
        Volume: 7700,
        Grade: 1,
        Class: "Energy (Laser)",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Custodian SMG",
        Description: "Battery Size: 60Rate Of Fire: 800 rpmEffective Range: 30 mAttachments: Optics (S1), Barrel (S1), Underbarrel (S1)The Custodian SMG from Kastak Arms focuses on a high rate of fire over damage and accuracy making it an ideal choice for sweeping through tight environments and close quarters combat.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "smg", "ksar_smg_energy_01"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 200,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 600,
                LifeTime: 2,
                Range: 1200,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {
                    Energy: 11.1
                }
            },
            Firing: [{
                Name: "Rapid",
                LocalisedName: "[AUTO]",
                SpinUpTime: 0,
                SpinDownTime: 0,
                RoundsPerMinute: 800,
                FireType: "rapid",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 4,
                WearPerShot: 0,
                Spread: {
                    Min: 2,
                    Max: 7.25,
                    FirstAttack: 1.35,
                    PerAttack: 1.02,
                    Decay: 8
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 11.1
                },
                DamagePerSecond: {
                    Energy: 148
                }
            }, {
                Name: "Charge",
                LocalisedName: "[CHARGE]",
                RoundsPerMinute: 15.8,
                FireType: "charged",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 4.5,
                WearPerShot: .03,
                Spread: {
                    Min: 0,
                    Max: 0,
                    FirstAttack: 0,
                    PerAttack: 0,
                    Decay: 0
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                FireChargedParameters: {
                    ChargeTime: 3,
                    OverchargeTime: 4,
                    OverchargedTime: 2,
                    Cooldown: .8,
                    FireOnFullCharge: !1,
                    FireOnlyOnFullCharge: !1,
                    Modifiers: {
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        DamageMultiplier: 1.2,
                        DamageOverTimeMultiplier: 1
                    }
                },
                DamagePerShot: {
                    Energy: 13.32
                },
                DamagePerSecond: {
                    Energy: 3.51
                }
            }],
            Repool: {
                AmmoPerSecond: 10,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_smg_energy_01_mag",
            InstalledItem: {
                ClassName: "ksar_smg_energy_01_mag",
                Size: 1,
                Mass: .52,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Custodian SMG Magazine (60 cap)",
                Description: "Replacement battery for the Custodian, Kastak Arms' compact energy snub rifle.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_smg_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 60,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "smg", "ksar_smg_energy_01"],
            PortTags: ["ksar_smg_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "ksar_smg_energy_01"]
        }, {
            PortName: "barrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.Barrel"],
            Flags: ["inventory", "energy_barrel"],
            Tags: ["stocked", "smg", "ksar_smg_energy_01"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "smg", "ksar_smg_energy_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "smg", "ksar_smg_energy_01"]
        }]
    }
}, {
    className: "ksar_sniper_ballistic_01",
    reference: "bab1362b-0860-4a52-ad5b-dfb63d12f651",
    itemName: "ksar_sniper_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked sniper",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameksar_sniper_ballistic_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "ksar_sniper_ballistic_01",
        Size: 3,
        Mass: 6,
        Volume: 16e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Scalpel Sniper Rifle",
        Description: "Magazine Size: 8Rate Of Fire: 30 rpmEffective Range: 120 mAttachments: Optics (S3), Barrel (N/A), Underbarrel (S2)The Scalpel is a unique and versatile sniper rifle from Kastak Arms. Designed with two barrels stacked atop of each other, it has two fire modes so you can adapt your shot to the situation. It can deliver a single, powerful shot from a long distance, or fire both barrels in quick succession to create a double-shot burst.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "sniper"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 875,
                LifeTime: 2,
                Range: 1750,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 335
                    },
                    DropPerMeter: {},
                    MinDamage: {
                        Physical: 45
                    }
                },
                ImpactDamage: {
                    Physical: 45
                }
            },
            Firing: [{
                Name: "Burst",
                LocalisedName: "[BURST]",
                RoundsPerMinute: 600,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .17,
                Spread: {
                    Min: 6.5,
                    Max: 22,
                    FirstAttack: 6.5,
                    PerAttack: 20,
                    Decay: 10
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Physical: 45
                },
                DamagePerSecond: {
                    Physical: 450
                }
            }, {
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 60,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: 5,
                    Max: 8,
                    FirstAttack: 8,
                    PerAttack: 10,
                    Decay: 2
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Physical: 45
                },
                DamagePerSecond: {
                    Physical: 45
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "ksar_sniper_ballistic_01_mag",
            InstalledItem: {
                ClassName: "ksar_sniper_ballistic_01_mag",
                Size: 1,
                Mass: .32,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Scalpel Sniper Rifle Magazine (12 cap)",
                Description: "This magazine for the Kastak Arms Scalpel comes loaded with eight 7.62mm rounds.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["ksar_sniper_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 12,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "sniper"],
            PortTags: ["ksar_sniper_ballistic_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 3,
            Loadout: "ksar_optics_tsco_x8_s3",
            InstalledItem: {
                ClassName: "ksar_optics_tsco_x8_s3",
                Size: 3,
                Mass: .1,
                Volume: 1900,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.IronSight",
                Name: "Black Prism (8x Telescopic)",
                Description: "Delivering accurate fire at long distances is a skill that comes with practice – and the use of a proper scope like Kastak Arms' Black Prism. Crafted with rugged, multi-coated crystalens to deliver bright, clear visuals, this 8x telescopic sight is completely at home on your favorite rifle.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                WeaponModifier: {
                    DamageModifier: {
                        DamageMultiplier: 1,
                        DamageOverTimeMultiplier: 1,
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        AmmoCostMultiplier: 1
                    },
                    RecoilModifier: {
                        YawMaxDegrees: 1,
                        PitchMaxDegrees: 1,
                        RollMaxDegrees: 1
                    },
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    },
                    AimModifier: {
                        ZoomScale: 8,
                        SecondZoomScale: 1,
                        ZoomTimeScale: 1
                    },
                    BarrelEffectsStrength: 1,
                    ChargeTimeMultiplier: 1,
                    SoundRadiusMultiplier: 1
                }
            },
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "sniper"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "sniper"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "sniper"]
        }]
    }
}, {
    className: "lbco_pistol_energy_01",
    reference: "959520d7-d83d-45b7-9e7a-f6d057494736",
    itemName: "lbco_pistol_energy_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namelbco_pistol_energy_01",
    manufacturer: "",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "lbco_pistol_energy_01",
        Size: 1,
        Mass: 1.5,
        Volume: 1100,
        Grade: 1,
        Class: "Electron",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "Yubarev Pistol",
        Description: "Battery Size: 10Rate Of Fire: 350 rpmEffective Range: 35mAttachments: Optics (S1), Underbarrel (S1)Engineering excellence only scratches the surface of the distinct Yubarev pistol. Former merc turned weapon manufacturing mogul Irina Arkadova oversaw every aspect of the weapon, imbuing it with power, practicality, and panache. Featuring a classic woodgrain grip and cutting edge barrel design, the Yubarev fires a charged electron shot that impacts not only your target, amplifying the charge with each hit, but can spread to additional conductive targets in range. ",
        Manufacturer: {
            Code: "",
            Name: "@LOC_PLACEHOLDER"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            HeatParameters: {
                MinTemp: 0,
                OverheatTemp: 100,
                CoolingPerSecond: 100,
                TimeTillCoolingStarts: .2,
                OverheatFixTime: 0,
                TempAfterOverheatFix: 0
            },
            Ammunition: {
                Speed: 500,
                LifeTime: 2,
                Range: 1e3,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Energy: 20,
                        Distortion: 25,
                        Stun: 25
                    },
                    DropPerMeter: {
                        Energy: .1,
                        Distortion: .05,
                        Stun: .05
                    },
                    MinDamage: {
                        Energy: 1.5,
                        Distortion: 1,
                        Stun: 1
                    }
                },
                ImpactDamage: {
                    Energy: 32.5,
                    Distortion: 7.5,
                    Stun: 1
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 350,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 25,
                WearPerShot: .2,
                Spread: {
                    Min: 0,
                    Max: 3,
                    FirstAttack: 1.5,
                    PerAttack: 1.5,
                    Decay: 2
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 0
                    }
                },
                DamagePerShot: {
                    Energy: 32.5,
                    Distortion: 7.5,
                    Stun: 1
                },
                DamagePerSecond: {
                    Energy: 189.58,
                    Distortion: 43.75,
                    Stun: 5.83
                }
            }],
            Repool: {
                AmmoPerSecond: 3,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "lbco_pistol_energy_01_mag",
            InstalledItem: {
                ClassName: "lbco_pistol_energy_01_mag",
                Size: 1,
                Mass: .32,
                Volume: 180,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Yubarev Pistol Battery (10 cap)",
                Description: "This battery for the Yubarev Pistol holds enough electron energy for 10 shots.",
                Manufacturer: {
                    Code: "",
                    Name: "@LOC_PLACEHOLDER"
                },
                Tags: ["lbco_pistol_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 10,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"],
            PortTags: ["lbco_pistol_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 1,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "lbco_sniper_energy_01",
    reference: "7623e7fa-3be9-4e9d-891c-597482c448b5",
    itemName: "lbco_sniper_energy_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked lbco_sniper_energy_01 sniper",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namelbco_sniper_energy_01",
    manufacturer: "",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "lbco_sniper_energy_01",
        Size: 3,
        Mass: 6,
        Volume: 16e3,
        Grade: 1,
        Class: "Electron",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Atzkav Sniper Rifle",
        Description: "Magazine Size: 5Rate Of Fire: 30 rpmEffective Range: 150m+Attachments: Optics (S3), Underbarrel (S2)The Atzkav is a unique precision sniper rifle from Lightning Bolt Co. Once the charging handle is engaged, it accurately fires a charged electron to deal significant energy damage that spreads to nearby conductive targets. This special pulse effect also leaves a residual charge in the strike area that increases damage delivered by subsequent electron shots. Alongside the rifle's special firing capabilities, the Atzkav is best known for its distinct barrel that crackles with energy when powering its next shot.",
        Manufacturer: {
            Code: "",
            Name: "@LOC_PLACEHOLDER"
        },
        Tags: ["stocked", "lbco_sniper_energy_01", "sniper"],
        Durability: {
            Lifetime: 0
        },
        HeatConnection: {
            StartCoolingTemperature: 300,
            StartIRTemperature: 250,
            TemperatureToIR: 6,
            ThermalEnergyBase: 10,
            ThermalEnergyDraw: 20,
            CoolingRate: 1,
            StartIREmission: 300,
            OverheatTemperature: 350,
            MaxTemperature: 450,
            RecoveryTemperature: 350
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 500,
                LifeTime: 2,
                Range: 1e3,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Energy: 350,
                        Distortion: 350,
                        Stun: 350
                    },
                    DropPerMeter: {
                        Energy: .01,
                        Distortion: .01,
                        Stun: .01
                    },
                    MinDamage: {
                        Energy: 30,
                        Distortion: 20,
                        Stun: 6
                    }
                },
                ImpactDamage: {
                    Energy: 100,
                    Distortion: 35,
                    Stun: 10
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 30,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: .25,
                Spread: {
                    Min: 11,
                    Max: 33,
                    FirstAttack: 13.5,
                    PerAttack: 25,
                    Decay: 10
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: 0,
                        FirstAttack: 0,
                        PerAttack: 0,
                        Decay: 1
                    }
                },
                DamagePerShot: {
                    Energy: 100,
                    Distortion: 35,
                    Stun: 10
                },
                DamagePerSecond: {
                    Energy: 50,
                    Distortion: 17.5,
                    Stun: 5
                }
            }],
            Repool: {
                AmmoPerSecond: 2,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "lbco_sniper_energy_01_mag",
            InstalledItem: {
                ClassName: "lbco_sniper_energy_01_mag",
                Size: 1,
                Mass: .9,
                Volume: 480,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Atzkav Sniper Rifle Battery (8 cap)",
                Description: "This battery for the Atzkav Sniper Rifle holds enough electron energy for 8 rounds.",
                Manufacturer: {
                    Code: "",
                    Name: "@LOC_PLACEHOLDER"
                },
                Tags: ["lbco_sniper_energy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 8,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "lbco_sniper_energy_01", "sniper"],
            PortTags: ["lbco_sniper_energy_01"]
        }, {
            PortName: "optics_attach",
            MinSize: 1,
            MaxSize: 3,
            Loadout: "lbco_optics_tsco_x16_s3",
            InstalledItem: {
                ClassName: "lbco_optics_tsco_x16_s3",
                Size: 3,
                Mass: .1,
                Volume: 1900,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.IronSight",
                Name: "Omarof (16x Telescopic)",
                Description: "Get a crystal clear view of distant targets with this powerful telescopic scope from Lightning Bolt Company. Designed specifically for the Atzkav Sniper Rifle, the Omarof uses ultra-precise laser etched lenses that are then multi-coated to allow for high light transmission, wide sight picture and crisp colors, providing strikingly sharp images across significant distances.",
                Manufacturer: {
                    Code: "",
                    Name: "@LOC_PLACEHOLDER"
                },
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                WeaponModifier: {
                    DamageModifier: {
                        DamageMultiplier: 1,
                        DamageOverTimeMultiplier: 1,
                        FireRateMultiplier: 1,
                        ProjectileSpeedMultiplier: 1,
                        AmmoCostMultiplier: 1
                    },
                    RecoilModifier: {
                        YawMaxDegrees: 1,
                        PitchMaxDegrees: 1,
                        RollMaxDegrees: 1
                    },
                    SpreadModifier: {
                        Min: 1,
                        Max: 1,
                        FirstAttack: 1,
                        PerAttack: 1,
                        Decay: 1
                    },
                    AimModifier: {
                        ZoomScale: 16,
                        SecondZoomScale: 1,
                        ZoomTimeScale: .75
                    },
                    BarrelEffectsStrength: 1,
                    ChargeTimeMultiplier: 1,
                    SoundRadiusMultiplier: 1
                }
            },
            Types: ["WeaponAttachment.IronSight"],
            Flags: ["inventory"],
            Tags: ["stocked", "lbco_sniper_energy_01", "sniper"]
        }, {
            PortName: "underbarrel_attach",
            MinSize: 1,
            MaxSize: 2,
            Types: ["WeaponAttachment.BottomAttachment"],
            Flags: ["inventory"],
            Tags: ["stocked", "lbco_sniper_energy_01", "sniper"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "lbco_sniper_energy_01", "sniper"]
        }]
    }
}, {
    className: "none_shotgun_ballistic_01",
    reference: "7b17e697-ad38-4999-87e4-14f5a6bee3ac",
    itemName: "none_shotgun_ballistic_01",
    type: "WeaponPersonal",
    subType: "Medium",
    tags: "stocked glsn_shotgun_ballistic_01 shotgun",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namenone_shotgun_ballistic_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Medium",
    stdItem: {
        ClassName: "none_shotgun_ballistic_01",
        Size: 3,
        Mass: 4.3,
        Volume: 19e3,
        Grade: 1,
        Class: "Ballistic",
        Type: "WeaponPersonal.Medium",
        Classification: "FPS.Weapon.Medium",
        Name: "Deadrig Shotgun",
        Description: "Magazine Size: 8Rate Of Fire: 120 rpmEffective Range: 0-10 mAttachments: N/AThe Deadrig is a high powered, double-barreled shotgun with a simple design pieced together from junkyard scraps. Prioritizing power above all else, the Deadrig lacks the refinement of mass-produced weapons and suffers from heavy recoil.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["stocked", "glsn_shotgun_ballistic_01", "shotgun"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 300,
                LifeTime: 2,
                Range: 600,
                Size: 1,
                DamageDrop: {
                    MinDistance: {
                        Physical: 7
                    },
                    DropPerMeter: {
                        Physical: .05
                    },
                    MinDamage: {
                        Physical: 6
                    }
                },
                ImpactDamage: {
                    Physical: 9
                }
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 50,
                FireType: "sequence",
                AmmoPerShot: 1,
                PelletsPerShot: 8,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: 3,
                    Max: 3,
                    FirstAttack: 3,
                    PerAttack: 3,
                    Decay: 7
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: .85,
                        Max: .9,
                        FirstAttack: .8,
                        PerAttack: .8,
                        Decay: .9
                    }
                },
                DamagePerShot: {
                    Physical: 72
                },
                DamagePerSecond: {
                    Physical: 60
                }
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "none_shotgun_ballistic_01_mag",
            InstalledItem: {
                ClassName: "none_shotgun_ballistic_01_mag",
                Size: 1,
                Mass: .96,
                Volume: 610,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "Deadrig Shotgun Magazine (8 cap)",
                Description: "This magazine for the Deadrig shotgun comes pre-loaded with eight 12-gauge shells.",
                Manufacturer: {
                    Code: "KSAR",
                    Name: "Kastak Arms"
                },
                Tags: ["none_shotgun_ballistic_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 8,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["stocked", "glsn_shotgun_ballistic_01", "shotgun"],
            PortTags: ["none_shotgun_ballistic_01"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["stocked", "glsn_shotgun_ballistic_01", "shotgun"]
        }]
    }
}, {
    className: "sasu_pistol_toy_01",
    reference: "413242d8-ce09-4eb7-88d4-9841139ade80",
    itemName: "sasu_pistol_toy_01",
    type: "WeaponPersonal",
    subType: "Small",
    tags: "pistol",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namesasu_pistol_toy_01_red",
    manufacturer: "SASU",
    classification: "FPS.Weapon.Small",
    stdItem: {
        ClassName: "sasu_pistol_toy_01",
        Size: 1,
        Mass: 1.1,
        Volume: 1100,
        Grade: 1,
        Class: "Foam Dart",
        Type: "WeaponPersonal.Small",
        Classification: "FPS.Weapon.Small",
        Name: "WowBlast Desperado Toy Pistol Red",
        Description: "Magazine Size: 10Rate Of Fire: 450 rpmEffective Range: 35mMake friendly fire fun with the Sakura Sun WowBlast Desperado. Playfully fire foam darts at friends or fictitious foes with these ultra-colorful plastic toy pistols. Whether killing time at a landing zone or during a long-haul through the stars, the WowBlast toy line provides lighthearted excitement and entertainment for the entire family. The Desperado toy pistol is available in several vibrant colors, each featuring a unique sound effect!",
        Manufacturer: {
            Code: "SASU",
            Name: "Sakura Sun"
        },
        Tags: ["pistol"],
        Durability: {
            Lifetime: 0
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Weapon: {
            Ammunition: {
                Speed: 20,
                LifeTime: 15,
                Range: 300,
                Size: 1,
                DamageDrop: {
                    MinDistance: {},
                    DropPerMeter: {},
                    MinDamage: {}
                },
                ImpactDamage: {}
            },
            Firing: [{
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 63,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: .1,
                    Max: 3.22,
                    FirstAttack: 1.35,
                    PerAttack: 1.35,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: .5,
                        FirstAttack: .6,
                        PerAttack: .6,
                        Decay: .8
                    }
                },
                DamagePerShot: {},
                DamagePerSecond: {}
            }, {
                Name: "Single",
                LocalisedName: "[SEMI]",
                RoundsPerMinute: 63,
                FireType: "single",
                AmmoPerShot: 1,
                PelletsPerShot: 1,
                HeatPerShot: 0,
                WearPerShot: 0,
                Spread: {
                    Min: .1,
                    Max: 3.22,
                    FirstAttack: 1.35,
                    PerAttack: 1.35,
                    Decay: 3
                },
                AimModifier: {
                    SpreadModifier: {
                        Min: 0,
                        Max: .5,
                        FirstAttack: .6,
                        PerAttack: .6,
                        Decay: .8
                    }
                },
                DamagePerShot: {},
                DamagePerSecond: {}
            }],
            Repool: {
                AmmoPerSecond: 5,
                UnstowMagDuration: 1,
                MagMergeDuration: .01
            }
        },
        Ports: [{
            PortName: "magazine_attach",
            MinSize: 1,
            MaxSize: 1,
            Loadout: "sasu_pistol_toy_01_mag",
            InstalledItem: {
                ClassName: "sasu_pistol_toy_01_mag",
                Size: 1,
                Mass: .3,
                Volume: 90,
                Grade: 1,
                Class: "",
                Type: "WeaponAttachment.Magazine",
                Name: "WowBlast Desperado Toy Pistol Magazine (10 cap)",
                Description: "This magazine for the WowBlast Desperado holds ten darts.",
                Manufacturer: {
                    Code: "SASU",
                    Name: "Sakura Sun"
                },
                Tags: ["sasu_pistol_toy_01"],
                HeatController: {
                    InitialTemperature: -1,
                    CoolingEqualizationMultiplier: 1,
                    MinOperatingTemperature: 0,
                    MinCoolingTemperature: 300,
                    Emissions: {
                        MinimumTemperatureForIR: 250,
                        TemperatureToIR: 6,
                        StartIREmission: 0
                    },
                    Overheat: {
                        EnableOverheat: !1,
                        MaxTemperature: 450,
                        WarningTemperature: 370,
                        RecoveryTemperature: 350
                    }
                },
                Magazine: {
                    Capacity: 10,
                    AllowRepool: !0
                }
            },
            Types: ["WeaponAttachment.Magazine"],
            Tags: ["pistol"]
        }, {
            PortName: "item_grab",
            MinSize: 0,
            MaxSize: 0,
            Tags: ["pistol"]
        }]
    }
}, {
    className: "apar_special_ballistic_02_missile",
    reference: "ccaa28df-74dd-4ecb-87ae-40e04195a4aa",
    itemName: "apar_special_ballistic_02_missile",
    type: "WeaponAttachment",
    subType: "Missile",
    tags: "apar_special_ballistic_02 SM_RestrictedWep flightReady",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameapar_special_ballistic_02_missile",
    manufacturer: "",
    classification: "FPS.WeaponAttachment.Missile",
    stdItem: {
        ClassName: "apar_special_ballistic_02_missile",
        Size: 1,
        Mass: .32,
        Volume: 1,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Missile",
        Classification: "FPS.WeaponAttachment.Missile",
        Name: "Animus Missile",
        Description: "Ballistic missile ammo for the Animus missile launcher.",
        Manufacturer: {
            Code: "",
            Name: "Aopoa"
        },
        Tags: ["apar_special_ballistic_02", "SM_RestrictedWep", "flightReady"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Missile: {
            Damage: {
                Physical: 300,
                Energy: 800
            },
            MinRadius: 2,
            MaxRadius: 3,
            TrackingSignal: "CrossSection",
            MinTrackingSignal: 11.2,
            MinLockRatio: .25,
            LockRate: .15,
            LockTime: 3,
            LockAngle: 30,
            LockRangeMin: -1,
            LockRangeMax: -1,
            Speed: 1e3,
            FuelTankSize: 10,
            MaxLifeTime: 30,
            MaxDistance: 3e4,
            ArmTime: 1.5,
            IgniteTime: .1,
            BoostPhaseDuration: .5,
            TerminalPhaseEngagementTime: 3,
            TerminalPhaseEngagementAngle: 45,
            Proximity: 0
        }
    }
}, {
    className: "apar_melee_01",
    reference: "9e8d6cf1-17d6-453e-bfe3-44529969eebf",
    itemName: "apar_melee_01",
    type: "WeaponPersonal",
    subType: "Knife",
    tags: "knife",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameapar_melee_01",
    manufacturer: "APAR",
    classification: "FPS.Weapon.Knife",
    stdItem: {
        ClassName: "apar_melee_01",
        Size: 1,
        Mass: 1,
        Volume: 230,
        Grade: 1,
        Class: "Melee",
        Type: "WeaponPersonal.Knife",
        Classification: "FPS.Weapon.Knife",
        Name: "Demon Fang Combat Knife",
        Description: "Size: 15 cmThe Demon Fang is a simple yet sinister split blade knife supported by a sturdy and lightly textured handle. Vibrant red cutting edges highlight the knife's unusual and intimidating look, guaranteeing to give anyone second thoughts about getting in its way.",
        Manufacturer: {
            Code: "APAR",
            Name: "Apocalypse Arms"
        },
        Tags: ["knife"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        }
    }
}, {
    className: "banu_melee_01",
    reference: "c5f73e29-47ab-49dd-a571-9d3280d938c8",
    itemName: "banu_melee_01",
    type: "WeaponPersonal",
    subType: "Knife",
    tags: "knife",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebanu_melee_01",
    manufacturer: "APAR",
    classification: "FPS.Weapon.Knife",
    stdItem: {
        ClassName: "banu_melee_01",
        Size: 1,
        Mass: 1,
        Volume: 198,
        Grade: 1,
        Class: "Melee",
        Type: "WeaponPersonal.Knife",
        Classification: "FPS.Weapon.Knife",
        Name: "Njakte Knife",
        Description: "Size: 16 cmBanu engineering and ingenuity combine in the Njakte knife. Its distinct curved blade and serrated edge is rust resistant and remains ultra-sharp even after extensive use thanks to a proprietary metal alloy that's a trade secret of the souli that manufacturers it. The intricately detailed handle gives it a distinctly Banu visual style and provides texture to ensure a great grip.",
        Manufacturer: {
            Code: "APAR",
            Name: "Apocalypse Arms"
        },
        Tags: ["knife"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        }
    }
}, {
    className: "ksar_melee_01",
    reference: "ea692f4b-0545-4f0b-8d4f-05f41fa1e876",
    itemName: "ksar_melee_01",
    type: "WeaponPersonal",
    subType: "Knife",
    tags: "knife",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameksar_melee_01",
    manufacturer: "KSAR",
    classification: "FPS.Weapon.Knife",
    stdItem: {
        ClassName: "ksar_melee_01",
        Size: 1,
        Mass: 1,
        Volume: 230,
        Grade: 1,
        Class: "Melee",
        Type: "WeaponPersonal.Knife",
        Classification: "FPS.Weapon.Knife",
        Name: "Sawtooth Combat Knife",
        Description: "Size: 16 cmDon't end up on the wrong side of the Sawtooth combat knife. The blade embodies Kastak Arms' aggressive styling and was designed to stab, slice, or saw. It features a strong tip for piercing, a straight edge for slicing, and a unique serrated edge with microblades for when you really need to rip through something. The blade is also made with a special ceramic polymer coating that enhances its strength and overall wear resistance.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        Tags: ["knife"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        }
    }
}, {
    className: "none_melee_01",
    reference: "31ef8e9c-1add-414a-87d0-07a38d923ac8",
    itemName: "none_melee_01",
    type: "WeaponPersonal",
    subType: "Knife",
    tags: "knife Stash_Shank",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenone_melee_01",
    classification: "FPS.Weapon.Knife",
    stdItem: {
        ClassName: "none_melee_01",
        Size: 1,
        Mass: 1,
        Volume: 230,
        Grade: 1,
        Class: "Melee",
        Type: "WeaponPersonal.Knife",
        Classification: "FPS.Weapon.Knife",
        Name: "Prison Shiv",
        Description: "Size: N/AA deadly, improvised knife made by an industrious prisoner by securing a sharpened piece of metal to an OxyPen with a bit of thin cord. Considered contraband within prison facilities.",
        Tags: ["knife", "Stash_Shank"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        }
    }
}, {
    className: "utfl_melee_01",
    reference: "04e84f78-fc3d-4d7e-a678-25e463bfde4f",
    itemName: "utfl_melee_01",
    type: "WeaponPersonal",
    subType: "Knife",
    tags: "knife",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameutfl_melee_01",
    manufacturer: "UTFL",
    classification: "FPS.Weapon.Knife",
    stdItem: {
        ClassName: "utfl_melee_01",
        Size: 1,
        Mass: 1,
        Volume: 230,
        Grade: 1,
        Class: "Melee",
        Type: "WeaponPersonal.Knife",
        Classification: "FPS.Weapon.Knife",
        Name: "FSK-8 Combat Knife",
        Description: "Size: 16 cmThe FSK-8 Combat Knife from UltiFlex is as sparse a weapon as you can get. While many become enamored with dazzling tech of modern weaponry, UltiFlex has focused on making a simple effective combat tool. Featuring a balanced 1055 carbon steel blade honed to a razor's edge, this knife is capable of handling all the abuse you can throw at it.",
        Manufacturer: {
            Code: "UTFL",
            Name: "UltiFlex"
        },
        Tags: ["knife"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        }
    }
}, {
    className: "behr_gren_frag_01",
    reference: "46691e82-b633-4d4a-b967-3fce30a0a01c",
    itemName: "behr_gren_frag_01",
    type: "WeaponPersonal",
    subType: "Grenade",
    tags: "grenade",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_frag_grenade_01",
    manufacturer: "BEH",
    classification: "FPS.Weapon.Grenade",
    stdItem: {
        ClassName: "behr_gren_frag_01",
        Size: 1,
        Mass: .4,
        Volume: 900,
        Grade: 1,
        Class: "",
        Type: "WeaponPersonal.Grenade",
        Classification: "FPS.Weapon.Grenade",
        Name: "MK-4 Frag Grenade",
        Description: "Area of Effect: 20 mDamage Type: FragA continuation of the iconic hand grenade first produced by Behring in 2894, the MK-4 is an anti-personnel fragmentation grenade capable of saturating the kill-zone with lethal projectiles and a devastating concussive blast. ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        Tags: ["grenade"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        Explosive: {
            DetonationDelay: 5,
            RadiusMin: 4,
            RadiusMax: 5.5,
            Pressure: 280,
            Damage: {
                Physical: 20
            }
        }
    }
}, {
    className: "arma_barrel_comp_s1",
    reference: "2d559b31-cf5f-4963-b276-c687f49601de",
    itemName: "arma_barrel_comp_s1",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namearma_barrel_comp_s1",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s1",
        Size: 1,
        Mass: .1,
        Volume: 20,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Sion Compensator1  ",
        Description: "Audible Range: +20%Recoil Stability: +30%Recoil Smoothness: +30% Maintain accuracy by countering muzzle rise with the Sion Compensator1. ArmaMod's expertly designed S1 barrel attachment efficiently expels gasses to keep every shot on target.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_comp_s1_contestedzonereward",
    reference: "ff8fbeaa-66d6-4ed0-8d9a-3a9394e6df79",
    itemName: "arma_barrel_comp_s1_contestedzonereward",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_namarma_barrel_comp_s1_contestedzonereward",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s1_contestedzonereward",
        Size: 1,
        Mass: .1,
        Volume: 20,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: 'Sion "Tweaker" Compensator1',
        Description: `Fire Rate: +10%Recoil Stability: +30%Recoil Kick: +20%Maintain accuracy by countering muzzle rise with the Sion Compensator1. ArmaMod's expertly designed S1 barrel attachment efficiently expels gasses to keep every shot on target. This "Tweaker" version has been unofficially modified for a faster fire rate. `,
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1.1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1.2,
                PitchMaxDegrees: 1.2,
                RollMaxDegrees: 1.2
            },
            SpreadModifier: {
                Min: 1.2,
                Max: 1.2,
                FirstAttack: 1.2,
                PerAttack: 1.2,
                Decay: 1.2
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_comp_s2",
    reference: "5867f3cf-e248-405c-b2fb-6e1abe579c82",
    itemName: "arma_barrel_comp_s2",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namearma_barrel_comp_s2",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s2",
        Size: 2,
        Mass: .1,
        Volume: 60,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Sion Compensator2",
        Description: "Audible Range: +20%Recoil Stability: +30%Recoil Smoothness: +30% Maintain accuracy by countering muzzle rise with the Sion Compensator2. ArmaMod's expertly designed S2 barrel attachment efficiently expels gasses to keep every shot on target.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_comp_s2_contestedzonereward",
    reference: "c2a12467-36a7-4e10-8de5-39b59f8922c6",
    itemName: "arma_barrel_comp_s2_contestedzonereward",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_namearma_barrel_comp_s2_contestedzonereward",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s2_contestedzonereward",
        Size: 2,
        Mass: .1,
        Volume: 60,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: 'Sion "Tweaker" Compensator2',
        Description: `Recoil Stability: +70%Recoil Smoothness: +50%ADS Time: +25%Spread: +25%Maintain accuracy by countering muzzle rise with the Sion Compensator2. ArmaMod's expertly designed S2 barrel attachment efficiently expels gasses to keep every shot on target. This "Tweaker" version has been unofficially modified for a smoother firing experience. `,
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .3,
                PitchMaxDegrees: .3,
                RollMaxDegrees: .3
            },
            SpreadModifier: {
                Min: 1.25,
                Max: 1.25,
                FirstAttack: 1.25,
                PerAttack: 1.25,
                Decay: 1.25
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.25
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_comp_s2_firerats01",
    reference: "10831736-4bdf-4465-b517-94281261d317",
    itemName: "arma_barrel_comp_s2_firerats01",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namearma_barrel_comp_s2_firerats01",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s2_firerats01",
        Size: 2,
        Mass: .1,
        Volume: 60,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: 'Sion "Scorched" Compensator2',
        Description: "Recoil Stability: +40%Recoil Kick: +40%Spread: -10%Projectile Speed: -12.5%Maintain accuracy by countering muzzle rise with the Sion Compensator2. ArmaMod's expertly designed S2 barrel attachment efficiently expels gasses to keep every shot on target. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: .875,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: .9,
                Max: .9,
                FirstAttack: .9,
                PerAttack: .9,
                Decay: .9
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_comp_s3",
    reference: "f739108f-7720-4a5e-b173-a65e07b314da",
    itemName: "arma_barrel_comp_s3",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namearma_barrel_comp_s3",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_comp_s3",
        Size: 3,
        Mass: .1,
        Volume: 130,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Sion Compensator3",
        Description: "Audible Range: +20%Recoil Stability: +30%Recoil Smoothness: +30% Maintain accuracy by countering muzzle rise with the Sion Compensator3. ArmaMod's expertly designed S3 barrel attachment efficiently expels gasses to keep every shot on target.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_flhd_s1",
    reference: "04f546d6-651a-47f4-b0ae-64ed2b37557b",
    itemName: "arma_barrel_flhd_s1",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namearma_barrel_flhd_s1",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_flhd_s1",
        Size: 1,
        Mass: .1,
        Volume: 70,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Veil Flash Hider1",
        Description: "Recoil Stability: +15%Recoil Smoothness: +15%The Veil Flash Hider1 is an S1 flash hider from ArmaMod. Designed to reduce muzzle flash, it will help keep your position hidden once the action begins.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "arma_barrel_flhd_s2",
    reference: "156f6405-7fdc-40e4-a783-703e807d9f88",
    itemName: "arma_barrel_flhd_s2",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namearma_barrel_flhd_s2",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_flhd_s2",
        Size: 2,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Veil Flash Hider2",
        Description: "Recoil Stability: +15%Recoil Smoothness: +15%The Veil Flash Hider2 is an S2 flash hider from ArmaMod. Designed to reduce muzzle flash, it will help keep your position hidden once the action begins.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "arma_barrel_flhd_s3",
    reference: "678aae5b-0d55-42fb-bfe2-ce9973715529",
    itemName: "arma_barrel_flhd_s3",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namearma_barrel_flhd_s3",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_flhd_s3",
        Size: 3,
        Mass: .1,
        Volume: 200,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Veil Flash Hider3",
        Description: "Recoil Stability: +15%Recoil Smoothness: +15%The Veil Flash Hider3 is an S3 flash hider from ArmaMod. Designed to reduce muzzle flash, it will help keep your position hidden once the action begins.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "arma_barrel_stab_s1",
    reference: "0ff25cf5-6f7b-47e8-8842-f12d8abfe68b",
    itemName: "arma_barrel_stab_s1",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel energy_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namearma_barrel_stab_s1",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_stab_s1",
        Size: 1,
        Mass: .1,
        Volume: 50,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Emod Stabilizer1",
        Description: "Reduce energy weapon recoil with the Emod Stabilizer1. ArmaMod designed the attachment to improve both horizontal and vertical recoil to ensure a more precise shot. ",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_stab_s1_firerats01",
    reference: "6086430f-6a76-4768-8baa-6e09bc56140e",
    itemName: "arma_barrel_stab_s1_firerats01",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel energy_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namearma_barrel_stab_s1_firerats01",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_stab_s1_firerats01",
        Size: 1,
        Mass: .1,
        Volume: 50,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: 'Emod "Scorched" Stabilizer1',
        Description: "Recoil Stability: +40%Recoil Kick: +40%Spread: -10%Projectile Speed: -12.5%Reduce energy weapon recoil with the Emod Stabilizer1. ArmaMod designed the attachment to improve both horizontal and vertical recoil to ensure a more precise shot. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_stab_s2",
    reference: "ecbc4c11-95f3-4bd3-9fad-49bba798a942",
    itemName: "arma_barrel_stab_s2",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel energy_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namearma_barrel_stab_s2",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_stab_s2",
        Size: 2,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Emod Stabilizer2",
        Description: "Reduce energy weapon recoil with the Emod Stabilizer2. ArmaMod designed the attachment to improve both horizontal and vertical recoil to ensure a more precise shot. ",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_stab_s2_contestedzonereward",
    reference: "bf838dcb-31d5-4c8d-8550-90f09a581619",
    itemName: "arma_barrel_stab_s2_contestedzonereward",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel energy_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_namearma_barrel_stab_s2_contestedzonereward",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_stab_s2_contestedzonereward",
        Size: 2,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: 'Emod "Tweaker" Stabilizer2',
        Description: 'Damage: +12.5%Recoil Stability: +15%Recoil Kick: +40%Spread: +25%Ammo Cost Per Shot: +50%Reduce energy weapon recoil with the Emod Stabilizer2. ArmaMod designed the attachment to improve both horizontal and vertical recoil to ensure a more precise shot. This "Tweaker" version has been unofficially modified to do more damage.',
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1.125,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1.5
            },
            RecoilModifier: {
                YawMaxDegrees: 1.4,
                PitchMaxDegrees: 1.4,
                RollMaxDegrees: 1.4
            },
            SpreadModifier: {
                Min: 1.25,
                Max: 1.25,
                FirstAttack: 1.25,
                PerAttack: 1.25,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_stab_s3",
    reference: "dc7a1310-5e36-445c-90a9-4acf61194d0c",
    itemName: "arma_barrel_stab_s3",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel energy_attach",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namearma_barrel_stab_s3",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_stab_s3",
        Size: 3,
        Mass: .1,
        Volume: 260,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Emod Stabilizer3",
        Description: "Reduce energy weapon recoil with the Emod Stabilizer3. ArmaMod designed the attachment to improve both horizontal and vertical recoil to ensure a more precise shot.  ",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: .8,
                PitchMaxDegrees: .8,
                RollMaxDegrees: .8
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: .5,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1.2
        }
    }
}, {
    className: "arma_barrel_supp_s1",
    reference: "1217e61b-1a57-4d94-8aa4-16d5fcb59adf",
    itemName: "arma_barrel_supp_s1",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namearma_barrel_supp_s1",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_supp_s1",
        Size: 1,
        Mass: .1,
        Volume: 120,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Tacit Suppressor1",
        Description: "Damage: -8%Audible Range: -60%Strike silently with the Tacit Supressor1. ArmaMod uses a proprietary ceramic coating inside the suppressor to ensure the sound of gunfire remains minimal. ",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: .92,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: .66
        }
    }
}, {
    className: "arma_barrel_supp_s2",
    reference: "dffa4527-2748-4f52-a7da-e57aae1c293c",
    itemName: "arma_barrel_supp_s2",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namearma_barrel_supp_s2",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_supp_s2",
        Size: 2,
        Mass: .1,
        Volume: 180,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Tacit Suppressor2",
        Description: "Damage: -8%Audible Range: -60%Strike silently with the Tacit Supressor2. ArmaMod uses a proprietary ceramic coating inside the suppressor to ensure the sound of gunfire remains minimal. ",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: .92,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: .4
        }
    }
}, {
    className: "arma_barrel_supp_s3",
    reference: "d292ae90-a9bb-4a37-8651-27dd81b67ead",
    itemName: "arma_barrel_supp_s3",
    type: "WeaponAttachment",
    subType: "Barrel",
    tags: "FPS_Barrel ballistic_attach energy_attach",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namearma_barrel_supp_s3",
    manufacturer: "ARMA",
    classification: "FPS.WeaponAttachment.BarrelAttachment",
    stdItem: {
        ClassName: "arma_barrel_supp_s3",
        Size: 3,
        Mass: .1,
        Volume: 450,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.Barrel",
        Classification: "FPS.WeaponAttachment.BarrelAttachment",
        Name: "Tacit Suppressor3",
        Description: "Damage: -8%Audible Range: -60%Strike silently with the Tacit Supressor3. ArmaMod uses a proprietary ceramic coating inside the suppressor to ensure the sound of gunfire remains minimal.",
        Manufacturer: {
            Code: "ARMA",
            Name: "ArmaMod"
        },
        Tags: ["FPS_Barrel", "ballistic_attach", "energy_attach"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: .92,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 0,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: .4
        }
    }
}, {
    className: "behr_optics_holo_x1_s1",
    reference: "4505b54f-0e2b-4dfa-8c15-3c9073561f93",
    itemName: "behr_optics_holo_x1_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_optics_holo_x1_s1",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_holo_x1_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "PT1 (1x Holographic)",
        Description: "Experience Behring precision with this non-magnifying projection sight. Featuring a highly visible target marker, the PT1 provides ultimate target acquisition to find and lock onto hostiles with ease.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 2,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_holo_x2_s1",
    reference: "208281d5-412b-46c3-b0b3-bea4c33bb17c",
    itemName: "behr_optics_holo_x2_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_optics_holo_x2_s1",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_holo_x2_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "PT2 (2x Holographic)",
        Description: "Improve your combat accuracy with this 2x magnifying sight from Behring. Built with meticulous care and craftsmanship, the PT2 has become an essential optic for everyone from sport shooters to law enforcement professionals.  ",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 2,
                SecondZoomScale: 3,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_holo_x3_s1",
    reference: "cafb725f-9ccf-4ec3-959d-1a94ac0512b6",
    itemName: "behr_optics_holo_x3_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_optics_holo_x3_s1",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_holo_x3_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "PT3 (3x Holographic)",
        Description: "Get up close and personal with this 3x magnifying optic from Behring. The PT3 projects a highly visible target marker allowing you to confidently cover your field of view across various lighting and environmental conditions.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 3,
                SecondZoomScale: 4,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_rdot_x1_s1",
    reference: "46e37a2b-36d3-48d9-9a77-f51ef4689943",
    itemName: "behr_optics_rdot_x1_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namebehr_optics_rdot_x1_s1",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_rdot_x1_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "RF1 (1x Reflex)",
        Description: "Perfect for close-quarter combat, the RF1 non-magnifying reflex optic was the first to use Behring's Hyper-Lumen substrate coating to ensure the aiming reticle could be seen in wide range of light conditions, day or night.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_tsco_x16_s3",
    reference: "77521326-082c-44f9-a5b2-09dfb87f3f14",
    itemName: "behr_optics_tsco_x16_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namebehr_optics_tsco_x16_s3",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_tsco_x16_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "EE16 (16x Telescopic)",
        Description: "Get a clear view of your target from afar with the EE16. Behring craftsmanship produced a 16x scope that's lightweight, durable, and deadly accurate. A rigorous 22-step testing process ensures the EE16 can deliver precision targeting even after encountering extreme weather or surviving battlefield wear and tear.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 16,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_tsco_x4_s2",
    reference: "a392c30b-5798-4b35-a70c-01264c6a083e",
    itemName: "behr_optics_tsco_x4_s2",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namebehr_optics_tsco_x4_s2",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_tsco_x4_s2",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "EE04 (4x Telescopic)",
        Description: "Get a clear view of your target from afar with the EE04. Behring craftsmanship produced a 4x scope that's lightweight, durable, and deadly accurate. A rigorous 22-step testing process ensures the EE04 can deliver precision targeting even after encountering extreme weather or surviving battlefield wear and tear.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 6,
                ZoomTimeScale: 1.25
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "behr_optics_tsco_x8_s3",
    reference: "0dabf62d-9b3e-4968-a371-ae0cb44057a1",
    itemName: "behr_optics_tsco_x8_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namebehr_optics_tsco_x8_s3",
    manufacturer: "BEH",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "behr_optics_tsco_x8_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "EE08 (8x Telescopic)",
        Description: "Get a clear view of your target from afar with the EE08. Behring craftsmanship produced a 8x scope that's lightweight, durable, and deadly accurate. A rigorous 22-step testing process ensures the EE08 can deliver precision targeting even after encountering extreme weather or surviving battlefield wear and tear.",
        Manufacturer: {
            Code: "BEH",
            Name: "Behring"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 8,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "gmni_optics_tsco_x4_s2",
    reference: "718aca95-c774-4266-a0e2-50ba2a56088e",
    itemName: "gmni_optics_tsco_x4_s2",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namegmni_optics_tsco_x4_s2",
    manufacturer: "GEM",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "gmni_optics_tsco_x4_s2",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "OT4-RF (4x Telescopic)",
        Description: "Combining a premium 4x telescopic sight with Gemini's innovative echoburst rangefinder, the OT4-RF model allows you to accurately gauge the distance to your target; vital for effective precision shooting. When paired with the Gemini S71 or other compatible weapon, the OT4-RF is engineered to impress in a variety of situations and engagements.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.25
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "gmni_optics_tsco_x4_s2_firerats01",
    reference: "bbea3063-5ca5-4d78-9327-95cceb638eb9",
    itemName: "gmni_optics_tsco_x4_s2_firerats01",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namegmni_optics_tsco_x4_s2_firerats02",
    manufacturer: "GEM",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "gmni_optics_tsco_x4_s2_firerats01",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: 'OT4-RF "Scorched" (4x Telescopic)',
        Description: "Combining a premium 4x telescopic sight with Gemini's innovative echoburst rangefinder, the OT4-RF model allows you to accurately gauge the distance to your target; vital for effective precision shooting. When paired with the Gemini S71 or other compatible weapon, the OT4-RF is engineered to impress in a variety of situations and engagements. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 2.5,
                ZoomTimeScale: 1.05
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "gmni_optics_tsco_x8_s3",
    reference: "278fafef-c4e3-44d5-9b85-a225f6e97cb2",
    itemName: "gmni_optics_tsco_x8_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namegmni_optics_tsco_x8_s3",
    manufacturer: "GEM",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "gmni_optics_tsco_x8_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "OT8-RF (8x Telescopic)",
        Description: "Combining a premium 8x telescopic sight with Gemini's innovative echoburst rangefinder, the OT8-RF model allows you to accurately gauge the distance to your target; vital for effective precision shooting. The standard scope for Gemni's A03 Sniper Rifle, the OT8-RF is engineered to impress in a variety of situations and engagements.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 8,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "gmni_optics_tsco_x8_s3_firerats01",
    reference: "70a1857b-69b1-4456-b29e-36c505f09eca",
    itemName: "gmni_optics_tsco_x8_s3_firerats01",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namegmni_optics_tsco_x8_s3_firerats01",
    manufacturer: "GEM",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "gmni_optics_tsco_x8_s3_firerats01",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: 'OT8-RF "Scorched" (8x Telescopic)',
        Description: "Combining a premium 8x telescopic sight with Gemini's innovative echoburst rangefinder, the OT8-RF model allows you to accurately gauge the distance to your target; vital for effective precision shooting. The standard scope for Gemni's A03 Sniper Rifle, the OT8-RF is engineered to impress in a variety of situations and engagements. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "GEM",
            Name: "Gemini"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 8,
                SecondZoomScale: 4,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "grin_multitool_01_cutter",
    reference: "81d120b2-d7a4-413a-8f9e-a1ebbb8ae1e2",
    itemName: "grin_multitool_01_cutter",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "grin_multitool_01",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01_cutter",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "grin_multitool_01_cutter",
        Size: 1,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Class: "Cutter",
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "OxyTorch Cutter Attachment",
        Description: "Manufacturer: Greycat IndustrialItem Type: Multi-Tool AttachmentClass: CutterTransform Greycat's Pyro RYT Multi-Tool into a precision cutter with the OxyTorch attachment. Built to quickly and easily slice through appropriate materials, the OxyTorch harnesses the power of the multi-tool to deliver accurate cuts with clean edges, making it a convenient attachment ideal for both professionals and hobbyists. ",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["grin_multitool_01"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "grin_multitool_01_healing",
    reference: "5c19c75e-fe9c-438b-862a-3639cf187763",
    itemName: "grin_multitool_01_healing",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "grin_multitool_01",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01_healing",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "grin_multitool_01_healing",
        Size: 1,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Class: "Medical",
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "LifeGuard Medical Attachment",
        Description: "Manufacturer: Greycat Industrial / CureLifeItem Type: Multi-Tool AttachmentClass: MedicalCrafted as a joint effort between Greycat Industrial and leading medical device manufacturer CureLife, the LifeGuard attachment is a compact and light-weight emergency medical treatment option powered by the Pyro RYT Multi-Tool. It is perfect for handling jobsite emergencies and temporarily alleviating symptoms until professional medical care can be sought.  ",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["grin_multitool_01"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "grin_multitool_01_mining",
    reference: "da55ce5e-25dd-4160-9f04-fee8796c0b43",
    itemName: "grin_multitool_01_mining",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "grin_multitool_01",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01_mining",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "grin_multitool_01_mining",
        Size: 1,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Class: "Mining",
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "OreBit Mining Attachment",
        Description: "Manufacturer: Greycat IndustrialItem Type: Multi-Tool AttachmentClass: MiningThe OreBit attachment turns Greycat's Pyro RYT Multi-Tool into a handheld mining machine. It can scan rocks to find worthwhile deposits and then liberate the lode with its powerful mining laser. Next time you're planetside, be sure you bring this attachment or risk leaving easy credits behind.",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["grin_multitool_01"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "grin_multitool_01_salvage_repair",
    reference: "99379aa0-7240-4014-813a-0ab460f885f5",
    itemName: "grin_multitool_01_salvage_repair",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "grin_multitool_01",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01_salvage",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "grin_multitool_01_salvage_repair",
        Size: 1,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Class: "Salvage and Repair",
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "Cambio-Lite SRT Attachment",
        Description: "Manufacturer: Greycat IndustrialItem Type: Multi-Tool AttachmentClass: Salvage and RepairGreycat delivers once again, bringing their popular salvage and repair tool (SRT) as an attachment for the Multi-Tool. Though not as powerful as the Cambio, the Cambio-Lite also collects and converts alloys and polymers found in scrap into recycled material composite that can either be sold or used to make quick repairs. Whether stripping salvage for creds or patching a hull to make a ship space-safe, the Cambio-Lite is ready to get to work.",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["grin_multitool_01"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "grin_multitool_01_tractorbeam",
    reference: "03b3db91-0063-4da2-99f7-16b20ede4209",
    itemName: "grin_multitool_01_tractorbeam",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "grin_multitool_01",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namegrin_multitool_01_tractorbeam",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "grin_multitool_01_tractorbeam",
        Size: 1,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Class: "Tractor Beam",
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "TruHold Tractor Beam Attachment",
        Description: "Manufacturer: Greycat IndustrialItem Type: Multi-Tool AttachmentClass: Tractor BeamWhether your feet are on the floor or floating in zero-G, the TruHold attachment for the Pyro RYT Multi-Tool makes lifting and positioning items easier than ever. With its impressive and efficient pull/draw ratio and easy-to-read range finder, the TruHold can be used solo or paired with other beams to tackle heavier targets. Plus, the TruHold has the added benefit of functioning as a personal zero-G traversal device when coupled to an object with a high enough mass.",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        Tags: ["grin_multitool_01"],
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "klwe_optics_disp_x8_s3",
    reference: "c75282e6-8b92-4398-ac27-bd6f56d627b2",
    itemName: "klwe_optics_disp_x8_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameklwe_optics_disp_x8_s3",
    manufacturer: "KLA",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "klwe_optics_disp_x8_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Touchstone (8x Monitor)",
        Description: "While conventional scopes can induce eyestrain after extended periods of use, the Touchstone 8x monitor from Klaus & Werner provides ultra-critical eye relief and allows for “heads up” shooting where you are able to simultaneously track targets and observe environmental conditions. Built to cater to a variety of shooters, the Touchstone's reliability and clarity makes it the ideal choice for tactical rifles like the Arrowhead.",
        Manufacturer: {
            Code: "KLA",
            Name: "Klaus & Werner"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 8,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "klwe_ubarrel_flsh_s1",
    reference: "9f4969d2-074c-448b-ae6b-0697c49cff81",
    itemName: "klwe_ubarrel_flsh_s1",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameklwe_ubarrel_flsh_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "klwe_ubarrel_flsh_s1",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "Brightspot Flashlight Purple",
        Description: "The Brightspot flashlight embodies Klaus & Werner's engineering ethos. A simple and sturdy design built to withstand intense combat and environmental conditions means the Brightspot always works when you need it most. This special edition projects a purple circle that makes the beam less conspicuous from a distance.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow_purple_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow_purple_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow_purple_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide_purple_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide_purple_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide_purple_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "klwe_ubarrel_lasr_s1",
    reference: "cdf4adaa-de1e-42cf-8b50-0fd3ad138a10",
    itemName: "klwe_ubarrel_lasr_s1",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameklwe_ubarrel_lasr_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "klwe_ubarrel_lasr_s1",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "Tracer Laser Pointer Orange ",
        Description: "Spread: -12.5%Trust Klaus & Werner to manufacture a tactical laser pointer that always hits the mark. The Tracer features a rust and impact resistant casing for an advanced laser diode that produces an efficient and stable beam. This special edition generates an orange beam that's easy to see and identify.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: .885,
                Max: .885,
                FirstAttack: .885,
                PerAttack: .885,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "klwe_ubarrel_lasr_s1_02",
    reference: "14bc8a2c-10f2-4f6e-a45e-eec476367d45",
    itemName: "klwe_ubarrel_lasr_s1_02",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Nameklwe_ubarrel_lasr_s1_02",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "klwe_ubarrel_lasr_s1_02",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "Tracer Laser Pointer Green",
        Description: "Spread: -12.5%Trust Klaus & Werner to manufacture a tactical laser pointer that always hits the mark. The Tracer features a rust and impact resistant casing for an advanced laser diode that produces an efficient and stable beam. This special edition generates a green beam that's easy to see and identify.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: .885,
                Max: .885,
                FirstAttack: .885,
                PerAttack: .885,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "ksar_optics_tsco_x8_s3",
    reference: "71aac893-8957-42e2-8956-61985ab2c4a5",
    itemName: "ksar_optics_tsco_x8_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Nameksar_optics_tsco_x8_s3",
    manufacturer: "KSAR",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "ksar_optics_tsco_x8_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Black Prism (8x Telescopic)",
        Description: "Delivering accurate fire at long distances is a skill that comes with practice – and the use of a proper scope like Kastak Arms' Black Prism. Crafted with rugged, multi-coated crystalens to deliver bright, clear visuals, this 8x telescopic sight is completely at home on your favorite rifle.",
        Manufacturer: {
            Code: "KSAR",
            Name: "Kastak Arms"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 8,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "lbco_optics_tsco_x16_s3",
    reference: "1ba4ebda-fa61-45e7-928f-a543161c9276",
    itemName: "lbco_optics_tsco_x16_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namelbco_optics_tsco_x16_s3",
    manufacturer: "",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "lbco_optics_tsco_x16_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Omarof (16x Telescopic)",
        Description: "Get a crystal clear view of distant targets with this powerful telescopic scope from Lightning Bolt Company. Designed specifically for the Atzkav Sniper Rifle, the Omarof uses ultra-precise laser etched lenses that are then multi-coated to allow for high light transmission, wide sight picture and crisp colors, providing strikingly sharp images across significant distances.",
        Manufacturer: {
            Code: "",
            Name: "@LOC_PLACEHOLDER"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 16,
                SecondZoomScale: 1,
                ZoomTimeScale: .75
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "Multitool_Attachment",
    reference: "753e218d-6368-4005-aee9-60f821aeebaa",
    itemName: "multitool_attachment",
    type: "WeaponAttachment",
    subType: "Utility",
    tags: "",
    requiredTags: "",
    size: 0,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    manufacturer: "GRIN",
    classification: "FPS.WeaponAttachment.Utility",
    stdItem: {
        ClassName: "Multitool_Attachment",
        Size: 0,
        Mass: .1,
        Volume: 340,
        Grade: 1,
        Type: "WeaponAttachment.Utility",
        Classification: "FPS.WeaponAttachment.Utility",
        Name: "Multitool_Attachment",
        Manufacturer: {
            Code: "GRIN",
            Name: "Greycat Industrial"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x1_s1",
    reference: "e812e76a-4068-4e91-8511-45a26039aa12",
    itemName: "nvtc_optics_holo_x1_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_optics_holo_x1_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x1_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma (1x Holographic)",
        Description: "Whether under the blazing sun or on the dark side of a moon, the NV-TAC Gamma projects an easy to see reticle to help ensure your shot finds its mark.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x1_s1_LAMP",
    reference: "d5da6ad7-8013-4db0-a75e-3060f7d987db",
    itemName: "nvtc_optics_holo_x1_s1_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@Item_Namenvtc_optics_holo_x1_s1_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x1_s1_LAMP",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma LL (1x Holographic)",
        Description: "Whether under the blazing sun or on the dark side of a moon, the NV-TAC Gamma projects an easy to see reticle to help ensure your shot finds its mark. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x2_s1",
    reference: "a9d588a7-1023-410e-a001-73a973700faa",
    itemName: "nvtc_optics_holo_x2_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_optics_holo_x2_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x2_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma Duo (2x Holographic)",
        Description: "NV-TAC extensively tested the Gamma Duo across a range of extreme temperatures to assure that thermal drift doesn't affect the accuracy of this 2x magnifier sight.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 2,
                SecondZoomScale: 3,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x2_s1_LAMP",
    reference: "c1d28932-267f-4867-9d29-2d6f0aa50dd2",
    itemName: "nvtc_optics_holo_x2_s1_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@Item_Namenvtc_optics_holo_x2_s1_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x2_s1_LAMP",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma Duo LL (2x Holographic)",
        Description: "NV-TAC extensively tested the Gamma Duo across a range of extreme temperatures to assure that thermal drift doesn't affect the accuracy of this 2x magnifier sight. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 2,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x3_s1",
    reference: "fd9d06a9-5cf8-4325-9149-538d576e5146",
    itemName: "nvtc_optics_holo_x3_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_optics_holo_x3_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x3_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma Plus (3x Holographic)",
        Description: "NV-TAC's Gamma Plus is a 3x magnifier sight that utilizes ReadyBrite projection for quick target acquisition. Its durable design makes it perfect for any tactical situation.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 3,
                SecondZoomScale: 3,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_holo_x3_s1_LAMP",
    reference: "009b533f-e818-4dc8-a81c-fafd40bb21ba",
    itemName: "nvtc_optics_holo_x3_s1_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@Item_Namenvtc_optics_holo_x3_s1_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_holo_x3_s1_LAMP",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma Plus LL (3x Holographic)",
        Description: "NV-TAC's Gamma Plus is a 3x magnifier sight that utilizes ReadyBrite projection for quick target acquisition. Its durable design makes it perfect for any tactical situation. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 3,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_rdot_x1_s1",
    reference: "28fa64a1-2a7b-4bcc-9581-9b86c6ccae16",
    itemName: "nvtc_optics_rdot_x1_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_optics_rdot_x1_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_rdot_x1_s1",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Delta (1x Reflex)",
        Description: "Ideal for civilians and professionals, the Delta non-magnifying reflex sight from NV-TAC provides a precise illuminated target marker, visible across a wide range of light levels.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_rdot_x1_s1_firerats01",
    reference: "d4d27d5f-3c80-4b31-bc34-2de8357b79d7",
    itemName: "nvtc_optics_rdot_x1_s1_firerats01",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_optics_rdot_x1_s1_firerats01",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_rdot_x1_s1_firerats01",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: 'Delta "Scorched" (1x Reflex)',
        Description: "Ideal for civilians and professionals, the Delta non-magnifying reflex sight from NV-TAC provides a precise illuminated target marker, visible across a wide range of light levels. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 3,
                ZoomTimeScale: 1.025
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_rdot_x1_s1_LAMP",
    reference: "495e07f0-3b09-49a7-857b-dccefca9f5d1",
    itemName: "nvtc_optics_rdot_x1_s1_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@Item_Namenvtc_optics_rdot_x1_s1_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_rdot_x1_s1_LAMP",
        Size: 1,
        Mass: .1,
        Volume: 100,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Delta LL (1x Reflex)",
        Description: "Ideal for civilians and professionals, the Delta non-magnifying reflex sight from NV-TAC provides a precise illuminated target marker, visible across a wide range of light levels. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1.15
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_tsco_x4_s2",
    reference: "845dc675-ab4c-4bd5-8b14-11e9c29f3399",
    itemName: "nvtc_optics_tsco_x4_s2",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namenvtc_optics_tsco_x4_s2",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_tsco_x4_s2",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Tau Plus (4x Telescopic)",
        Description: "The Tau Plus 4x telescopic sight from NV-TAC uses a proprietary optics coating to ensure a crystal clear image regardless of light levels and conditions, allowing you to precisely engage targets at medium range.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 6,
                ZoomTimeScale: 1.25
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_tsco_x4_s2_firerats01",
    reference: "be792212-0662-4351-95cb-31b4d3fe9a0d",
    itemName: "nvtc_optics_tsco_x4_s2_firerats01",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@item_Namenvtc_optics_tsco_x4_s2_firerats01",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_tsco_x4_s2_firerats01",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: 'Tau Plus "Scorched" (4x Telescopic)',
        Description: "The Tau Plus 4x telescopic sight from NV-TAC uses a proprietary optics coating to ensure a crystal clear image regardless of light levels and conditions, allowing you to precisely engage targets at medium range. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 2,
                ZoomTimeScale: 1.05
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_tsco_x4_s2_LAMP",
    reference: "98dc4abb-8518-479e-a56d-f15d98e037df",
    itemName: "nvtc_optics_tsco_x4_s2_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 2,
    grade: 1,
    name: "@Item_Namenvtc_optics_tsco_x4_s2_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_tsco_x4_s2_LAMP",
        Size: 2,
        Mass: .1,
        Volume: 700,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Tau Plus LL (4x Telescopic)",
        Description: "The Tau Plus 4x telescopic sight from NV-TAC uses a proprietary optics coating to ensure a crystal clear image regardless of light levels and conditions, allowing you to precisely engage targets at medium range. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 4,
                SecondZoomScale: 6,
                ZoomTimeScale: 1.25
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_tsco_x8_s3",
    reference: "fb88b0a1-b9f3-40cb-a683-509cf0e3641c",
    itemName: "nvtc_optics_tsco_x8_s3",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@item_Namenvtc_optics_tsco_x8_s3",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_tsco_x8_s3",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Theta Pro (8x Telescopic) ",
        Description: "Carefully crafted and calibrated, the Theta Pro delivers precise and effective long distance combat engagement capabilities thanks to its powerful 8x telescopic sight.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 6,
                SecondZoomScale: 10,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_optics_tsco_x8_s3_LAMP",
    reference: "89ed520d-5514-49a5-bd11-2620f725b509",
    itemName: "nvtc_optics_tsco_x8_s3_lamp",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 3,
    grade: 1,
    name: "@Item_Namenvtc_optics_tsco_x8_s3_LAMP",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "nvtc_optics_tsco_x8_s3_LAMP",
        Size: 3,
        Mass: .1,
        Volume: 1900,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Theta Pro LL (8x Telescopic)",
        Description: "Carefully crafted and calibrated, the Theta Pro delivers precise and effective long distance combat engagement capabilities thanks to its powerful 8x telescopic sight. This version of the scope includes low-light functionality suitable for operations in dim environments.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 6,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "nvtc_ubarrel_flsh_s1",
    reference: "60fab7a8-617c-4962-8391-69221ed761d6",
    itemName: "nvtc_ubarrel_flsh_s1",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_flsh_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_flsh_s1",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "FieldLite Flashlight",
        Description: "The FieldLite is a tough and tactical underbarrel flashlight. Featuring a corrosion-proof body and impact resistant lens, NV-TAC tested the attachment across a variety of environments and conditions to ensure it works when needed most.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "nvtc_ubarrel_flsh_s1_02",
    reference: "30c2a2e9-fba9-40b5-830c-0f9ad43b18ad",
    itemName: "nvtc_ubarrel_flsh_s1_02",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_flsh_s1_02",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_flsh_s1_02",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "FieldLite Flashlight Blue",
        Description: "The FieldLite Blue is a tough and tactical underbarrel flashlight. Featuring a corrosion-proof body and impact resistant lens, NV-TAC tested the attachment across a variety of environments and conditions to ensure it works when needed most. This special Blue edition projects a focused blue light in the shape of a square. The molded lens keeps falloff to a minimum, making it perfect for illuminating targets at distance.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow_blue_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow_blue_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow_blue_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide_blue_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide_blue_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide_blue_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "nvtc_ubarrel_flsh_s1_03",
    reference: "1d6b428a-33a8-4074-bd41-fbc6a16c72d1",
    itemName: "nvtc_ubarrel_flsh_s1_03",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_flsh_s1_03",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_flsh_s1_03",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "FieldLite Flashlight Yellow",
        Description: "The FieldLite Yellow is a tough and tactical underbarrel flashlight. Featuring a corrosion-proof body and impact resistant lens, NV-TAC tested the attachment across a variety of environments and conditions to ensure it works when needed most. This special Yellow edition projects a scattered yellow starlike pattern making it preferable for target acquisition at medium distance.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow_gold_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow_gold_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow_gold_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide_gold_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide_gold_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide_gold_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "nvtc_ubarrel_flsh_s1_04",
    reference: "d7d93249-f0ef-4b50-803b-781a904a2cef",
    itemName: "nvtc_ubarrel_flsh_s1_04",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_flsh_s1_04",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_flsh_s1_04",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "FieldLite Flashlight Red",
        Description: "The FieldLite Red is a tough and tactical underbarrel flashlight. Featuring a corrosion-proof body and impact resistant lens, NV-TAC tested the attachment across a variety of environments and conditions to ensure it works when needed most. This special Red edition projects a red light in the shape of a circle. Ideal for situations when illumination on close range targets is essential without projecting a bright light that could be easily spotted.  ",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow_red_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow_red_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow_red_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide_red_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide_red_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide_red_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "nvtc_ubarrel_flsh_s1_firerats01",
    reference: "ba30701c-bec0-4345-b5d9-ae869f34c126",
    itemName: "nvtc_ubarrel_flsh_s1_firerats01",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_flsh_s1_firerats01",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_flsh_s1_firerats01",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: 'FieldLite "Scorched" Flashlight',
        Description: "The FieldLite is a tough and tactical underbarrel flashlight. Featuring a corrosion-proof body and impact resistant lens, NV-TAC tested the attachment across a variety of environments and conditions to ensure it works when needed most. The Scorched edition features a unique flame patina.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        },
        Ports: [{
            PortName: "light_1",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_narrow_red_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_narrow_red_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_narrow_red_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }, {
            PortName: "light_2",
            MinSize: 0,
            MaxSize: 0,
            Loadout: "weapon_underbarrel_light_wide_red_01",
            InstalledItem: {
                ClassName: "weapon_underbarrel_light_wide_red_01",
                Size: 1,
                Volume: 1,
                Grade: 1,
                Type: "Light.Weapon",
                Name: "weapon_underbarrel_light_wide_red_01",
                Tags: ["uneditable"]
            },
            Types: ["Light"]
        }]
    }
}, {
    className: "nvtc_ubarrel_lasr_s1",
    reference: "6bbaa189-c154-4524-b2c1-6df305bb9533",
    itemName: "nvtc_ubarrel_lasr_s1",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@item_Namenvtc_ubarrel_lasr_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "nvtc_ubarrel_lasr_s1",
        Size: 1,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "250-E Laser Pointer",
        Description: "Spread: -12.5%The 250-E is an intuitive aiming aid that produces a laser visible to you and others. NV-TAC built the attachment to be lightweight yet durable so it won't add extra weight to your weapon.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: .885,
                Max: .885,
                FirstAttack: .885,
                PerAttack: .885,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "Optics_Attachment",
    reference: "cf29c82b-f4a2-4749-a368-6e3bae4434ac",
    itemName: "optics_attachment",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 0,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "Optics_Attachment",
        Size: 0,
        Mass: .1,
        Volume: 1114,
        Grade: 1,
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Optics_Attachment",
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "Underbarrel_Attachment",
    reference: "fe5a7a59-7748-435b-9889-985127353223",
    itemName: "underbarrel_attachment",
    type: "WeaponAttachment",
    subType: "BottomAttachment",
    tags: "",
    requiredTags: "",
    size: 0,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.BottomAttachment",
    stdItem: {
        ClassName: "Underbarrel_Attachment",
        Size: 0,
        Mass: .1,
        Volume: 110,
        Grade: 1,
        Type: "WeaponAttachment.BottomAttachment",
        Classification: "FPS.WeaponAttachment.BottomAttachment",
        Name: "Underbarrel_Attachment",
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "weaponMount_nvtc_optics_holo_x1_s1",
    reference: "048facd2-32e2-419a-81e9-e9f7a6e971f7",
    itemName: "weaponmount_nvtc_optics_holo_x1_s1",
    type: "WeaponAttachment",
    subType: "IronSight",
    tags: "",
    requiredTags: "",
    size: 4,
    grade: 1,
    name: "@item_Namenvtc_optics_holo_x1_s1",
    manufacturer: "NVTC",
    classification: "FPS.WeaponAttachment.IronSight",
    stdItem: {
        ClassName: "weaponMount_nvtc_optics_holo_x1_s1",
        Size: 4,
        Mass: .1,
        Volume: 1447,
        Grade: 1,
        Class: "",
        Type: "WeaponAttachment.IronSight",
        Classification: "FPS.WeaponAttachment.IronSight",
        Name: "Gamma (1x Holographic)",
        Description: "Whether under the blazing sun or on the dark side of a moon, the NV-TAC Gamma projects an easy to see reticle to help ensure your shot finds its mark.",
        Manufacturer: {
            Code: "NVTC",
            Name: "NV-TAC"
        },
        HeatController: {
            InitialTemperature: -1,
            CoolingEqualizationMultiplier: 1,
            MinOperatingTemperature: 0,
            MinCoolingTemperature: 300,
            Emissions: {
                MinimumTemperatureForIR: 250,
                TemperatureToIR: 6,
                StartIREmission: 0
            },
            Overheat: {
                EnableOverheat: !1,
                MaxTemperature: 450,
                WarningTemperature: 370,
                RecoveryTemperature: 350
            }
        },
        WeaponModifier: {
            DamageModifier: {
                DamageMultiplier: 1,
                DamageOverTimeMultiplier: 1,
                FireRateMultiplier: 1,
                ProjectileSpeedMultiplier: 1,
                AmmoCostMultiplier: 1
            },
            RecoilModifier: {
                YawMaxDegrees: 1,
                PitchMaxDegrees: 1,
                RollMaxDegrees: 1
            },
            SpreadModifier: {
                Min: 1,
                Max: 1,
                FirstAttack: 1,
                PerAttack: 1,
                Decay: 1
            },
            AimModifier: {
                ZoomScale: 1,
                SecondZoomScale: 1,
                ZoomTimeScale: 1
            },
            BarrelEffectsStrength: 1,
            ChargeTimeMultiplier: 1,
            SoundRadiusMultiplier: 1
        }
    }
}, {
    className: "weapon_underbarrel_light_narrow",
    reference: "2a9e98d2-38af-4658-9801-a21aebb85109",
    itemName: "weapon_underbarrel_light_narrow",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_narrow",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_narrow",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_narrow_blue_01",
    reference: "69b9fbc3-d478-4622-9fc4-0970813f7065",
    itemName: "weapon_underbarrel_light_narrow_blue_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_narrow_blue_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_narrow_blue_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_narrow_gold_01",
    reference: "46c7a3a0-55f6-414a-852f-c62376d747cd",
    itemName: "weapon_underbarrel_light_narrow_gold_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_narrow_gold_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_narrow_gold_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_narrow_purple_01",
    reference: "18d0e506-c28f-48fb-820b-d0333ca25db5",
    itemName: "weapon_underbarrel_light_narrow_purple_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_narrow_purple_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_narrow_purple_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_narrow_red_01",
    reference: "187726a9-3eb5-48f7-96b5-b7419b1c0a49",
    itemName: "weapon_underbarrel_light_narrow_red_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_narrow_red_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_narrow_red_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_wide",
    reference: "02ab1342-8e78-46fc-b31f-3adfc3897578",
    itemName: "weapon_underbarrel_light_wide",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_wide",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_wide",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_wide_blue_01",
    reference: "df978ce2-2718-4be5-b29c-38bf73ed9746",
    itemName: "weapon_underbarrel_light_wide_blue_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_wide_blue_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_wide_blue_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_wide_gold_01",
    reference: "44fe968c-9e0b-4612-a166-6a2aae013cc6",
    itemName: "weapon_underbarrel_light_wide_gold_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_wide_gold_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_wide_gold_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_wide_purple_01",
    reference: "b2c50bd4-bf09-42d2-b8ad-c2f8919c8192",
    itemName: "weapon_underbarrel_light_wide_purple_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_wide_purple_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_wide_purple_01",
        Tags: ["uneditable"]
    }
}, {
    className: "weapon_underbarrel_light_wide_red_01",
    reference: "8b848848-07b5-44dc-8709-5f292d028625",
    itemName: "weapon_underbarrel_light_wide_red_01",
    type: "Light",
    subType: "Weapon",
    tags: "uneditable",
    requiredTags: "",
    size: 1,
    grade: 1,
    name: "@LOC_PLACEHOLDER",
    classification: "FPS.WeaponAttachment.Light",
    stdItem: {
        ClassName: "weapon_underbarrel_light_wide_red_01",
        Size: 1,
        Volume: 1,
        Grade: 1,
        Type: "Light.Weapon",
        Classification: "FPS.WeaponAttachment.Light",
        Name: "weapon_underbarrel_light_wide_red_01",
        Tags: ["uneditable"]
    }
}];

export default fpsWeapons;