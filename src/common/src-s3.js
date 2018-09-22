const {
  ENV,
  AWS_S3_BUCKET_STAGING,
  AWS_S3_BUCKET_STAGING_REGION: S3_STAGING_REGION,
  AWS_S3_BUCKET_PRODUCTION,
  AWS_S3_BUCKET_PRODUCTION_REGION: S3_PRODUCTION_REGION,
} = process.env;

const needS3 = ENV === 'staging' || ENV === 'production';

const bucket = ENV === 'production' ? AWS_S3_BUCKET_PRODUCTION : AWS_S3_BUCKET_STAGING;
const bucketRegion = ENV === 'production' ? S3_PRODUCTION_REGION : S3_STAGING_REGION;

const getS3Link = src => (
  `https://s3.${bucketRegion}.amazonaws.com/${bucket}/${src}`
);

export default src => (needS3 ? getS3Link(src.split('/').pop()) : src);
