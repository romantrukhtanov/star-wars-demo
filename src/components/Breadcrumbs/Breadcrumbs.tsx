import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export type Breadcrumb = {
  title: string,
  link: string,
  disabled?: boolean,
};

type Props = {
  data: Array<Breadcrumb>
};

export function Breadcrumbs({ data }: Props) {
  return (
    <MUIBreadcrumbs aria-label="breadcrumbs">
      {data.map(renderBreadcrumb)}
    </MUIBreadcrumbs>
  );

  function renderBreadcrumb(item: Breadcrumb) {
    if (item.disabled) {
      return <Typography key={item.title} color="text.primary">{item.title}</Typography>;
    }

    return (
      <MUILink key={item.title} component={Link} underline="hover" color="inherit" to={item.link}>
        {item.title}
      </MUILink>
    );
  }
}
