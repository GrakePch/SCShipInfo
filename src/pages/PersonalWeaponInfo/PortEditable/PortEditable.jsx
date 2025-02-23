import { useEffect, useState } from "react";

import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

import icons from "../../../assets/icons";
import I18n from "../../../components/I18n";
import listFpsWeapon from "../../../data/fps-weapons";
import "./PortEditable.css";

const PortEditable = ({ data, name, icon }) => {
  const [windowActive, setWindowActive] = useState(false);
  const [listAttachments, setListAttachment] = useState([]);

  useEffect(() => {
    if (data == null) return;
    let type = data.Types[0];
    let templistAttachments = [];

    templistAttachments = listFpsWeapon.filter(
      (item) =>
        item.stdItem.Type === type &&
        item.size >= data.MinSize &&
        item.size <= data.MaxSize,
    );

    setListAttachment(templistAttachments);
  }, [data]);

  return data ? (
    <>
      <div className="PortEditable-container">
        <div className="port" onClick={() => setWindowActive(true)}>
          {data.InstalledItem ? (
            <div className="item">
              <p className="item-name">
                <I18n
                  text={(
                    "item_Name" + data.InstalledItem.ClassName
                  ).toLowerCase()}
                  hanhua
                />
              </p>
            </div>
          ) : (
            <p>EMPTY</p>
          )}
        </div>
        <div className="title">
          {icon}
          <p>
            <I18n text={name} />
          </p>
          {icons["s" + data.MaxSize]}
        </div>
      </div>
      <div
        className={`PortEditable-window-container ${windowActive ? "active" : ""}`}
      >
        <div
          className={`PortEditable-window-bg ${windowActive ? "active" : ""}`}
          onClick={() => setWindowActive(false)}
        ></div>
        <div className={`PortEditable-window ${windowActive ? "active" : ""}`}>
          <div className="nav">
            <div className="icon">{icon}</div>
            <p>
              <I18n text={name} />
            </p>
            <div className="size">{icons["s" + data.MaxSize]}</div>
            <div className="grow"></div>
            <div className="close" onClick={() => setWindowActive(false)}>
              <Icon path={mdiClose} />
            </div>
          </div>
          <div className="contents">
            {data.InstalledItem && (
              <div className="port">
                <div className="installed">
                  <p className="item-name">
                    <I18n
                      text={(
                        "item_Name" + data.InstalledItem.ClassName
                      ).toLowerCase()}
                      hanhua
                    />
                  </p>
                </div>
              </div>
            )}
            {/* <div className="port">
              {data.InstalledItem ? (
                <div className="installed">
                  <p className="item-name">
                    <I18n
                      text={(
                        "item_Name" + data.InstalledItem.ClassName
                      ).toLowerCase()}
                      hanhua
                    />
                  </p>
                </div>
              ) : (
                <p>EMPTY</p>
              )}
            </div> */}
            <p className="attachments-list-title">
              {listAttachments && listAttachments.length > 0 ? (
                <I18n text="Available Attachments" />
              ) : (
                <I18n text="No Other Available Attachments" />
              )}
            </p>
            <div className={"list"}>
              {listAttachments.map((item, idx) => (
                <div className="attachment" key={item.stdItem.Name}>
                  <p>
                    <I18n
                      text={(
                        "item_Name" + item.stdItem.ClassName
                      ).toLowerCase()}
                      hanhua
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="PortEditable-container invalid">
      <div className="port">
        <p>N/A</p>
      </div>
      <div className="title">
        <I18n text={name} />
      </div>
    </div>
  );
};

export default PortEditable;
