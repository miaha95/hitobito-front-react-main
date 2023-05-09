import Download from "@/assets/images/download-icon-sky.svg";
import MobileProgress from "../../views/resume-mng/mobile-items/MobileProgress";
import { useRecoilState } from "recoil";
import { mobileStatus } from "../../stores/mobile-status";
import MobileSelectBox from "../../views/resume-mng/mobile-items/MobileSelectBox";

const ResumeMobile9 = (props) => {
    const [mobile, setMobileStatus] = useRecoilState(mobileStatus);


    const handleUpdateMobileBody = (e) => {
        const key = e.target.id
        const value = e.target.value

        setMobileStatus({
            ...mobile,
            [key]: value
        })
    }

    return (
        <>
            <div className="mobile-resume-wrap">
                <div className="flex items-center gap-3 space-between">
                    <MobileProgress />
                    <button className="btn btn-sm btn-skyblue w-36 flex gap-1 items-center">
                        <img src={Download} alt="" />
                        一時保存
                    </button>
                </div>
                <div className="mo-resume-tit">
                    居住地を選択してください
                </div>
                <div className="mobile-drop-wrap">
                    <MobileSelectBox id={'residentialArea'} data={mobile.api && mobile.api.residentialAreaList} value={mobile.residentialArea} onChange={handleUpdateMobileBody} />

                </div>
            </div>
        </>
    );
};
export default ResumeMobile9;
