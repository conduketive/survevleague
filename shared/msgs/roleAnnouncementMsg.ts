import { AbstractMsg, type BitStream } from "../net";

export class RoleAnnouncementMsg extends AbstractMsg {
    playerId = 0;
    killerId = 0;
    role = "";
    assigned = false;
    killed = false;

    override serialize(s: BitStream) {
        s.writeUint16(this.playerId);
        s.writeUint16(this.killerId);
        s.writeGameType(this.role);
        s.writeBoolean(this.assigned);
        s.writeBoolean(this.killed);
        s.writeAlignToNextByte();
    }

    override deserialize(s: BitStream) {
        this.playerId = s.readUint16();
        this.killerId = s.readUint16();
        this.role = s.readGameType();
        this.assigned = s.readBoolean();
        this.killed = s.readBoolean();
        s.readAlignToNextByte();
    }
}
