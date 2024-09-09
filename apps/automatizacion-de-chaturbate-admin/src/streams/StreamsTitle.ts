import { Streams as TStreams } from "../api/streams/Streams";

export const STREAMS_TITLE_FIELD = "streamKey";

export const StreamsTitle = (record: TStreams): string => {
  return record.streamKey?.toString() || String(record.id);
};
